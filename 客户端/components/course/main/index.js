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
   
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getitemList(){
      wx.request({
        url: 'http://localhost:8080/api/mysql/coursemain',
        method:'GET',
        success:(res)=>{
          console.log(res.data);
          this.setData({
            itemList:res.data
          })
          console.log(this.data.itemList);
        }
      })
    },
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
        url: `/couresPages/pages/purchase/purchase?text=${item.text}&price=${item.price}&content=${item.content}&id=${item.id}`
      })
    }
  },
  attached(){
    this.getitemList()
  }
})