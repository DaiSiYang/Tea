// components/member/FalseMain/index.js
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
    commodityList : []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(){
      wx.showToast({
        title: '商品无库存',
        icon:'error'
      })
    },
    getCommodityList(){
        wx.showLoading({
          title: '加载中',
          mask: true // 是否显示透明蒙层，防止触摸穿透
        });
        setTimeout(()=>{
          wx.request({
            url: 'http://127.0.0.1:8080/api/member/falseMain',
            method:"GET",
            header:{
              'content-type':'application/json'
            },
            success:(res)=>{
              this.setData({
                getCommodityList: res.data
              })
            },
            complete:function(){
              wx.hideLoading();
            }
          })
        },1000)
    }
  },
  attached(){
    this.getCommodityList()
  },
  
})