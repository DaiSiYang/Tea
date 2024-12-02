// components/member/Hot/index.js
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
    list:[]
    // hot:[
    //   {
    //     url:"https://img0.baidu.com/it/u=4153621653,994187470&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
    //     text:"拍卖-紫砂壶",
    //     price:"5400"
    //   },
    //   {
    //     url:"https://img1.baidu.com/it/u=3059576640,2672421438&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500",
    //     text:"拍卖-紫砂壶",
    //     price:"5300"
    //   },
    //   {
    //     url:"https://img0.baidu.com/it/u=639260551,2630314882&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800",
    //     text:"拍卖-紫砂壶",
    //     price:"1300"
    //   },
    //   {
    //     url:"https://pic9.997788.com/_pic_auction/00/18/79/23/18792384.jpg",
    //     text:"养生名具-紫砂壶",
    //     price:"3500"
    // } ,
    // {
    //   url:"https://img2.baidu.com/it/u=2081312693,4165363277&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
    //   text:"不锈钢-铁壶",
    //   price:"1600"
    // },
    // {
    //   url:"https://pic.taohuren.com/images/article/2024/0812/481945312badde76.png",
    //   text:"拍卖-紫砂壶",
    //   price:"3300"
    // },
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getList(){
      wx.request({
        url: 'http://127.0.0.1:8080/api/mysql/memberHot',
        method:'GET',
        success:(res)=>{
          this.setData({
            list:res.data
          })
        }
      })
    },
    clickMain(id){
      const itemTd = id.currentTarget.dataset.id
      console.log(itemTd);
      wx.navigateTo({
        url: `/memberPages/pages/detail/indexs?id=${itemTd}`,
      })
    }
  },
  attached(){
    this.getList()
  }
})