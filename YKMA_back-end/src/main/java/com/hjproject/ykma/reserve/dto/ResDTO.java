package com.hjproject.ykma.reserve.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResDTO {

    /**
     * 삼품코드
     * 상품명
     * 상품정보
     * 담당자번호
     * 상품금액
     * */

    private int resNo;
    private String resTitle;
    private String resContent;
    private int userId;
    private int price;

}
