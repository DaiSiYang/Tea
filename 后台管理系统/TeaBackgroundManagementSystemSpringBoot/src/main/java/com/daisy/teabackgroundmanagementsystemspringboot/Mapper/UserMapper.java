package com.daisy.teabackgroundmanagementsystemspringboot.Mapper;

import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {
    /**
     * 注册
     * @param user
     */
    @Insert("insert into taguser(username,password,image,create_Time,update_Time) " +
            "values(#{username},#{password},#{image},#{createTime},#{updateTime})")
    void addUser(User user);

    /**
     * 登入
     * @param user
     * @return
     */
    @Select("select * from taguser where username=#{username} and password=#{password}")
    User login(User user);

    /**
     * 查询
     * @param user
     * @returnfans
     */
    @Select("select * from taguser where username=#{username}")
    List<User> getuserInfo(User user);

    /**
     * 查询
     * @param user
     * @return
     */
    List<User> getUser(User user);

    /**
     * 删除
     * @param id
     */

    void delectUser(Integer id);

    /**
     * 重置id
     */
    void resetId();

    @Select("select * from taguser limit #{start},#{pageSize}")
    public List<User> page(Integer start , Integer pageSize);

    @Select("select count(*) from taguser")
    public Integer count();

    void updateUser(User user);
}
