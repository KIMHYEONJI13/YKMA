package com.hjproject.ykma.user.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class KaKaoLoginController {

   /* @RequestMapping("/login/oauth2/code/kakao")
    public String kakaoLogin(@RequestParam String code) {
        String accessToken = kakaoApi.getAccessToken(code);

        Map<String, Object> userInfo = kakaoApi.getUserInfo(accessToken);

        String email = (String)userInfo.get("email");
        String nickname = (String)userInfo.get("nickname");

        System.out.println("nickname : " + nickname);
        System.out.println("accessToken : " + accessToken);

        return "redirect:/login";
    }*/

}
