Page({
  data: {
    orderInfo: {
      orderId: 'ORDER20240321001',
      totalAmount: 299.99,
      totalPrice:0,
      items: [
       
      ]
    },
    address: {
      name: '张三',
      phone: '13800138000',
      detail: '北京市朝阳区xxx街道xxx小区'
    }
  },
  gettotalPrice(){
    const app = getApp();
    const totalPrices = app.globalData.totalPrices
    this.setData({
      totalPrice:totalPrices
    })
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
  onLoad: function(options) {
    this.getOrderDetail();
    this.getItem()
  },

  getOrderDetail() {
    wx.showLoading({ title: '加载中' });
    // 模拟接口调用
    setTimeout(() => {
      wx.hideLoading();
    }, 500);
  },

  goToPayment() {
    const orderData = {
      orderNo: 'ORDER2024032001',
      amount: '299.99',
      // 其他需要传递的数据...
    };

    wx.navigateTo({
      url: `/memberPages/pages/Payment/Payment?orderNo=${orderData.orderNo}&amount=${orderData.amount}`,
      fail(err) {
        console.error('跳转失败：', err);
        wx.showToast({
          title: '跳转失败',
          icon: 'none'
        });
      }
    });
  }
}); 