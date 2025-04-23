package titan_gym.titan_gym.dto.request;

import lombok.Data;

@Data
public class ReqJoinDto {
    private String username;
    private String password;
    private String email;
    private String name;
    private String phoneNumber;
    private String gender;
}
