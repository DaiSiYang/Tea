Page({
  data: {
    amount: '0',
    orderNo: '',
    createTime: '',
    countdown: '13:19',
    countdownTimer: null,
    totalPrice:0,
    items: [
     
    ]
  },
  countListPrice(){
    let itemtotalPrice = this.data.items.reduce((sum,item)=>{
      return sum + item.price
    },0)
    this.setData({
      totalPrice:itemtotalPrice
    })
  },
  getItem(){
    wx.request({
      url: 'http://localhost:8080/api/mysql/cart',
      method:"GET",
      success:(res)=>{
        console.log(res.data);
        this.setData({
          items: res.data
        })
        console.log(this.data.items);
        this.countListPrice()
      },
      fail:(err)=>{}
    })
  },
  onLoad(options) {
    this.getItem()
    // 接收订单数据
    if (options.orderNo && options.amount) {
      this.setData({
        orderNo: options.orderNo,
        amount: options.amount,
        createTime: this.formatDate(new Date())
      });
    }
    this.startCountdown();
  },

  onUnload() {
    if (this.data.countdownTimer) {
      clearInterval(this.data.countdownTimer);
    }
  },

  startCountdown() {
    let minutes = 13;
    let seconds = 19;

    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          wx.showToast({
            title: '支付超时，请重新下单',
            icon: 'none',
            duration: 2000,
            success: () => {
              setTimeout(() => {
                wx.navigateBack();
              }, 2000);
            }
          });
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      this.setData({
        countdown: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      });
    }, 1000);

    this.setData({
      countdownTimer: timer
    });
  },
clearCart(){
  wx.request({
    url: 'http://localhost:8080/api/mysql/del/all',
    method:'DELETE',
    success:(res)=>{
      wx.showToast({
        title: '已清空购物车',
        icon:'success'
      })
    }
  })
},
  handlePayment() {
    wx.showLoading({
      title: '正在支付...',
      mask: true
    });

    // 模拟支付过程
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '支付成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          setTimeout(() => {
            wx.navigateBack();
            
          }, 2000);
        }
      });
    ````````````````````````````````````````````````````````````````````````````````````````````
    }, 1500);
  },

  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}); 