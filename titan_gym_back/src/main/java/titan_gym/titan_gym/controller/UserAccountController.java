package titan_gym.titan_gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import titan_gym.titan_gym.dto.request.ReqJoinDto;
import titan_gym.titan_gym.service.UserAccountService;

@RestController
@RequestMapping("/api/account")
public class UserAccountController {
    @Autowired
    private UserAccountService userAccountService;

    @GetMapping("/join")
    public ResponseEntity<?> joinAccount(@RequestBody ReqJoinDto reqJoinDto) {
        return ResponseEntity.ok().body(userAccountService.join(reqJoinDto));
    }
}
