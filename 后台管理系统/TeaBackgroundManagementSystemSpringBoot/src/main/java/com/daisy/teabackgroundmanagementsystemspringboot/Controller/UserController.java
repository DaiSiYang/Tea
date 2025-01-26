package com.daisy.teabackgroundmanagementsystemspringboot.Controller;

import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.PageBean;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Result;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.User;
import com.daisy.teabackgroundmanagementsystemspringboot.Service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;

    /**
     * 获取用户信息
     * @param user
     * @return
     */
   @PostMapping("/user/getuserinfo")
    public Result GetUserInfo(@RequestBody User user){
        log.info("获取用户信息");
        List<User> u= userService.getUserInfo(user);
        try {
            return Result.success(u);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 查询用户
     * @param user
     * @return
     */
    @PostMapping("/user/queryuser")
    public Result queryUser(@RequestBody User user) {
        log.info("查询用户: {}", user);
        List<User> u = userService.getUser(user);
        return Result.success(u);
    }

    /**
     * 删除用户
     * @param id
     * @return
     */
    @DeleteMapping("/user/{id}")
    public Result delectUser(@PathVariable Integer id){
        log.info("删除用户");
        log.info("id为"+id);
        userService.delectUser(id);
        return Result.success();
    }
    @PostMapping("/user/resetid")
    public Result resetId(){
        log.info("重置id");
        userService.resetId();
        return Result.success("重置id成功");
    }

    /**
     * 更具页面查询用户信息
     * @param page
     * @param pageSize
     * @return
     */
    @GetMapping("/user/page")
    public Result page( Integer page , Integer pageSize){
        if (page == null){
            page = 1;
        }
        if (pageSize == null){
            pageSize = 10;
        }
        log.info("分页查询{}" , page);
        PageBean pageBean = userService.page(page,pageSize);
        return Result.success(pageBean);
    }

    /**
     * 修改用户信息
     * @param user
     * @return
     */
    @PutMapping("/user/updateuser")
    public Result updateUser(@RequestBody User user){
        log.info("修改用户信息");
        log.info("修改用户信息为{}",user);
        log.info("用户id为{}",user.getId());
        userService.updateUser(user);
        return Result.success("修改信息成功");
    }
}
