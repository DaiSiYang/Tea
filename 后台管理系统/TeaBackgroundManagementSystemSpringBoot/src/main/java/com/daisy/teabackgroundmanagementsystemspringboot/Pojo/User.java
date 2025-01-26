package com.daisy.teabackgroundmanagementsystemspringboot.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 我的
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String username;
    private String password;
    private String image;
    private String email;
    private String phone;
    private String bio;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
