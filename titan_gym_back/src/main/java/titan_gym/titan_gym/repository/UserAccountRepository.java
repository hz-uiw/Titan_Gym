package titan_gym.titan_gym.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import titan_gym.titan_gym.entity.User;
import titan_gym.titan_gym.mapper.UserAccountMapper;

import java.util.Optional;

@Repository
public class UserAccountRepository {
    @Autowired
    private UserAccountMapper userAccountMapper;

    public Optional<User> findByUsername(String username) {
        return Optional.ofNullable(userAccountMapper.selectByUsername(username));
    }

    public Optional<User> findById(int userId) {
        return Optional.ofNullable(userAccountMapper.selectById(userId));
    }

    public User saveUserAccount(User user) {
        userAccountMapper.addUserAccount(user);
        return user;
    }

    public void updateAccountEnabledByUsername(String username) {
        userAccountMapper.updateAccountEnabledByUsernameInt(username);
    }
}
