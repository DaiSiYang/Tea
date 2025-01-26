package com.daisy.teabackgroundmanagementsystemspringboot.Service.impl;

import com.daisy.teabackgroundmanagementsystemspringboot.Mapper.ContentMapper;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Content;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Recommand;
import com.daisy.teabackgroundmanagementsystemspringboot.Service.ContentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
public class ContentServiceImpl implements ContentService {
    @Autowired
    private ContentMapper contentMapper;

    /**
     * 获取热门内容
     *
     * @return
     */
    @Override
    public List<Content> getHotContent() {

        return contentMapper.getHotContent();
    }

    /**
     * 删除热门内容
     *
     * @param id
     */
    @Override
    public void delete(Integer id) {
        contentMapper.delete(id);
    }

    /**
     * 添加热门内容
     *
     * @param content
     */
    @Override
    public void addHotList(Content content) {
        content.setCreateTime(LocalDateTime.now());
        content.setUpdateTime(LocalDateTime.now());
        contentMapper.addHotList(content);
    }

    /**
     * 修改内容
     *
     * @param content
     */
    @Override
    public void updateHot(Content content) {
        content.setUpdateTime(LocalDateTime.now());
        contentMapper.updateHot(content);
    }

    @Override
    public List<Content> getComments(Integer id) {
        return contentMapper.getComments(id);
    }

    /**
     * 获取商品
     *
     * @return
     */
    @Override
    public List<Recommand> getRecommand() {
        return contentMapper.getRecommand();
    }

    /**
     * 添加评论
     *
     * @param content
     */
    @Override
    public void addComments(Content content) {
        content.setCreateTime(LocalDateTime.now());
        contentMapper.addComments(content);
    }

    /**
     * 修改商品
     *
     * @param recommand
     */
    @Override
    public void updateRecommand(Recommand recommand) {
        recommand.setUpdateTime(LocalDateTime.now());
        contentMapper.updateRecommand(recommand);
    }

    /**
     * 删除商品
     *
     * @param id
     */
    @Override
    public void delRecommand(Integer id) {
        contentMapper.delRecommand(id);
    }

    /**
     * 添加商品
     *
     * @param recommand
     */
    @Override
    public void addRecommand(Recommand recommand) {
        recommand.setCreateTime(LocalDateTime.now());
        contentMapper.addRecommand(recommand);
    }

}
