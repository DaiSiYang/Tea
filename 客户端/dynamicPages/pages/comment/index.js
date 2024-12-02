// dynamicPages/pages/comment/index.js
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
    list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getList(){
      wx.showLoading({
        title: '加载中...',
      })
      setTimeout(()=>{
        wx.request({
          url: 'http://127.0.0.1:8080/api/mysql/comment',
          method:"GET",
          success:(res)=>{
            console.log(res);
            this.setData({
              list:res.data
            })
            console.log(this.data.list);
          }
        })
        wx.hideLoading()
      },1000)

    
    }
  },
  attached(){
    this.getList()
  }
})