package com.daisy.teabackgroundmanagementsystemspringboot.Service;

import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Content;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Recommand;

import java.util.List;

public interface ContentService {
    /**
     * 获取热门内容
     * @return
     */
    List<Content> getHotContent();

    /**
     * 删除热门内容
     * @param id
     */
    void delete(Integer id);

    /**
     * 添加热门内容
     * @param content
     */
    void addHotList(Content content);

    /**
     * 修改内容
     * @param content
     */
    void updateHot(Content content);

    /**
     * 获取评论
     * @param id
     * @return
     */
    List<Content> getComments(Integer id);

    /**
     * 获取商品
     * @return
     */
    List<Recommand> getRecommand();

    /**
     * 添加评论
     * @param content
     */
    void addComments(Content content);

    /**
     * 修改商品
     * @param recommand
     */
    void updateRecommand(Recommand recommand);

    /**
     * 删除商品
     * @param id
     */
    void delRecommand(Integer id);

    /**
     * 添加商品
     * @param recommand
     */
    void addRecommand(Recommand recommand);
}
