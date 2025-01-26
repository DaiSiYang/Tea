package com.daisy.teabackgroundmanagementsystemspringboot.Controller;

import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Content;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Recommand;
import com.daisy.teabackgroundmanagementsystemspringboot.Pojo.Result;
import com.daisy.teabackgroundmanagementsystemspringboot.Service.ContentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class ContentController {
    @Autowired
    private ContentService contentService;

    /**
     * 获取热门内容
     * @return
     */
    @GetMapping("/content/getHoy")
    public Result getHotContent(){
        log.info("获取热门内容");
        List<Content> list = contentService.getHotContent();
        return Result.success(list);
    }

    /**
     * 删除热门内容
     * @param id
     * @return
     */
    @DeleteMapping("/content/{id}")
    public Result delete(@PathVariable Integer id){
        log.info("删除热门内容");
        contentService.delete(id);
        return Result.success("删除成功");
    }

    /**
     * 添加热门内容
     * @param content
     * @return
     */
    @PostMapping("/content/addHotList")
    public Result addHotList(@RequestBody Content content){
        log.info("添加热门内容");
        contentService.addHotList(content);
        return Result.success("添加成功");
    }

    /**
     * 修改内容
     * @param content
     * @return
     */
    @PutMapping("/content/updateHot")
    public Result updateHot(@RequestBody Content content){
        log.info("修改热门内容");
        contentService.updateHot(content);
        return Result.success("修改成功");
    }

    /**
     * 获取热门评论内容
     * @param id
     * @return
     */
    @GetMapping("/content/Comments/{id}")
    public Result getComments(@PathVariable Integer id){
        log.info("获取热门评论内容");
        List<Content> list = contentService.getComments(id);
        return Result.success(list);
    }

    /**
     * 获取商品
     * @return
     */
    @GetMapping("/content/getRecommand")
    public Result getRecommand(){
        log.info("获取推荐内容");
        List<Recommand> list = contentService.getRecommand();
        return Result.success(list);
    }

    /**
     * 添加评论
     * @param content
     * @return
     */
    @PostMapping("/content/addComments")
    public Result addComments(@RequestBody Content content){
        log.info("添加热门评论内容");
        contentService.addComments(content);
        return Result.success("添加成功");
    }
    /**
     * 修改推荐内容
     * @param recommand
     * @return
     */
    @PutMapping("/content/updateRecommand")
    public Result updateRecommand(@RequestBody Recommand recommand){
        log.info("修改推荐内容");
        contentService.updateRecommand(recommand);
        return Result.success("修改成功");
    }
    /**
     * 删除推荐内容
     * @param id
     * @return
     */
    @DeleteMapping("/content/delRecommand/{id}")
    public Result delRecommand(@PathVariable Integer id){
        log.info("删除推荐内容");
        log.info("id为"+id);
        contentService.delRecommand(id);
        return Result.success("删除成功");
    }

    /**
     * 添加商品·
     * @param recommand
     * @return
     */

    @PostMapping("/content/addRecommand")
    public Result addRecommand(@RequestBody Recommand recommand){
        log.info("添加推荐内容");
        contentService.addRecommand(recommand);
        return Result.success("添加成功");
    }
}
