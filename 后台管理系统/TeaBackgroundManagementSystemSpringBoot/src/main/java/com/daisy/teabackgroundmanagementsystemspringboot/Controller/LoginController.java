package com.daisy.teabackgroundmanagementsystemspringboot.Controller;

import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Result;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.User;
import com.daisy.teabackgroundmanagementsystemspringboot.Service.UserService;
import com.daisy.teabackgroundmanagementsystemspringboot.Utils.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@Slf4j
public class LoginController {
    @Autowired
    private UserService userService;

    /**
     * 添加用户，注册接口
     * @return
     */
    @PostMapping("/user/register")
    public Result addUser(@RequestBody User user){
        log.info("添加用户");
        userService.addUser(user);

        try {
            return Result.success("注册成功");
        } catch (Exception e) {
           return Result.error("用户名已存在");
        }
    }

    /**
     *
     * @param user
     * @return
     */
    @PostMapping("/user/login")
    public Result login(@RequestBody User user){
        log.info("登录中...");
        User u = userService.login(user);
        if (u != null){
            Map<String, Object> claims = new HashMap<>();
            claims.put("username", u.getUsername());
            claims.put("id", u.getId());
            claims.put("password", u.getPassword());
            String token = JwtUtil.generateToken(claims);
            return Result.success(token);
        }
        return Result.error("用户名或密码错误");
    }
}
