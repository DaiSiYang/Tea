// memberPages/pages/cart/cart.js
import {createStoreBindings} from 
'mobx-miniprogram-bindings'
import {store} from '../../../store/idnex'
import Dialog from '@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
onequantity(e){
 const count = e.target.dataset.quantity
 this.oneClick(count)

  },
twoquantity(e){
 const count = e.target.dataset.quantity
 this.twoClick(count)
  },
Threequantity(e){
 const count = e.target.dataset.quantity
 this.ThreeClick(count)
  },
Fourquantity(e){
 const count = e.target.dataset.quantity
 this. FourClick(count)
  },
  cartClick(){
    if(store.coins-store.TotalPrice<0){
      wx.showModal({
        content: '余额不足，请充值',
        success (res) {
          if (res.confirm) {
           console.log(store.coins);
           wx.showToast({
            title: '您的余额为'+store.coins,
            icon: 'none',
            duration: 2000
          })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      // wx.showToast({
      //   title: '支付成功，您的余额为'+store.coins,
      //   icon: 'none',
      //   duration: 2000
      // })
      wx.showModal({
        content: '支付成功，您的余额为'+(store.coins-store.TotalPrice)
      })
    }
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:['onePrice','oneNum','oneSum','twoPrice','twoNum','twoSum','ThreePrice','ThreeNum','ThreeSum','FourPrice','FourNum','FourSum','TotalPrice','coins'],
      actions:['oneClick','twoClick','ThreeClick','FourClick']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})