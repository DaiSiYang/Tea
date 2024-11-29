// memberPages/pages/detail/indexs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    list:[],
    url:'',
    price:'',
    title:''
  },
  addList(){
    wx.request({
      url: 'http://127.0.0.1:8080/api/cart/add',
      method:'POST',
      data:{
        url:this.data.url,
        title:this.data.text,
        price:this.data.price,
      },
      success:(res)=>{
        wx.showToast({
          title: '加入成功',
          icon:'success'
        })
      },
      fail:(err)=>{
        wx.showToast({
          title: '添加失败',
          icon:'success'
        })
      }
    })
  },
  clickCustomer(){
    wx.navigateTo({
      url: '/userPages/pages/Customer/index',
    })
  },
  clickcart(){
    wx.navigateTo({
      url: '/memberPages/pages/cart/cart',
    })
  },
  clickshop(){
    wx.showToast({
      title: '暂无店铺',
      icon:'none'
    })
  },
getList(){
  wx.request({
    url: `http://127.0.0.1:8080/api/mysql/RECOMMAND/${this.data.id}`,
    method:'GET',
    success:(res)=>{
      this.setData({
        list:res.data
      })
      console.log(this.data.list);
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id:options.id,
      url:options.url,
      text:options.text,
      price:options.price
    })
    this.getList()
    console.log(options.url,options.text,options.price);
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})