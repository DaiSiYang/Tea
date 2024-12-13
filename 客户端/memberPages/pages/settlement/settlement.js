Page({
  data: {
    orderInfo: {
      orderId: 'ORDER20240321001',
      totalAmount: 299.99,
      items: [
        {
          id: 1,
          name: '商品名称1',
          price: 199.99,
          quantity: 1,
          image: '/images/product1.png'
        },
        {
          id: 2,
          name: '商品名称2',
          price: 100.00,
          quantity: 1,
          image: '/images/product2.png'
        }
      ]
    },
    address: {
      name: '张三',
      phone: '13800138000',
      detail: '北京市朝阳区xxx街道xxx小区'
    }
  },

  onLoad: function(options) {
    this.getOrderDetail();
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