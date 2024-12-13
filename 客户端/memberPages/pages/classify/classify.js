// memberPages/pages/classify/classify.js
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
    productList: [
      // 茶壶系列
      {
        id: 1,
        categoryId: 'teapot',
        title: '宜兴原矿紫砂壶',
        desc: '全手工制作 容量180ml',
        price: 1280,
        sales: 156,
        tag: '匠心之作',
        image: 'https://cbu01.alicdn.com/img/ibank/O1CN01KnDz232LamMP12OtX_!!2216632689709-0-cib.220x220.jpg'
      },
      {
        id: 2,
        categoryId: 'teapot',
        title: '景德镇陶瓷茶壶',
        desc: '青花瓷茶具 容量250ml',
        price: 299,
        sales: 432,
        tag: '热销',
        image: 'https://gw.alicdn.com/imgextra/i1/3619010370/O1CN01kv8QsH1EbVNes9PLR_!!3619010370.jpg_Q75.jpg_.webp'
      },
      // 茶盘系列
      {
        id: 3,
        categoryId: 'teatray',
        title: '黑檀木实木茶盘',
        desc: '整块实木雕刻 带排水',
        price: 1680,
        sales: 89,
        tag: '新品',
        image: 'https://img12.360buyimg.com/n1/jfs/t2362/88/2215065021/445508/89de49ad/56aac815N1e0fbab8.jpg'
      },
      // 茶具系列
      {
        id: 4,
        categoryId: 'teaware',
        title: '功夫茶具套装',
        desc: '陶瓷茶具整套16件',
        price: 499,
        sales: 765,
        tag: '精选',
        image: 'https://img.ixintu.com/download/jpg/201912/b66a508a4266435ace37dffffb51f9c8.jpg!ys'
      },
      // 红茶系列
      {
        id: 5,
        categoryId: 'blacktea',
        title: '正山小种红茶',
        desc: '特级茶叶 250g',
        price: 368,
        sales: 1253,
        tag: '特惠',
        image: 'https://shop.hojotea.com.my/cdn/shop/products/IMG_5017_630x.jpg?v=1623937457'
      },
      {
        id: 6,
        categoryId: 'blacktea',
        title: '金骏眉红茶',
        desc: '特级茶叶 200g',
        price: 298,
        sales: 892,
        tag: '特惠',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HgxhUgjPojD8hafnpZHu7YZKUfgKaqcGEyEH_JYzzPo0I6Mz60uV1m3-zbhLJbyx7Zw&usqp=CAU'
      },
      // 绿茶系列
      {
        id: 7,
        categoryId: 'greentea',
        title: '西湖龙井茶',
        desc: '明前特级 250g',
        price: 580,
        sales: 678,
        tag: '限量',
        image: 'https://imgs.699pic.com/images/501/355/008.jpg!list1x.v2'
      },
      // 普洱茶系列
      {
        id: 8,
        categoryId: 'puer',
        title: '云南普洱生茶',
        desc: '2023年春茶 357g',
        price: 799,
        sales: 345,
        tag: '珍藏',
        image: 'https://imgs.699pic.com/images/600/344/618.jpg!list1x.v2'
      },
      // 乌龙茶系列
      {
        id: 9,
        categoryId: 'oolong',
        title: '铁观音茶叶',
        desc: '特级清香型 250g',
        price: 468,
        sales: 567,
        tag: '特级',
        image: 'https://imgs.699pic.com/images/500/908/709.jpg!list1x.v2'
      }
    ],
    filteredProducts: []
  },

  onLoad() {
    const initialProducts = this.data.productList.filter(
      item => item.categoryId === this.data.currentCategory
    );
    this.setData({
      filteredProducts: initialProducts
    });
  },

  // 切换分类
  switchCategory(e) {
    const category = e.currentTarget.dataset.category;
    
    wx.showLoading({
      title: '加载中...'
    });

    const filteredProducts = this.data.productList.filter(
      item => item.categoryId === category
    );

    this.setData({
      currentCategory: category,
      filteredProducts: filteredProducts
    }, () => {
      wx.hideLoading();
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