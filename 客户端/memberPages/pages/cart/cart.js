Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:1,
    list:[

    ]
  },
  getList(){
    wx.request({
      url: 'http://127.0.0.1:8080/api/mysql/cart',
      method:'GET',
      success:(res)=>{
        this.setData({
          list:res.data
        })
        console.log(this.data.list);
      }
    })
  },
  add(){
    this.setData({
      count:this.data.count += 1
    })
  },
  sub(id){
    console.log(id);
    const itemId = id.currentTarget.dataset.id
    console.log(itemId);
    if (this.data.count <= 1) {
     wx.showModal({
       title:'确定删除该商品吗',
       content: '您确定要执行此操作吗？',
       success:(res)=>{
        if (res.confirm) {
          wx.request({
            url: `http://127.0.0.1:8080/api/mysql/cart/${itemId}`,
            method:'DELETE',
            success:(res)=>{
              wx.showToast({
                title: '删除成功',
              })
              console.log(res);
            },
            fail:(err)=>{
              wx.showToast({
                title: '删除失败',
              })
            }
          })
       } else if (res.cancel) {
          console.log('用户取消了操作');
          }
       }
     })
      return
    }
    this.setData({
      count:this.data.count-=1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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