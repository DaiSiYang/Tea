import {observable,action} from 'mobx-miniprogram'
export const store = observable({
  //user
  coins:1000.99,
  userDynamicL:0,
  userConcern:10,
  userSomeone:3,
  // cart
  //one
  onePrice:30,
  oneNum:3,
  get oneSum(){
    return this.onePrice * this.oneNum
  },
  oneClick:action(function (count) {
      this.oneNum += count
  }),
  //two
  twoPrice:274,
  twoNum:1,
  get twoSum(){
    return this.twoPrice * this.twoNum
  },
  twoClick:action(function (count) {
      this.twoNum += count
  }),
  //Three
  ThreePrice:3168,
  ThreeNum:1,
  get ThreeSum(){
    return this.ThreePrice * this.ThreeNum
  },
  ThreeClick:action(function (count) {
      this.ThreeNum += count
  }),
  //Four
  FourPrice:109,
  FourNum:1,
  get FourSum(){
    return this.FourPrice * this.FourNum
  },
  FourClick:action(function (count) {
      this.FourNum += count
  }),
  //总价
  get TotalPrice(){
    return this.onePrice * this.oneNum+this.twoPrice * this.twoNum+this.ThreePrice * this.ThreeNum+this.FourPrice * this.FourNum
  }
}) 