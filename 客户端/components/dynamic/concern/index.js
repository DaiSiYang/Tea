// components/dynamic/concern/index.js
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
    loading: true,
    HotList:[
      {
        // 头像
        avatarUrl:"https://img0.baidu.com/it/u=3881686049,1188555697&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        // 昵称
        name:"冥幽",
        //介绍
        actor:"路人",
        //内容
        text:"凡事太认真，苦了心，累了自己。过去的，别再遗憾...",
        //图片
        image1:"https://img2.baidu.com/it/u=755866245,3605723965&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        image2:"https://img2.baidu.com/it/u=1106789,1326811238&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        // 转发
        forward:400,
        //点赞
        Thumbs:85,
        id:9
      },
      {
        // 头像
        avatarUrl:"https://img2.baidu.com/it/u=3419433046,873673719&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=450",
        // 昵称
        name:"沐子",
        //介绍
        actor:"路人",
        //内容
        text:"想进茶友群的关注我",
        //图片
        image1:"https://img0.baidu.com/it/u=3403058578,1903085353&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=774",
        image2:"https://img1.baidu.com/it/u=977717653,1274671968&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
        // 转发
        forward:400,
        //点赞
        Thumbs:85,
        id:10
      },
      {
        // 头像
        avatarUrl:"https://img1.baidu.com/it/u=3186817418,799221380&fm=253&fmt=auto&app=138&f=JPEG?w=427&h=427",
        // 昵称
        name:"久而安之",
        //介绍
        actor:"路人",
        //内容
        text:"谁知道贡眉和寿眉的区别？杵荼茶业买的都好便宜？质量靠谱吗？",
        //图片
        image1:"https://img1.baidu.com/it/u=3230542969,147208211&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=590",
        image2:"https://img2.baidu.com/it/u=855339470,1564350715&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        // 转发
        forward:400,
        //点赞
        Thumbs:85,
        id:11
      },
      {
        // 头像
        avatarUrl:"https://img1.baidu.com/it/u=3186817418,799221380&fm=253&fmt=auto&app=138&f=JPEG?w=427&h=427",
        // 昵称
        name:"罂粟花伤",
        //介绍
        actor:"路人",
        //内容
        text:"雅安名山蒙顶山茶文化旅游节有什么好吃的？",
        //图片
        image1:"https://img0.baidu.com/it/u=2472692441,2419638180&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        image2:"https://img1.baidu.com/it/u=2560819536,1629369098&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        // 转发
        forward:200,
        //点赞
        Thumbs:35,
        id:12
      },
      {
        // 头像
        avatarUrl:"https://img0.baidu.com/it/u=2302400309,3335535334&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        // 昵称
        name:"萝莉通缉犯",
        //介绍
        actor:"路人",
        //内容
        text:"青山碧水，微风拂面。历史在青山下，也在碧水中。。。",
        //图片
        image1:"https://img0.baidu.com/it/u=93538477,1379814373&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        image2:"http://t13.baidu.com/it/u=1537880977,2321767297&fm=224&app=112&f=JPEG?w=500&h=500&s=25567E87414286E63AD1FC0C0300B081",
        // 转发
        forward:300,
        //点赞
        Thumbs:45,
        id:13
      },
      {
        // 头像
        avatarUrl:"https://img1.baidu.com/it/u=3719305757,1772801521&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
        // 昵称
        name:"和尚洗头用飘柔",
        //介绍
        actor:"路人",
        //内容
        text:"人生看不惯的东西太多，看清、看懂，全是自找伤心。",
        //图片
        image1:"https://img2.baidu.com/it/u=4105681700,2053728060&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
        image2:"https://img0.baidu.com/it/u=45114679,796232214&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        // 转发
        forward:400,
        //点赞
        Thumbs:85,
        id:14
      },
      {
        // 头像
        avatarUrl:"https://img2.baidu.com/it/u=3381283045,2671640901&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        // 昵称
        name:"薄凉之人",
        //介绍
        actor:"路人",
        //内容
        text:"谁知道贡眉和寿眉的区别？杵荼茶业买的都好便宜？质量靠谱吗？",
        //图片
        image1:"https://img0.baidu.com/it/u=122053997,2713445636&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
        image2:"https://img0.baidu.com/it/u=2054360055,3913790755&fm=253&fmt=auto&app=138&f=JPEG?w=778&h=500",
        // 转发
        forward:400,
        //点赞
        Thumbs:85,
        id:15
      },
      {
        // 头像
        avatarUrl:"https://img0.baidu.com/it/u=2056084278,2654493898&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        // 昵称
        name:"初夏",
        //介绍
        actor:"路人",
        //内容
        text:"缘聚了，缘散了，随顺就好。",
        //图片
        image1:"https://img0.baidu.com/it/u=2353740174,3847273431&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        image2:"https://img2.baidu.com/it/u=302123655,2146015235&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        // 转发
        forward:2300,
        //点赞
        Thumbs:135,
        id:16
      },
      {
        // 头像
        avatarUrl:"https://img1.baidu.com/it/u=2928381678,839789461&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        // 昵称
        name:"微凉",
        //介绍
        actor:"路人",
        //内容
        text:"冬天喝茶以红茶为好。红茶甘温，可养人体阳气；",
        //图片
        image1:"http://t15.baidu.com/it/u=2700874290,1757186689&fm=224&app=112&f=JPEG?w=500&h=500",
        image2:"http://t13.baidu.com/it/u=2181929879,2309572&fm=224&app=112&f=JPEG?w=500&h=500",
        // 转发
        forward:400,
        //点赞
        Thumbs:85,
        id:17
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onReachBottom:function(e) {
  console.log(1);
  if (this.data.HotList) return
  wx.showLoading({
    title: '没有更多了...',
    icon:"none"
  })

}
  },
  onReady() {
    this.setData({
      loading: false,
    });
  },
  onReachBottom:function(e) {
    console.log(1);
    if (this.data.HotList) return
    wx.showLoading({
      title: '没有更多了...',
      icon:"none"
    })
  
  }
})