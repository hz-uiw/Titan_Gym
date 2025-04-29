package titan_gym.titan_gym.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import titan_gym.titan_gym.dto.request.ReqJoinDto;
import titan_gym.titan_gym.dto.request.ReqLoginDto;
import titan_gym.titan_gym.dto.response.RespTokenDto;
import titan_gym.titan_gym.service.UserAccountService;

@RestController
@RequestMapping("/api/account")
public class UserAccountController {
    @Autowired
    private UserAccountService userAccountService;

    @Operation(summary = "회원가입", description = "회원가입 설명")
    @PostMapping("/join")
    public ResponseEntity<?> joinAccount(@RequestBody ReqJoinDto reqJoinDto) {
        return ResponseEntity.ok().body(userAccountService.join(reqJoinDto));
    }

    @Operation(summary = "로그인" ,description = "로그인 설명")
    @PostMapping("/login")
    public ResponseEntity<?> loginAccount(@RequestBody ReqLoginDto reqLoginDto) {
        RespTokenDto respTokenDto = RespTokenDto.builder()
                .type("JWT")
                .name("AccessToken")
                .token(userAccountService.login(reqLoginDto))
                .build();
        return ResponseEntity.ok().body(reqLoginDto);
    }
}
