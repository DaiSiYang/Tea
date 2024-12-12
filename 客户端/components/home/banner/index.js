Page({
  data: {
    currentIndex: 0,
    swiperList: [
      {
        id: 1,
        imageUrl: 'https://img2.baidu.com/it/u=481590814,1241413913&fm=253&fmt=auto&app=120&f=JPEG?w=712&h=474',
        title: '清香雅韵',
        desc: '品味人生，品味茶香'
      },
      {
        id: 2,
        imageUrl: 'https://img0.baidu.com/it/u=813936022,738342146&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        title: '茗茶飘香',
        desc: '一杯好茶，沁人心脾'
      },
      {
        id: 3,
        imageUrl: 'https://img2.baidu.com/it/u=2571529661,3489841314&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        title: '茶艺之美',
        desc: '匠心独运，韵味悠长'
      },
      {
        id: 4,
        imageUrl: 'https://img0.baidu.com/it/u=2258170876,2900753318&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=400',
        title: '禅茶一味',
        desc: '清心静气，品味生活'
      },
      {
        id: 5,
        imageUrl: 'https://img2.baidu.com/it/u=553827459,2332021544&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500',
        title: '茶道之境',
        desc: '一期一会，茶香永驻'
      }
    ]
  },

  handleSwiperClick(e) {
    const id = e.currentTarget.dataset.id;
    console.log('点击了轮播图，ID:', id);
  },

  handleSwiperChange(e) {
    this.setData({
      currentIndex: e.detail.current
    });
  }
}) 