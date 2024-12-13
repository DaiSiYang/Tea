
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
    zan:"/static/HotIcon/赞.png",
    zanTrue:'/static/HotIcon/点赞.png',
    HotList:[
    //   {
    //     // 头像
    //     avatarUrl:"/static/cs/tgXH.jpg",
    //     // 昵称
    //     name:"徐网友",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"茶农直供云南临沧2022年、2023年纯料普洱春茶，优质的茶品，口粮的价格，存量有限。喜欢普洱生茶的朋友，欢迎订购。",
    //     //图片
    //     image1:"http://t14.baidu.com/it/u=24302809,193799096&fm=224&app=112&f=JPEG?w=500&h=500",
    //     image2:"https://img2.baidu.com/it/u=560609558,2813077403&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:100,
    //     //点赞
    //     Thumbs:30,
    //     id:1
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"/static/cs/csXL.jpg",
    //     // 昵称
    //     name:"项CS",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"这家的铁观音茶叶喝的不错，正宗铁观音发源地。",
    //     //图片
    //     image1:"https://img2.baidu.com/it/u=755866245,3605723965&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     image2:"https://img2.baidu.com/it/u=4143071162,256766658&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:200,
    //     //点赞
    //     Thumbs:20,
    //     id:2
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"/static/CS/jw.jpg",
    //     // 昵称
    //     name:"牛网友",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"在抖音上无意间看到了陕西泾阳的茯茶，大家有了解的可以介绍一下哦",
    //     //图片
    //     image1:"https://img2.baidu.com/it/u=1045270403,1688383418&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=460",
    //     image2:"https://img2.baidu.com/it/u=4143071162,256766658&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:230,
    //     //点赞
    //     Thumbs:50,
    //     id:3
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"/static/CS/hg.jpg",
    //     // 昵称
    //     name:"洪网友",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"寒冷的冬季来袭，很多人更愿意待在家中，享受家中的温暖和舒适。",
    //     //图片
    //     image1:"https://img2.baidu.com/it/u=644456943,3234349804&fm=253&fmt=auto&app=138&f=JPEG?w=893&h=500",
    //     image2:"https://img2.baidu.com/it/u=1611895462,2639438978&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:20,
    //     //点赞
    //     Thumbs:3,
    //     id:4
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img1.baidu.com/it/u=1333417867,4012964063&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     // 昵称
    //     name:"给个笑的机会",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"冬天喝茶以红茶为好。红茶甘温，可养人体阳气；",
    //     //图片
    //     image1:"https://img1.baidu.com/it/u=780118195,3052865808&fm=253&fmt=auto&app=138&f=JPEG?w=521&h=346",
    //     image2:"https://img1.baidu.com/it/u=469489704,908069976&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    //     // 转发
    //     forward:40,
    //     //点赞
    //     Thumbs:5,
    //     id:5
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img2.baidu.com/it/u=3282056579,3097188397&fm=253&fmt=auto&app=120&f=JPEG?w=508&h=500",
    //     // 昵称
    //     name:"眸中尽是你",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"人的一生，苦也罢，乐也罢；得也罢，失也罢。要紧的是心间的一泓清泉里不能没有月辉。",
    //     //图片
    //     image1:"https://img1.baidu.com/it/u=2537926045,848108043&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
    //     image2:"https://img0.baidu.com/it/u=4237613220,406868161&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    //     // 转发
    //     forward:400,
    //     //点赞
    //     Thumbs:85,
    //     id:6
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img0.baidu.com/it/u=1690076377,4003691410&fm=253&fmt=auto&app=120&f=JPEG?w=507&h=500",
    //     // 昵称
    //     name:"忽如远行客",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"该来的总会来，该走的留不住，一切顺其自然就好。",
    //     //图片
    //     image1:"http://t15.baidu.com/it/u=839786432,3733437126&fm=224&app=112&f=JPEG?w=499&h=333",
    //     image2:"https://img2.baidu.com/it/u=914788198,869758390&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:210,
    //     //点赞
    //     Thumbs:35,
    //     id:7
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img2.baidu.com/it/u=2601935451,895459905&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     // 昵称
    //     name:"激萌美少女",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"得到了，失去了，知足就好。",
    //     //图片
    //     image1:"http://t15.baidu.com/it/u=3325431313,2507180741&fm=224&app=112&f=JPEG?w=500&h=500&s=6F381BC2A0033AE63D18941B0300E0D0",
    //     image2:"https://img0.baidu.com/it/u=3372304922,1431929374&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
    //     // 转发
    //     forward:102,
    //     //点赞
    //     Thumbs:12,
    //     id:8
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img0.baidu.com/it/u=3881686049,1188555697&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 昵称
    //     name:"冥幽",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"凡事太认真，苦了心，累了自己。过去的，别再遗憾...",
    //     //图片
    //     image1:"https://img2.baidu.com/it/u=755866245,3605723965&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     image2:"https://img2.baidu.com/it/u=1106789,1326811238&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:400,
    //     //点赞
    //     Thumbs:85,
    //     id:9
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img2.baidu.com/it/u=3419433046,873673719&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=450",
    //     // 昵称
    //     name:"沐子",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"想进茶友群的关注我",
    //     //图片
    //     image1:"https://img0.baidu.com/it/u=3403058578,1903085353&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=774",
    //     image2:"https://img1.baidu.com/it/u=977717653,1274671968&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
    //     // 转发
    //     forward:400,
    //     //点赞
    //     Thumbs:85,
    //     id:10
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img1.baidu.com/it/u=3186817418,799221380&fm=253&fmt=auto&app=138&f=JPEG?w=427&h=427",
    //     // 昵称
    //     name:"久而安之",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"谁知道贡眉和寿眉的区别？杵荼茶业买的都好便宜？质量靠谱吗？",
    //     //图片
    //     image1:"https://img1.baidu.com/it/u=3230542969,147208211&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=590",
    //     image2:"https://img2.baidu.com/it/u=855339470,1564350715&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:400,
    //     //点赞
    //     Thumbs:85,
    //     id:11
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img1.baidu.com/it/u=3186817418,799221380&fm=253&fmt=auto&app=138&f=JPEG?w=427&h=427",
    //     // 昵称
    //     name:"罂粟花伤",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"雅安名山蒙顶山茶文化旅游节有什么好吃的？",
    //     //图片
    //     image1:"https://img0.baidu.com/it/u=2472692441,2419638180&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     image2:"https://img1.baidu.com/it/u=2560819536,1629369098&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:200,
    //     //点赞
    //     Thumbs:35,
    //     id:12
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img0.baidu.com/it/u=2302400309,3335535334&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     // 昵称
    //     name:"萝莉通缉犯",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"青山碧水，微风拂面。历史在青山下，也在碧水中。。。",
    //     //图片
    //     image1:"https://img0.baidu.com/it/u=93538477,1379814373&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
    //     image2:"http://t13.baidu.com/it/u=1537880977,2321767297&fm=224&app=112&f=JPEG?w=500&h=500&s=25567E87414286E63AD1FC0C0300B081",
    //     // 转发
    //     forward:300,
    //     //点赞
    //     Thumbs:45,
    //     id:13
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img1.baidu.com/it/u=3719305757,1772801521&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    //     // 昵称
    //     name:"和尚洗头用飘柔",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"人生看不惯的东西太多，看清、看懂，全是自找伤心。",
    //     //图片
    //     image1:"https://img2.baidu.com/it/u=4105681700,2053728060&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
    //     image2:"https://img0.baidu.com/it/u=45114679,796232214&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
    //     // 转发
    //     forward:400,
    //     //点赞
    //     Thumbs:85,
    //     id:14
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img2.baidu.com/it/u=3381283045,2671640901&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     // 昵称
    //     name:"薄凉之人",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"谁知道贡眉和寿眉的区别？杵荼茶业买的都好便宜？质量靠谱吗？",
    //     //图片
    //     image1:"https://img0.baidu.com/it/u=122053997,2713445636&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
    //     image2:"https://img0.baidu.com/it/u=2054360055,3913790755&fm=253&fmt=auto&app=138&f=JPEG?w=778&h=500",
    //     // 转发
    //     forward:400,
    //     //点赞
    //     Thumbs:85,
    //     id:15
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img0.baidu.com/it/u=2056084278,2654493898&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     // 昵称
    //     name:"初夏",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"缘聚了，缘散了，随顺就好。",
    //     //图片
    //     image1:"https://img0.baidu.com/it/u=2353740174,3847273431&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     image2:"https://img2.baidu.com/it/u=302123655,2146015235&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:2300,
    //     //点赞
    //     Thumbs:135,
    //     id:16
    //   },
    //   {
    //     // 头像
    //     avatarUrl:"https://img1.baidu.com/it/u=2928381678,839789461&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    //     // 昵称
    //     name:"微凉",
    //     //介绍
    //     actor:"路人",
    //     //内容
    //     text:"冬天喝茶以红茶为好。红茶甘温，可养人体阳气；",
    //     //图片
    //     image1:"http://t15.baidu.com/it/u=2700874290,1757186689&fm=224&app=112&f=JPEG?w=500&h=500",
    //     image2:"http://t13.baidu.com/it/u=2181929879,2309572&fm=224&app=112&f=JPEG?w=500&h=500",
    //     // 转发
    //     forward:400,
    //     //点赞
    //     Thumbs:85,
    //     id:17
    //   },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    Like(id){
      console.log(id.currentTarget.dataset.id);
      const Itemid = id.currentTarget.dataset.id
      const item = this.data.HotList.find(item=>item.id == Itemid)
      console.log(item);
      item.num++
      if(item.num % 2 == 0){
        if(item){
          if(item){
            item.flag = true
            item.Thumbs+=1
            this.setData({
              HotList:[...this.data.HotList]
            })
          }
        }
      }else{

        item.flag = false
        item.Thumbs-=1
        this.setData({
          HotList:[...this.data.HotList]
        })
      }

    },
    changeComments(id){
      const ItemId = id.currentTarget.dataset.id
      const item = this.data.HotList.find(item => item.id == ItemId)
      const name = item.name
      wx.navigateTo({
        url: `/dynamicPages/pages/comments/comments?id=${ItemId}&name=${name}`,
      })
    },
// 处理按钮点击事件  
triggerShare: function() {  
  // 这里可以弹出对话框提示用户去点击右上角的分享按钮  
  // 或者，如果你有特殊需求，可以尝试使用wx.navigateToMiniProgram等API（但这通常不是分享）  
  wx.showToast({  
    title: '点击右上角分享给朋友',  
    icon: 'none'  
  });  

  // 实际上，你可能需要在这里设置一些页面数据，供onShareAppMessage使用  
  this.setData({  
    shareTitle: '新的分享标题',  
    // 注意：通常不需要动态改变path，除非有特殊需求  
    // sharePath: '/path/to/new/page'  
  });  
},
change(){
  wx.showToast({  
    title: '关注成功',  
    icon: 'none',  
    duration: 2000  
  })
},
getHotList(){
  wx.request({
    url: 'http://127.0.0.1:8080/api/mysql/hot',
    method:"GET",
    success:(res)=>{
      this.setData({
        HotList:res.data.map(item=>({...item,flag:false,num:1}))
      })
      console.log(this.data.HotList);
    }
  })
}
},
onReachBottom:function(e) {
  this.getHotList()
},
attached(){
  this.getHotList()
},
onReachBottom: function() {  
  console.log('触发了上拉触底的事件');  
  // 在这里执行加载更多数据的逻辑  
  wx.showLoading({  
    title: '加载中...',  
  });  
  wx.request({
    url: 'http://127.0.0.1:8080/api/mysql/hot',
    method:"GET",
    success:(res)=>{
      console.log(res.data);
      this.setData({
        HotList:[...this.data.HotList,res.data]
      })
      console.log(this.data.HotList);
    }
  })
}  

})
