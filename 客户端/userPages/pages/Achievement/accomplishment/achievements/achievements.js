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
        icon: 'https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhfGVufDB8fDB8fHww',
        progress: 100,
        unlocked: true
      },
      {
        id: 2,
        title: '茶艺师学徒',
        description: '学习5种不同的茶叶品类',
        icon: 'https://media.istockphoto.com/id/1147997745/photo/hands-of-asian-senior-woman-preparing-green-teas.webp?a=1&b=1&s=612x612&w=0&k=20&c=oBYIiIdS53hmTBpirRJ3tdGPzyB51ExnC_j4UbGos44=',
        progress: 60,
        unlocked: false
      },
      {
        id: 3,
        title: '品茶达人',
        description: '完成10次品茶评测',
        icon: 'https://images.unsplash.com/photo-1492778297155-7be4c83960c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYXxlbnwwfHwwfHx8MA%3D%3D',
        progress: 30,
        unlocked: false
      },
      {
        id: 4,
        title: '茶具收藏家',
        description: '收集完整套茶具',
        icon: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYXxlbnwwfHwwfHx8MA%3D%3D',
        progress: 0,
        unlocked: false
      },
      {
        id: 5,
        title: '茶道大师',
        description: '掌握所有茶道礼仪',
        icon: 'https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhfGVufDB8fDB8fHww',
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