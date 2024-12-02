// components/home/main/index.js
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
    directoryItemList:[
      {url:"https://img1.baidu.com/it/u=3601686748,149265896&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",id:1,left:"history" , text:"茶的历史"},
      {url:"https://img0.baidu.com/it/u=701591748,3509477494&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1727715600&t=ac5bcd0fafd3b16b0591948a03a756c0",id:2,left:"Teaclass" , text:"茶的种类"},
      {url:"https://img0.baidu.com/it/u=3039791797,1961943181&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1727715600&t=83b051fab27fbfede6fd21599c824676",id:3,left:"efficacy" , text:"茶的功效"},
      {url:"https://img0.baidu.com/it/u=1827062608,4171761710&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1727715600&t=9ba5d7b8f1a1fc956d114b23df312230",id:4,left:"chachai" , text:"茶艺茶道"},

    ],
    historyList:[
      {url:"https://t12.baidu.com/it/u=748462506,232238610&fm=30&app=106&f=JPEG?w=640&h=421&s=FDB029D509514DCE1260356103007031",text:"唐代是中国茶文化发展的黄金时代，茶的种植、制作、饮用方式以及相关的文化活动都达到了前所未有的繁荣" ,iconfont:"iconfont icon-tang"},
      {url:"https://img0.baidu.com/it/u=3363601823,2491155706&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=452",text:"宋代是中国茶文化发展的鼎盛时期，茶文化在这一时期达到了一个新的高度，成为社会生活的重要组成部分",iconfont:"iconfont icon-song"},
      {url:"https://img2.baidu.com/it/u=3320012149,2534189610&fm=253&fmt=auto&app=120&f=JPEG?w=608&h=374",text:"相比于唐宋时代，元代的饮茶文化似乎没有了那种高水平的艺术魅力",iconfont:"iconfont icon-yuan"},
      {url:"https://img2.baidu.com/it/u=1618146966,4087658210&fm=253&fmt=auto&app=120&f=PNG?w=965&h=716",text:"明代饮茶法的变革，引发了茶文化的变化。而饮茶法的平民化，则引发了明代茶事的盛况",iconfont:"iconfont icon-ming"},
      {url:"https://img2.baidu.com/it/u=1776884461,142364776&fm=253&fmt=auto&app=138&f=JPEG?w=593&h=430",text:"清朝时期，茶叶贸易十分繁荣。国内市场，茶叶主要产区形成了以安溪、武夷山、杭州西湖为中心的三大茶区",iconfont:"iconfont icon-qing"},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    history(idx){
      const index = idx.currentTarget.dataset.index+1
      wx.navigateTo({
        url: `/homePages/pages/historys/index?id=${index}`,
      })
    },
    GetId(e){
      const id = e.currentTarget.dataset.id
      if(id === 1){
        wx.pageScrollTo({  
          scrollTop: 395,  
          duration: 500 // 动画时长，单位为毫秒  
        });  
      }else if(id === 2){
          wx.navigateTo({
            url: '/homePages/pages/ClassTag/index',
          })
      }else if (id == 3) {
        wx.navigateTo({
          url: '/homePages/pages/efficacy/index',
        })
      }else{
        wx.navigateTo({
          url: '/homePages/pages/Tea/index',
        })
      }
    },
    measureBox() {  
      wx.createSelectorQuery().in(this).select('.history').boundingClientRect(rect => {  
        console.log('盒子到组件顶端距离:', rect.top);  
        // 注意：这里的top是相对于组件视口的，如果需要相对于页面顶端的距离，还需要加上组件的滚动偏移（如果有的话）  
      }).exec();  
    }
   
  },
  attached() {  
    // 组件加载时测量盒子距离  
    this.measureBox();  
  }  ,
  options: {  
    styleIsolation: 'apply-shared' // 或 'apply-shared'  
  }  
 
})