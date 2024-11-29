// homePages/pages/Tags/redTea/index.js
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
      TeaList:[

      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTeaList(){
      wx.showLoading({
        title: '加载中',
        mask: true // 是否显示透明蒙层，防止触摸穿透
      });
      setTimeout(()=>{
        wx.request({
          url: 'http://127.0.0.1:8080/api/home/whiteTea',
          method:"GET",
          success:(res)=>{
            this.setData({
              TeaList:res.data
            })
            console.log(this.TeaList);
          },
          complete:function(){
            wx.hideLoading()
          }
        })
      },1500)
  
    }
  },
  attached(){
    this.getTeaList()
  }
})