import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../../store/idnex'
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
  store,
  fields:{
    userDynamicL:"userDynamicL",
    userConcern:"userConcern",
    userSomeone:"userSomeone"
  },
  actives:{

  }
  }
  ,
  /**
   * 组件的属性列表
   */
  properties:{

  },

  /**
   * 组件的初始数据
   */
  data: {
    avatarUrl:defaultAvatarUrl,
    name:"请登录",
    userList:[
      {
        text:"动态",
        num:store.userDynamicL
      },
      {
        text:"关注"
        ,
        num:store.userConcern
      },
      {
        text:"粉丝"
        ,
        num:store.userSomeone
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onChooseAvatar(e) {
         const { avatarUrl } = e.detail 
         this.setData({
         avatarUrl,
       })
    },
    friend(){
      console.log(11);
     wx.navigateTo({
       url: '/userPages/pages/Friend/index',
     })
    }
  }
})