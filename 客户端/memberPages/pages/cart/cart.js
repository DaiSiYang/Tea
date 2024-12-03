Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[

    ],
    totalPrice:0
  },
  countListPrice(){
    let itemtotalPrice = this.data.list.reduce((sum,item)=>{
      return sum + (item.price*item.count)
    },0)
    this.setData({
      totalPrice:itemtotalPrice
    })
  },
  getList(){
    wx.request({
      url: 'http://127.0.0.1:8080/api/mysql/cart',
      method:'GET',
      success:(res)=>{
        this.setData({
          list:res.data.map(item=>({...item,count:1}))
        })
        this.countListPrice()
      }
    })
  },
  add(id){
    const itemId = id.currentTarget.dataset.id
    const item = this.data.list.find(item=>item.id == itemId)
    if(item){
      item.count += 1
      this.setData({
        list:[...this.data.list]
      })
    }
    this.countListPrice()
  },
  sub(id){
    const itemId = id.currentTarget.dataset.id
    const item = this.data.list.find(item=>item.id == itemId)
    console.log(item);
    if (item.count <= 1) {
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

              this.getList()
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
    if(item){
      item.count -= 1
      this.setData({
        list:[...this.data.list]
      })
    }
    this.countListPrice()
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