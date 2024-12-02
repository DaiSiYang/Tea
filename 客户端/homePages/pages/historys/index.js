// homePages/pages/historys/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    id:''
  },
setTitle(){
  if (this.data.id == 1) {
    wx.setNavigationBarTitle({
      title: '唐代茶文化',
    })
  }else if (this.data.id == 2) {
    wx.setNavigationBarTitle({
      title: '宋代茶文化',
    })
  }else if (this.data.id == 3) {
    wx.setNavigationBarTitle({
      title: '元代茶文化',
    })
  }else if (this.data.id == 4) {
    wx.setNavigationBarTitle({
      title: '明代茶文化',
    })
  }else{
    wx.setNavigationBarTitle({
      title: '清代茶文化',
    })
  }
},
getList(){
  wx.request({
    url: `http://127.0.0.1:8080/api/mysql/historys/${this.data.id}`,
    method:'GET',
    success:(res)=>{
      this.setData({
        list:res.data
      })
      console.log(res.data);
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id:options.id
    })
    this.setTitle()
    this.getList()
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