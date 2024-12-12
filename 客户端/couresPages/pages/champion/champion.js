// couresPages/pages/Newlessons/Newlessons.js
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
    champions: [
      {
        id: 1,
        name: "中国茶文化简史",
        views: 2451
      },
      {
        id: 2,
        name: "泡茶技艺初级",
        views: 1832
      },
      {
        id: 3,
        name: "初级实践",
        views: 1654
      },
      {
        id: 4,
        name: "中级实践",
        views: 1245
      },
      {
        id: 5,
        name: "高级实践",
        views: 1102
      },
      {
        id: 6,
        name: "茶经",
        views: 986
      },
      {
        id: 7,
        name: "东西方艺术欣赏",
        views: 875
      },
      {
        id: 8,
        name: "茶思想研讨",
        views: 764
      },
      {
        id: 9,
        name: "中国茶只是千题解",
        views: 652
      },
      {
        id: 10,
        name: "中国古代茶书集成",
        views: 543
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      getItemList(){
        // 暂时注释掉或删除这个请求，使用静态数据
        /*
        wx.request({
          url: "http://127.0.0.1:8080/api/course/Free",
          method:"GET",
          success:(res)=>{
            this.setData({
              champions:res.data
            })
            console.log(this.champions);
          }
        })
        */
      },
      onMore(){
        wx.showToast({
          title: '没有更多了',
          icon:"none"
        })
      }
  },
  attached(){
    // 如果不需要从服务器获取数据，可以注释掉这行
    // this.getItemList()
  }
})