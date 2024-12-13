// components/user/recommend/index.js
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
    recommendItemList:[
      {image:"/static/userIcon/课程.png",text:"我的课程"},
      {image:"/static/userIcon/收藏.png",text:"我的收藏"},
      {image:"/static/userIcon/我的成就.png",text:"文化殿堂"},
      {image:"/static/userIcon/订单.png",text:"我的订单"},
      {image:"/static/userIcon/足迹.png",text:"足迹"},
      {image:"/static/userIcon/会员购.png",text:"会员购"},
      {image:"/static/userIcon/已发布.png",text:"已发布"},
      {image:"/static/userIcon/关于.png",text:"关于香茗"},
      {image:"/static/userIcon/设置.png",text:"设置"},
      {image:"/static/userIcon/客服.png",text:"客服"},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    Jump(e){
     const index = e.currentTarget.dataset.index
     if(index === 9){
       wx.navigateTo({
         url: '/userPages/pages/Setup/Setup',
       })
     }
     if(index === 1){
      wx.switchTab({
        url: '/pages/course/course',
      })
    }
    if(index === 4){
      wx.navigateTo({
        url: '/memberPages/pages/cart/cart',
      })
    }
    if(index === 3){
      wx.navigateTo({
        url: '/userPages/pages/Achievement/index/index',
      })
    }
    if(index === 6){
      wx.switchTab({
        url: '/pages/member/member',
      })
    }
    if(index === 10){
    wx.navigateTo({
      url: '/userPages/pages/Customer/index',
    })
    }
  }
}

})  