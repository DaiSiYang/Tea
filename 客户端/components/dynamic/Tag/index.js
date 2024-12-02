// components/dynamic/Tag/index.js
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
      IsFor: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isTrue(){
      this.setData({
        IsFor: !this.data.IsFor
      })
      console.log(this.data.IsFor);
}
  }
})