// pages/accomplishment/achievements/achievements.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    achievements: [
      {
        id: 1,
        title: '初识茶道',
        description: '完成第一次泡茶体验',
        icon: 'https://pic.imgdb.cn/item/65e6e2b99f345e8d03e1c4b4.jpg',
        progress: 100,
        unlocked: true
      },
      {
        id: 2,
        title: '茶艺师学徒',
        description: '学习5种不同的茶叶品类',
        icon: 'https://pic.imgdb.cn/item/65e6e2b99f345e8d03e1c4b8.jpg',
        progress: 60,
        unlocked: false
      },
      {
        id: 3,
        title: '品茶达人',
        description: '完成10次品茶评测',
        icon: 'https://pic.imgdb.cn/item/65e6e2b99f345e8d03e1c4bc.jpg',
        progress: 30,
        unlocked: false
      },
      {
        id: 4,
        title: '茶具收藏家',
        description: '收集完整套茶具',
        icon: 'https://pic.imgdb.cn/item/65e6e2b99f345e8d03e1c4c0.jpg',
        progress: 0,
        unlocked: false
      },
      {
        id: 5,
        title: '茶道大师',
        description: '掌握所有茶道礼仪',
        icon: 'https://pic.imgdb.cn/item/65e6e2b99f345e8d03e1c4c4.jpg',
        progress: 0,
        unlocked: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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