package com.hjproject.ykma.user.domain;

import com.hjproject.ykma.user.entity.User;
import lombok.Getter;

@Getter
public class SessionUser {

    private String name;
    private String email;
    private String profile_yn;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.profile_yn = user.getProfile_yn();
    }
}
