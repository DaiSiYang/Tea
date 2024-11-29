// userPages/pages/concern/index.js
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
 getList(){
   wx.request({
     url: 'http://127.0.0.1:8080/api/mysql/concern',
     method:'GET',
     success:(res)=>{
       this.setData({
         list:res.data
       })

     }
   })
 }
  },
  attached(){
    this.getList()
  }
})