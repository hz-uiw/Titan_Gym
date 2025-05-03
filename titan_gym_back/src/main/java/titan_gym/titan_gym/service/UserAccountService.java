package titan_gym.titan_gym.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import titan_gym.titan_gym.dto.request.ReqJoinDto;
import titan_gym.titan_gym.dto.request.ReqLoginDto;
import titan_gym.titan_gym.entity.User;
import titan_gym.titan_gym.exception.DuplicatedValueException;
import titan_gym.titan_gym.exception.FieldError;
import titan_gym.titan_gym.repository.UserAccountRepository;
import titan_gym.titan_gym.security.jwt.JwtUtil;

import java.util.Date;
import java.util.List;

@Service
public class UserAccountService {
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private UserAccountRepository userAccountRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private JwtUtil jwtUtil;

    public boolean duplicateByUsername(String username) {
        return userAccountRepository.findByUsername(username).isPresent();
    }

    @Transactional(rollbackFor = Exception.class)
    public User join(ReqJoinDto reqJoinDto) {
        if(duplicateByUsername(reqJoinDto.getUsername())) {
            throw new DuplicatedValueException(List.of(FieldError.builder()
                    .field("username")
                    .message("이미 존재하는 사용자이름입니다.")
                    .build()));
        }
        User user = User.builder()
                .username(reqJoinDto.getUsername())
                .password(reqJoinDto.getPassword())
                .email(reqJoinDto.getEmail())
                .name(reqJoinDto.getName())
                .phoneNumber(reqJoinDto.getPhoneNumber())
                .gender(reqJoinDto.getGender())
                .accountExpired(1)
                .accountLocked(1)
                .credentialsExpired(1)
                .accountEnabled(0)
                .build();
        userAccountRepository.saveUserAccount(user);

        try { // 계정 생성하면 인증 메일 보내주기! 근데 메일이 전송 안됐다고 회원가입 실패하면 안되니까, 메서드에 throws 로 예외 처리하지 않고 try-catch 사용!
            emailService.sendAuthMail(reqJoinDto.getEmail(), reqJoinDto.getUsername());
        } catch (Exception e) {
            e.printStackTrace();
        }

//        UserRole userRole = UserRole.builder()
//                .userId(user.getUserId())
//                .roleId(1)
//                .build();
//        userRoleRepository.save(userRole);
        return user;
    }

    public String login(ReqLoginDto reqLoginDto) {
        User user = userAccountRepository
                .findByUsername(reqLoginDto.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("사용자 정보를 찾을 수 없습니다."));
        if(!passwordEncoder.matches(reqLoginDto.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("사용자 정보를 다시 확인하세요.");
        }

        // 이메일 인증 여부 확인
        if(user.getAccountEnabled() == 0) {
            throw new DisabledException("이메일 인증이 필요합니다.");
        }

        Date expires = new Date(new Date().getTime() + (1000l * 60 * 60 * 24 * 7));

        return jwtUtil.generateToken(
                user.getUsername(),
                Integer.toString(user.getUserId()),
                expires);
    }
}
