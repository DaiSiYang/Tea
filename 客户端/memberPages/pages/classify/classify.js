Page({
  data: {
    currentCategory: 'teapot',
    categories: [
      { id: 'teapot', name: '茶壶', tag: '热销' },
      { id: 'teatray', name: '茶盘', tag: '新品' },
      { id: 'teaware', name: '茶具', tag: '精选' },
      { id: 'blacktea', name: '红茶系列', tag: '特惠' },
      { id: 'greentea', name: '绿茶系列', tag: '限量' },
      { id: 'puer', name: '普洱茶系列', tag: '珍藏' },
      { id: 'oolong', name: '乌龙茶系列', tag: '特级' }
    ],
    productList: [],
    filteredProducts: []
  },

  // 获取商品列表
  getproductList() {
    wx.request({
      url: 'http://localhost:8080/api/mysql/classify',
      method: "GET",
      success: (res) => {
        console.log(res.data);
        const newProducts = Array.isArray(res.data) ? res.data : [];

        // 更新商品列表并切换到当前分类
        this.setData({
          productList: [...this.data.productList, ...newProducts]
        }, () => {
          // 这里执行过滤操作
          this.filterProducts(this.data.currentCategory);
        });
      },
      fail: (err) => {
        console.log(err);
        wx.showToast({
          title: '加载失败，请检查网络连接',
          icon: 'none'
        });
      }
    });
  },

  // 页面加载时，获取商品列表
  onLoad() {
    this.getproductList();
  },

  // 切换分类
  switchCategory(e) {
    const category = e.currentTarget.dataset.category;

    wx.showLoading({
      title: '加载中...'
    });

    // 更新当前分类并过滤商品列表
    this.setData({
      currentCategory: category
    }, () => {
      this.filterProducts(category);
      wx.hideLoading();
    });
  },

  // 过滤商品列表
  filterProducts(category) {
    const filteredProducts = this.data.productList.filter(
      item => item.categoryId === category
    );
    this.setData({
      filteredProducts: filteredProducts
    });
  },

  // 跳转到商品详情
  goToDetail(e) {
    const productId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product/detail?id=${productId}`
    });
  }
});
