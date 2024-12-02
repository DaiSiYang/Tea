// app.js
App({
  globalData: {
    userInfo: null
  },
  options: {
    styleIsolation: 'shared',
  },
  onPullDownRefresh: function() {
    this.onRefresh();
  },
  onRefresh: function() {
    // 显示导航条加载动画
    wx.showNavigationBarLoading();
    
    // 模拟刷新操作，例如从服务器获取数据
    setTimeout(function() {
      // 隐藏导航条加载动画
      wx.hideNavigationBarLoading();
      
      // 停止下拉刷新
      wx.stopPullDownRefresh();
    }, 2000); // 假设刷新操作需要2秒完成
  }
})
