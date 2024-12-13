// couresPages/pages/purchase/purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'',
    price:'',
    url:"https://img2.baidu.com/it/u=2407755203,832656601&fm=253&fmt=auto?w=1066&h=800",
    content:""
  },
  onClickIcon(){
    wx.navigateTo({
      url: '/userPages/pages/Customer/index',
    })
  },
  onCart(){
    wx.navigateTo({
      url: '/memberPages/pages/cart/cart',
    })
  },
  onNar(){
    wx.navigateTo({
      url: '/memberPages/pages/cart/cart',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    this.setData({
      text:options.text,
      price:options.price,
      url:options.url,
      content:options.content
    })
    wx.setNavigationBarTitle({
      title: this.data.text,
    })
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