package com.daisy.teabackgroundmanagementsystemspringboot.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageBean {
    private Integer page;
    private List rows;
}
