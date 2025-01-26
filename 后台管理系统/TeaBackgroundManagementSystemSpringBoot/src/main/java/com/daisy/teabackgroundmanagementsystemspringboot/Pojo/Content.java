package com.daisy.teabackgroundmanagementsystemspringboot.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
// 茶圈
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Content {
    private Integer id;
    private String avatarUrl;
    private String name;
    private String actor;
    private String text;
    private String image1;
    private String image2;
    private Integer forward;
    private Integer Thumbs;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer hot_id;
}
