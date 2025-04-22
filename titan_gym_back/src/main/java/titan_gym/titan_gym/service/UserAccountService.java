package titan_gym.titan_gym.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import titan_gym.titan_gym.dto.request.ReqJoinDto;
import titan_gym.titan_gym.entity.User;
import titan_gym.titan_gym.exception.DuplicatedValueException;
import titan_gym.titan_gym.exception.FieldError;
import titan_gym.titan_gym.repository.UserAccountRepository;
import titan_gym.titan_gym.security.jwt.JwtUtil;

import java.util.List;

@Service
public class UserAccountService {
    @Autowired
    private UserAccountRepository userAccountRepository;
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
                .accountExpired(1)
                .accountLocked(1)
                .credentialsExpired(1)
                .accountEnabled(0)
                .build();
        userAccountRepository.saveUserAccount(user);

//        UserRole userRole = UserRole.builder()
//                .userId(user.getUserId())
//                .roleId(1)
//                .build();
//        userRoleRepository.save(userRole);

        return user;
    }
}
