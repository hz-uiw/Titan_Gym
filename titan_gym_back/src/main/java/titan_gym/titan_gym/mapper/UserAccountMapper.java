package titan_gym.titan_gym.mapper;

import org.apache.ibatis.annotations.Mapper;
import titan_gym.titan_gym.entity.User;

@Mapper
public interface UserAccountMapper {
    User selectByUsername(String username);
    User selectById(int userId);
    int addUserAccount(User user);
}
