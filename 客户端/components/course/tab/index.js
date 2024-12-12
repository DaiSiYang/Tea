// components/course/tab/index.js
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
    itemList:[
      {iconfont:"icon-zuixinkecheng",text:"新课推荐"},
      {iconfont:"icon-rewardstrophy",text:"冠军课程"},
      {iconfont:"icon-icon6",text:"免费好课"},
      {iconfont:"icon-weikecheng",text:"微课程"},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(id){
      const index = id.currentTarget.dataset.index
 
      if(index === 0){
        wx.navigateTo({
          url: '/couresPages/pages/Newlessons/Newlessons',
        })
      }else if(index === 1){
        wx.navigateTo({
          url: '/couresPages/pages/champion/champion',
        })
      }else if(index === 2){
        wx.navigateTo({
          url: '/couresPages/pages/free/free',
        })
      }else if(index === 3){
        wx.navigateTo({
          url: '/couresPages/pages/More/more',
        })
      }
      }
    }
  
})