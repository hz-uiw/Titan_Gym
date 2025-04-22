package titan_gym.titan_gym.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRole {
    private int userRoleId;
    private int userId;
    private int roleId;

    private Role role;
}
