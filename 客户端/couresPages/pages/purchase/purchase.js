// couresPages/pages/purchase/purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    courseInfo: {
      image: '', // 课程图片URL
      duration: '30课时',
      studentCount: 1000,
      originalPrice: 299.99,
      discount: 298.99,
      finalPrice: 1
    },
    orderNo: '',
    createTime: '',
    title: '',
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
   title:options.text,
   id:options.id
    })
    console.log(this.data.title,this.data.id);
    // 接收上一页传来的课程ID
    if (options.courseId) {
      this.getCourseDetail(options.courseId);
    }
    // 生成订单编号
    this.generateOrderNo();
    this.getCourseDetail()
  },

  // 获取课程详情
  getCourseDetail(courseId) {
    wx.showLoading({
      title: '加载中...'
    });
    wx.request({
      url: `http://localhost:8080/api/mysql/purchase/${this.data.id}`,
      method: 'GET',
      success: (res) => {
        console.log(1);
        console.log(res.data);
        
          this.setData({
            'courseInfo.image': res.data.image ,
            'courseInfo.duration': res.data.duration ,
            'courseInfo.studentCount': res.data.studentCount ,
            list:res.data
          },()=>{
            const {image} = this.data.list
            console.log(image);
            console.log(res.data.image);
            console.log(this.data.courseInfo.image);
          console.log(this.data.courseInfo.image);
          console.log(res.data);
          console.log(res.data[1]);
          });
         
      },
      fail: (err) => {
        console.error('获取课程信息失败：', err);
        wx.showToast({
          title: '获取课程信息失败',
          icon: 'none'
        });
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  },

  // 生成订单编号
  generateOrderNo() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const orderNo = `ORDER${year}${month}${day}${random}`;
    
    this.setData({
      orderNo,
      createTime: this.formatDate(now)
    });
  },

  // 格式化日期
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },

  // 处理购买按钮点击
  handlePurchase() {
    const { finalPrice } = this.data.courseInfo;
    const { orderNo } = this.data;

    wx.showLoading({
      title: '正在创建订单...',
      mask: true
    });

    // 这里替换为实际的创建订单API调用
    setTimeout(() => {
      wx.hideLoading();
      
      // 跳转到支付页面
      wx.navigateTo({
        url: `/memberPages/pages/Payment/Payment?orderNo=${orderNo}&amount=${finalPrice}`,
        fail: (err) => {
          console.error('跳转支付页面失败：', err);
          wx.showToast({
            title: '跳转失败',
            icon: 'none'
          });
        }
      });
    }, 1000);
  },

  // 页面分享
  onShareAppMessage() {
    const { title } = this.data.courseInfo;
    return {
      title: `推荐课程：${title}`,
      path: '/couresPages/pages/purchase/purchase'
    };
  },

  // 添加到购物车
  addToCart() {
    wx.showLoading({
      title: '添加中...',
      mask: true
    });

    const courseData = {
      text: this.data.title,
      price: this.data.courseInfo.finalPrice,
      url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cojJi9_oiRjSAS1mRfQv-wHaE7?w=266&h=180&c=7&r=0&o=5&pid=1.7'
    };

    wx.request({
      url: 'http://localhost:8080/api/cart/add',
      method: 'POST',
      data: courseData,
      success: (res) => {
        wx.showToast({
          title: '已加入购物车',
          icon: 'success'
        });
      },
      fail: (err) => {
        console.error('添加购物车失败：', err);
        wx.showToast({
          title: '添加失败',
          icon: 'none'
        });
      },
      complete: () => {
        wx.hideLoading();
        wx.navigateTo({
          url: '/memberPages/pages/cart/cart',
        })
      }
    });
  }
})