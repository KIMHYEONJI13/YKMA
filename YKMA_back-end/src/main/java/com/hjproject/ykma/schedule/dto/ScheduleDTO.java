package com.hjproject.ykma.schedule.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ScheduleDTO {

    /**
     * 예약번호
     * 예약자번호
     * 예약일시
     * 예약상태
     * 상품명
     * 담당자
     * 예약금
     **/

    private int scheduleNo;
    private int userId;
    private Date scheduleDttm;
    private char status;
    private int managerId;





}
