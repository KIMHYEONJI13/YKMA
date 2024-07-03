package com.hjproject.ykma.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //기본키
    private String oauth2Id;
    private String name; //유저 이름
    private String password; //유저 비밀번호
    private String email; //유저 구글 이메일
    private Role role; //유저 권한 (일반 유저, 관리자)
    private String provider; //공급자
    private String providerId; //공급 아이디
    private String profile_yn;
    private String picture;

    @Builder
    public User(String oauth2Id, String name, String password, String email, Role role, String provider, String providerId, String profile_yn, String picture) {
        this.oauth2Id=oauth2Id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.role = role;
        this.provider = provider;
        this.providerId = providerId;
        this.profile_yn = profile_yn;
        this.picture = picture;
    }

    public User update(String name) {
        this.name = name;
        return this;
    }


}
