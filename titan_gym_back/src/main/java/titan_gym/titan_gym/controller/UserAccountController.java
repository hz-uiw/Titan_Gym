package titan_gym.titan_gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import titan_gym.titan_gym.dto.request.ReqJoinDto;
import titan_gym.titan_gym.service.UserAccountService;

@RestController
@RequestMapping("/api/account")
public class UserAccountController {
    @Autowired
    private UserAccountService userAccountService;

    @PostMapping("/join")
    public ResponseEntity<?> joinAccount(@RequestBody ReqJoinDto reqJoinDto) {
        System.out.println("🔥 [Controller] joinAccount 진입: " + reqJoinDto);
        return ResponseEntity.ok().body(userAccountService.join(reqJoinDto));
    }
}
