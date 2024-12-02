Page({
  data: {
    activeName: '0',
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  handoff(e){
    e=e.target.dataset.handoff
    wx.showToast({
      title: e,
      icon:"none",
      duration:2000
    })
  },
  exit(e){
   e = e.target.dataset.exit
   wx.showToast({
    title: e,
    icon:"none",
    duration:2000
  })
  }
});