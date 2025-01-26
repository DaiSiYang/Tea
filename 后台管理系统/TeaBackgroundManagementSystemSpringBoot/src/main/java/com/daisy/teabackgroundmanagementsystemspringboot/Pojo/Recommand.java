package com.daisy.teabackgroundmanagementsystemspringboot.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
// 商品
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recommand {
    private Integer id;
    private String url;
    private String text;
    private Integer price;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
