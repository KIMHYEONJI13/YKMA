package com.hjproject.ykma.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {

    private String email;
    private String name;
    private String picture;

    @Builder
    public UserDTO(String email, String name, String picture) {
        this.email = email;
        this.name = name;
        this.picture = picture;
    }

}
