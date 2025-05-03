package titan_gym.titan_gym.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import titan_gym.titan_gym.entity.User;

@Mapper
public interface UserAccountMapper {
    User selectByUsername(String username);
    User selectById(int userId);
    int addUserAccount(User user);

    int updateAccountEnabledByUsernameInt(@Param("username") String username);
}
