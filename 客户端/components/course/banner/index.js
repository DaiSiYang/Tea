// components/course/banner/index.js
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
      bannerList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      getBannerList(){
        wx.request({
          url: 'http://127.0.0.1:8080/api/course/banner',
          method:"GET",
          success: (result) => {
            this.setData({
              bannerList : result.data
            })
          }
        })
      }
  },
  attached(){
    this.getBannerList()
  }
})