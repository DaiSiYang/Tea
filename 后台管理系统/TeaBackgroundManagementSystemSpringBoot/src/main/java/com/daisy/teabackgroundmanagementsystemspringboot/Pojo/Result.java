package com.daisy.teabackgroundmanagementsystemspringboot.Pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

/**
 * 通用返回结果封装类，使用 Lombok 简化代码
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Result {

    private Integer code;        // 状态码
    private String message;      // 响应消息
    private Object data;         // 数据

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss") // 格式化日期字段
    private Date timestamp;      // 日期字段

    // 静态方法返回成功结果
    public static Result success(Object data) {
        return new Result(200, "成功", data, new Date());
    }

    // 静态方法返回成功结果，无数据
    public static Result success() {
        return new Result(200, "成功", null, new Date());
    }

    // 静态方法返回失败结果
    public static Result error(String message) {
        return new Result(500, message, null, new Date());
    }

    // 静态方法返回带有自定义状态码的失败结果
    public static Result error(Integer code, String message) {
        return new Result(code, message, null, new Date());
    }

    // 静态方法返回带有状态码和数据的成功结果
    public static Result successWithCustomCode(Integer code, String message, Object data) {
        return new Result(code, message, data, new Date());
    }
}