package com.daisy.teabackgroundmanagementsystemspringboot.Service;

import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.PageBean;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {
    /**
     * 注册
     * @param user
     */
    void addUser(User user);

    /**
     * 登入
     * @param user
     * @return
     */
    User login(User user);

    /**
     * 查询用户信息
     * @param user
     * @return
     */
    List<User> getUserInfo(User user);

    /**
     * 查询用户
     * @param user
     * @return
     */
    List<User> getUser(User user);

    /**
     * 删除用户
     * @param id
     */
    void delectUser(Integer id);

    /**
     * 重置id
     */
    void resetId();

    /**
     * 更具页码和页数查询用户信息
     * @param page
     * @param pageSize
     * @return
     */
    PageBean page(Integer page, Integer pageSize);

    /**
     * 更新用户信息
     * @param user
     */
    void updateUser(User user);
}
