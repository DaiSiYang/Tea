package com.daisy.teabackgroundmanagementsystemspringboot.Service.impl;

import com.daisy.teabackgroundmanagementsystemspringboot.Mapper.UserMapper;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.PageBean;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.User;
import com.daisy.teabackgroundmanagementsystemspringboot.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    /**
     * 注册
     * @param user
     */
    @Override
    public void addUser(User user) {
        user.setCreateTime(LocalDateTime.now());
        user.setUpdateTime(LocalDateTime.now());
        userMapper.addUser(user);
    }

    /**
     * 登入接口
     * @param user
     * @return
     */
    @Override
    public User login(User user) {
        return userMapper.login(user);
    }

    /**
     *
     * @param user
     * @return
     */
    @Override
    public List<User> getUserInfo(User user) {
        return userMapper.getuserInfo(user);
    }

    /**
     * 查询用户信息
     * @param user
     * @return
     */
    @Override
    public List<User> getUser(User user) {
        return userMapper.getUser(user);
    }
    /**
     * 删除用户
     * @param id
     */
    @Override
    public void delectUser(Integer id) {
        userMapper.delectUser(id);
    }

    @Override
    public void resetId() {
        userMapper.resetId();
    }

    @Override
    public PageBean page(Integer page, Integer pageSize) {
        Integer count = userMapper.count();
        Integer start = (page - 1) * pageSize;
        List<User> users = userMapper.page(start, pageSize);
        return  new PageBean(count,users);
    }

    @Override
    public void updateUser(User user) {
        user.setUpdateTime(LocalDateTime.now());
        userMapper.updateUser(user);
    }


}
