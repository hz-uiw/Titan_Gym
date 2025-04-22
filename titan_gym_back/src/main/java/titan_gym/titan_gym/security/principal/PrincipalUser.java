package titan_gym.titan_gym.security.principal;

import lombok.Builder;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import titan_gym.titan_gym.entity.User;

import java.util.Collection;
import java.util.Map;
import java.util.stream.Collectors;

@Builder
@Getter
public class PrincipalUser implements UserDetails {
    private User user;
    private Map<String, Object> attributes;
    private String name;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user
                .getUserRoles()
                .stream()
                .map(userRole -> new SimpleGrantedAuthority(userRole.getRole().getRoleName()))
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public boolean isAccountNonExpired() {
        return user.getAccountExpired() == 1;
    }

    @Override
    public boolean isAccountNonLocked() {
        return user.getAccountLocked() == 1;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return user.getCredentialsExpired() == 1;
    }

    @Override
    public boolean isEnabled() {
        return user.getAccountEnabled() == 1;
    }
}
