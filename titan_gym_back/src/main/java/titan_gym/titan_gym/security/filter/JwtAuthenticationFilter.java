package titan_gym.titan_gym.security.filter;

import io.jsonwebtoken.Claims;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import titan_gym.titan_gym.entity.User;
import titan_gym.titan_gym.repository.UserAccountRepository;
import titan_gym.titan_gym.security.jwt.JwtUtil;
import titan_gym.titan_gym.security.principal.PrincipalUser;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter implements Filter {
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;

        jwtAuthentication(getAccessToken(request));

        filterChain.doFilter(servletRequest, servletResponse);
    }

    private void jwtAuthentication(String accessToken) {
        if(accessToken == null) {return;}
        Claims claims = jwtUtil.parseToken(accessToken);

        int userId = Integer.parseInt(claims.getId());
        User user = userAccountRepository.findById(userId).get();

        PrincipalUser principalUser = PrincipalUser.builder().user(user).build();
        Authentication authentication =
                new UsernamePasswordAuthenticationToken(principalUser, null, principalUser.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    private String getAccessToken(HttpServletRequest request) {
        String accessToken = null;
        String authorization = request.getHeader("Authorization");

        if (authorization != null && authorization.startsWith("Bearer ")) {
            accessToken = authorization.substring(7);
        }

        return accessToken;
    }
}
