import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../../store/idnex'
Component({
behaviors:[storeBindingsBehavior],
storeBindings:{
  store,
  fields:{
    coins:'coins',
    userDynamicL:'userDynamicL',
    userConcern:'userConcern',
    userSomeone:'userSomeone'
  }
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
     
  },
  onLoad(options) {

  },
})