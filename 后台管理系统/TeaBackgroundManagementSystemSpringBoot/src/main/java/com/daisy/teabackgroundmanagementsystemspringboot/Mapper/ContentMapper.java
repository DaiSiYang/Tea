package com.daisy.teabackgroundmanagementsystemspringboot.Mapper;

import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Content;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Recommand;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ContentMapper {
    /**
     * 获取热门内容
     * @return
     */
    @Select("SELECT * FROM hot ORDER BY create_Time DESC , update_time DESC")
    List<Content> getHotContent();

    /**
     * 删除热门内容
     * @param id
     */
    @Delete("delete from hot where id=#{id}")
    void delete(Integer id);

    /**
     * 添加热门内容
     * @param content
     */
    void addHotList(Content content);

    /**
     * 修改热门内容
     * @param content
     */
    void updateHot(Content content);

    /**
     * 获取热门评论内容
     * @param id
     * @return
     */
    @Select("SELECT * FROM comments WHERE hot_id=#{id} order by create_Time desc" )
    List<Content> getComments(Integer id);

    /**
     * 获取商品
     * @return
     */
    @Select("SELECT * FROM recommand ORDER BY create_Time desc ,update_Time desc ")
    List<Recommand> getRecommand();

    /**
     * 添加评论
     * @param content
     */
    @Insert("insert into comments(avatarUrl,name,text,create_Time,hot_id) values (#{avatarUrl},#{name},#{text},#{createTime},#{hot_id})")
    void addComments(Content content);

    /**
     * 修改推荐商品
     * @param recommand
     */
    void updateRecommand(Recommand recommand);

    /**
     * 删除推荐商品
     * @param id
     */
    @Delete("delete from recommand where id=#{id}")
    void delRecommand(Integer id);

    /**
     * 添加商品
     * @param recommand
     */
    @Insert("insert into recommand(url,text,price,create_Time) values (#{url},#{text},#{price},#{createTime})")
    void addRecommand(Recommand recommand);
}
