// components/course/main/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    itemList:[
      {text:"中国茶文化简史",id:1,day:"8月25日",price:"0.02",
     content:"中国茶文化是中国制茶、饮茶的文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，少说也有4700多年了。直到现在，汉族还有民以茶代礼的风俗"},
      {text:"茶经",id:2,day:"8月26日",price:"0.03",
     content:"《茶经》是唐代‌陆羽创作的茶学专著，是中国乃至世界现存最早、最完整、最全面的茶叶专著，被誉为茶叶百科全书。全书分为上中下三卷，共十章节，系统地总结了唐代中期以前茶叶发展、生产、加工、品饮等方面的情形，并深入发掘饮茶的文化内涵，将饮茶从日常生活习惯提升到了艺术和审美的层次。"},
      {text:"茶思想研讨",id:3,day:"8月27日",price:"0.04",
     content:"茶虽简单，却蕴含无限韵味，提醒我们要珍视眼前的每一刻，活在当下，用心去体验生活中的点点滴滴，发现平凡中的美好，感恩生命赐予的一切"},
      {text:"东西方艺术欣赏",id:4,day:"8月28日",price:"0.05",
     content:"西方艺术家学习借鉴东方艺术的两个高潮是印象派和超现实主义，区别在于印象派关注东方艺术的符号和元素，超现实主义则更关注东方精神和艺术技法"},
      {text:"泡茶技艺初级",id:5,day:"9月5日",price:"0.06",
     content:"茶道，就是品赏茶的美感之道。茶道是一种烹茶饮茶的生活艺术，一种以茶修身的生活方式"},
      {text:"初级实践",id:6,day:"9月6日",price:"0.07",
     content:"茶的泡法 泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量,这样茶的香味、色泽、滋味才会得以充分的发挥"},
      {text:"中级实践",id:7,day:"9月12日",price:"0.08",
     content:"泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量"},
      {text:"高级实践",id:8,day:"9月21日",price:"0.09",
     content:"泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量"},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMore(){
      wx.navigateTo({
        url: '/couresPages/pages/More/more',
      })
    },
    onPurchase(id){
    let itemId = id.target.dataset.id
    console.log(itemId);
    const item = this.data.itemList.find(item=> item.id == itemId)
    console.log(item);
      wx.navigateTo({
        url: `/couresPages/pages/purchase/purchase?text=${item.text}&price=${item.price}&content=${item.content}`
      })
    }
  }
})