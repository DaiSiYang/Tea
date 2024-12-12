// couresPages/pages/Newlessons/Newlessons.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    courseList: [
      {
        id: 1,
        title: "中国茶文化简史",
        imageUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/5eODvZ3nNSwH4aZ2NvyiahB9vKxgV5mhGvaMjMCBSPiciaU7DHd1gpDiamemvS1YaGhVMPQ8K5VKJRXJNWzVlOxAOQ/640?wx_fmt=jpeg", // 请确保图片路径正确
        date: "8月25日",
        views: 2451,
        description: "中国茶文化是中国制茶、饮茶的文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，少说也有4700多年了。"
      },
      {
        id: 2,
        title: "茶经",
        imageUrl: "https://gw.alicdn.com/imgextra/O1CN01kngmoQ2LY22g1VJ3L_!!3937219703-0-C2M.jpg_460x460q90.jpg_.webp",
        date: "8月26日",
        views: 1832,
        description: "《茶经》是唐代陆羽创作的茶学专著，是中国乃至世界现存最早、最完整、最全面的茶叶专著，被誉为茶叶百科全书。"
      },
      {
        id: 3,
        title: "茶思想研讨",
        imageUrl: "https://img.alicdn.com/img/i2/40543961/O1CN01QEYaAq1f8BiZiDv3O_!!0-saturn_solar.jpg_460x460q90.jpg_.webp",
        date: "8月27日",
        views: 1654,
        description: "茶虽简单，却蕴含无限韵味，提醒我们要珍视眼前的每一刻，活在当下，用心去体验生活中的点点滴滴。"
      },
      {
        id: 4,
        title: "东西方艺术欣赏",
        imageUrl: "https://img.alicdn.com/img/i4/110487193/O1CN01ghCH18230RnEqjXDf_!!0-saturn_solar.jpg_460x460q90.jpg_.webp",
        date: "8月28日",
        views: 1245,
        description: "西方艺术家学习借鉴东方艺术的两个高潮是印象派和超现实主义，区别在于印象派关注东方艺术的符号和元素。"
      },
      {
        id: 5,
        title: "泡茶技艺初级",
        imageUrl: "https://img.alicdn.com/img/i1/5273923003/O1CN01lzJhHx1Y3QL3eUFBU_!!2-saturn_solar.png_460x460q90.jpg_.webp",
        date: "9月5日",
        views: 1102,
        description: "茶道，就是品赏茶的美感之道。茶道是一种烹茶饮茶的生活艺术，一种以茶修身的生活方式。"
      },
      {
        id: 6,
        title: "初级实践",
        imageUrl: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/747396235/O1CN01pXN5xi1vvfxJaJL1c_!!0-item_pic.jpg_460x460q90.jpg_.webp",
        date: "9月6日",
        views: 986,
        description: "茶的泡法 泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量,这样茶的香味才会充分发挥。"
      },
      {
        id: 7,
        title: "中级实践",
        imageUrl: "https://img.alicdn.com/img/i3/110683765/O1CN01yfjDh11dgPzFjYoJt_!!0-saturn_solar.jpg_460x460q90.jpg_.webp",
        date: "9月12日",
        views: 875,
        description: "进阶茶艺技法，掌握不同茶类的冲泡要领，了解茶具的选择与搭配，提升泡茶技艺。"
      },
      {
        id: 8,
        title: "高级实践",
        imageUrl: "https://img.alicdn.com/img/i3/40543961/O1CN01qKRkCb1f8BhSlEOu9_!!0-saturn_solar.jpg_460x460q90.jpg_.webp",
        date: "9月21日",
        views: 764,
        description: "深入学习茶道礼仪，掌握茶席布置技巧，领悟茶道精神，实现茶艺的更高境界。"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 搜索课程
    onSearch(e) {
      const searchValue = e.detail.value;
      // 这里可以添加搜索逻辑
      console.log('搜索:', searchValue);
    },

    // 点击课程卡片
    onCourseTap(e) {
      const courseId = e.currentTarget.dataset.id;
      // 这里可以添加课程点击处理逻辑
      wx.navigateTo({
        url: `/pages/courseDetail/courseDetail?id=${courseId}`
      });
    }
  }
});