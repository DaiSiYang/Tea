// memberPages/pages/classify/classify.js
Page({
  data: {
    activeKey: 0,
    oneInfo:true,//0
    twoInfo:false,//1
    thereInfo:false,//2
    foreInfo:false,//3
    FiveInfo:false,//4
    SixInfo:false,//5
    SevenInfo:false,//6
    EightInfo:false,//7
    NineInfo:false,//8
    // 茶壶 //1
    teapotList:[
      {
        url:'http://img.alicdn.com/img/i2/109656324/O1CN01Oa7TZF1waRf6mNBwS_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
        // 内容
        content:'金镶玉龙琉璃功夫茶具套装汉玉白瓷泡茶盖碗茶杯公道杯茶道礼盒装',
        //价格
        price:'888',
        //几人付款
        Number:'17人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:1
      },
      {
        url:'http://img.alicdn.com/img/i4/2207647896904/O1CN01cktZxy20s59dynWMB_!!2207647896904-0-alimamacc.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'景德镇功夫茶具套装家用陶瓷办公室中式高端泡茶壶茶杯会客送礼盒',
        //价格
        price:'788',
        //几人付款
        Number:'217人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:2
      },
      {
        url:'http://img.alicdn.com/img/i4/206510165/O1CN015CEWK01D5c4Kymdn6_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'蒸煮茶壶玻璃纯手工泡茶壶电陶炉煮茶器茶具套装,便宜好用，鬼子用了都说好',
        //价格
        price:'288',
        //几人付款
        Number:'917人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:3
      },
      {
        url:'https://img.alicdn.com/imgextra/i4/3220506153/O1CN01oIUMEo1vK7z1DKlE5_!!3220506153-0-alimamacc.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'梵缇诗白玉琉璃功夫茶具套装家用冰种玉瓷整套轻奢办公室送礼盒装',
        //价格
        price:'388',
        //几人付款
        Number:'57人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:4
      },
      {
        url:'https://picasso.alicdn.com/imgextra/O1CNA1eFx6E41K1gFP8WWU8_!!2200829001104-0-psf.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'紫砂高端茶具套装ZS陶瓷功夫泡茶壶盖碗茶杯家用礼品客厅轻奢高档',
        //价格
        price:'788',
        //几人付款
        Number:'217人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:5
      },
      {
        url:'http://img.alicdn.com/img/i4/2207647896904/O1CN01cktZxy20s59dynWMB_!!2207647896904-0-alimamacc.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'景德镇功夫茶具套装家用陶瓷办公室中式高端泡茶壶茶杯会客送礼盒',
        //价格
        price:'788',
        //几人付款
        Number:'217人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:6
      },
      {
        url:'http://img.alicdn.com/img/i3/109656324/O1CN01FuJitb1waRiEauYTK_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'金镶玉琉璃茶具套装 整套轻奢功夫茶道家用泡茶壶高端办公室茶具',
        //价格
        price:'588',
        //几人付款
        Number:'217人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:7
      },
      {
        url:'http://img.alicdn.com/img/i1/121279821/O1CN01uXSGrV2MQ4fAnmJtr_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'功夫茶具套装景德镇家用轻奢高档陶瓷办公室用泡茶壶茶杯整套礼盒',
        //价格
        price:'988',
        //几人付款
        Number:'1人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:8
      },
      {
        url:'http://img.alicdn.com/img/i4/1778710165/O1CN01R36TZE1D5cJSKucWC_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'女士旅行茶具颜值便携式陶瓷快客杯一壶二杯简约户外露营茶具小套',
        //价格
        price:'88',
        //几人付款
        Number:'7人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'黑鬼店铺',
        id:9
      },
    ],
    //茶盘 //1
    TeaTrayList:[
      {
        url:'http://img.alicdn.com/img/i4/2437750026/O1CN019w9uj31C3xI2D416i_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'简作竹制茶盘小型一人干泡台茶台2024新款茶具茶盘家用迷你小茶盘',
        //价格
        price:'78',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:1
      },
      {
        url:'http://img.alicdn.com/img/i4/372050066/O1CN01sTJoKx1CMGraeSnl8_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'天然乌金石茶盘家用2021新款轻奢现代简约新中式高档石头盘排水式',
        //价格
        price:'1888',
        //几人付款
        Number:'1300人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'班德拉斯茶道礼品店',
        id:2
      },
      {
        url:'https://picasso.alicdn.com/imgextra/O1CNA1GRWDhg2KyJ7iMlcys_!!2215022559625-0-psf.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'斐克利亚花梨实木茶盘全自动一体办公室茶台高端茶具套装家用礼品',
        //价格
        price:'4888',
        //几人付款
        Number:'1人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'FEIKELIYA茗品生活馆',
        id:3
      },
      {
        url:'http://img.alicdn.com/img/i4/2437750026/O1CN019w9uj31C3xI2D416i_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'简作竹制茶盘小型一人干泡台茶台2024新款茶具茶盘家用迷你小茶盘',
        //价格
        price:'78',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:4
      },
      {
        url:'http://img.alicdn.com/img/i3/3861494569/O1CN01A6NcFp1jceby9QVKL_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'石势茶器天然乌金石茶盘家用现代轻奢排水式石材茶海客厅办公室',
        //价格
        price:'378',
        //几人付款
        Number:'100人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'TeaBoard石势茶器设计师',
        id:5
      },
      {
        url:'http://img.alicdn.com/img/i3/1689990175/O1CN01ZrNAYe1DACFBW2zUz_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'茶香里天然轻奢高档乌金石茶盘2023新款简约现代岩板办公排水茶台',
        //价格
        price:'278',
        //几人付款
        Number:'1200人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'茶香里设计研究院',
        id:6
      },
      {
        url:'http://img.alicdn.com/img/i3/62728485/O1CN01SYJdYF2CYBbspnRh6_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'石头茶台乌金石茶台家用嵌入式干泡台带排水办公室茶托盘石茶盘',
        //价格
        price:'378',
        //几人付款
        Number:'1200人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'尚吒茶艺工厂店',
        id:7
      },
      {
        url:'http://img.alicdn.com/img/i4/2437750026/O1CN019w9uj31C3xI2D416i_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'简作竹制茶盘小型一人干泡台茶台2024新款茶具茶盘家用迷你小茶盘',
        //价格
        price:'78',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:8
      },
      {
        url:'http://img.alicdn.com/img/i1/386180145/O1CN017CD8l41CwSJ2086Co_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'全自动便捷底部上水茶具茶盘整套功夫茶具套装家用简约大号茶台',
        //价格
        price:'7118',
        //几人付款
        Number:'17人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'艺满堂家居旗舰店',
        id:9
      },
    ],
    //茶叶 //1
    TeaList:[
      {
        url:'https://img.alicdn.com/img/i1/44809328/O1CN010MUDNq2ImHTFOgf7x_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'2024新茶安徽黄山毛峰特级绿茶400克茶叶礼盒装节日送礼长辈团购',
        //价格
        price:'178',
        //几人付款
        Number:'170人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'谷徽韵旗舰店',
        id:1
      },
      {
        url:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2206584264218/O1CN019FP2ub1h1tb3MS1zv_!!2206584264218-0-C2M.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'绿茶2024新茶叶高山云雾绿茶非毛尖茶特级日照充足浓香型袋泡茶包',
        //价格
        price:'88',
        //几人付款
        Number:'130人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'班德拉斯茶道礼品店',
        id:2
      },
      {
        url:'http://img.alicdn.com/img/i4/45462332/O1CN01zvDEhN1T66bhtHuXY_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'台湾非特级冻顶乌龙茶2024新茶茶叶正宗浓香型高山乌龙茶冷泡茶包',
        //价格
        price:'8',
        //几人付款
        Number:'100人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'FEIKELIYA惠聚春秋旗舰店茗品生活馆',
        id:3
      },
      {
        url:'http://img.alicdn.com/img/i2/4906454902/O1CN016t7MlG1m5ATgsMx3w_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'正宗都匀毛尖2024新茶特级嫩芽炒青绿茶散装贵州高山云雾明前茶叶',
        //价格
        price:'278',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'大业心茶叶旗舰店',
        id:4
      },
      {
        url:'http://img.alicdn.com/img/i1/1576280018/O1CN01MF0gZM1C0I7JEkVaG_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'御恒春山东日照绿茶2024新茶特级明前春茶官方旗舰店浓香型礼盒装',
        //价格
        price:'78',
        //几人付款
        Number:'1000人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'御恒春茶叶旗舰店',
        id:5
      },
      {
        url:'http://img.alicdn.com/img/i3/3011850071/O1CN01lRsV7o1COZ78DWVCp_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'华萃明前特级龙井茶叶礼盒装240g绿茶春茶新茶西湖高档送礼长辈 ',
        //价格
        price:'68',
        //几人付款
        Number:'1300人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:6
      },
      {
        url:'http://img.alicdn.com/img/i2/2216134324051/O1CN01UQdYpC1fnPNWgBglE_!!2216134324051-0-alimamacc.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'君品臻特级碧螺春绿茶2024新茶茶叶礼盒装送礼长辈送领导高档250g',
        //价格
        price:'278',
        //几人付款
        Number:'1240人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:7
      },
      {
        url:'http://img.alicdn.com/img/i4/2437750026/O1CN019w9uj31C3xI2D416i_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'简作竹制茶盘小型一人干泡台茶台2024新款茶具茶盘家用迷你小茶盘',
        //价格
        price:'78',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:8
      },
      {
        url:'https://gw.alicdn.com/imgextra/O1CN01EtmaIk1mQEj5oY2Dh_!!2206588314948-0-C2M.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'茉莉花茶2024新茶茉莉飘雪浓香型毛尖茶叶喝绿茶冷泡送礼',
        //价格
        price:'18',
        //几人付款
        Number:'17人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'国货甄选旗舰店',
        id:9
      },
    ],
    //红茶 //0
    blackTeaList:[
      {
        url:'https://img.alicdn.com/img/i1/44809328/O1CN010MUDNq2ImHTFOgf7x_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'2024新茶安徽黄山毛峰特级绿茶400克茶叶礼盒装节日送礼长辈团购',
        //价格
        price:'178',
        //几人付款
        Number:'170人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'谷徽韵旗舰店',
        id:1
      },
      {
        url:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2206584264218/O1CN019FP2ub1h1tb3MS1zv_!!2206584264218-0-C2M.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'绿茶2024新茶叶高山云雾绿茶非毛尖茶特级日照充足浓香型袋泡茶包',
        //价格
        price:'88',
        //几人付款
        Number:'130人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'班德拉斯茶道礼品店',
        id:2
      },
      {
        url:'http://img.alicdn.com/img/i4/45462332/O1CN01zvDEhN1T66bhtHuXY_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'台湾非特级冻顶乌龙茶2024新茶茶叶正宗浓香型高山乌龙茶冷泡茶包',
        //价格
        price:'8',
        //几人付款
        Number:'100人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'FEIKELIYA惠聚春秋旗舰店茗品生活馆',
        id:3
      },
      {
        url:'http://img.alicdn.com/img/i2/4906454902/O1CN016t7MlG1m5ATgsMx3w_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'正宗都匀毛尖2024新茶特级嫩芽炒青绿茶散装贵州高山云雾明前茶叶',
        //价格
        price:'278',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'大业心茶叶旗舰店',
        id:4
      },
      {
        url:'http://img.alicdn.com/img/i1/1576280018/O1CN01MF0gZM1C0I7JEkVaG_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'御恒春山东日照绿茶2024新茶特级明前春茶官方旗舰店浓香型礼盒装',
        //价格
        price:'78',
        //几人付款
        Number:'1000人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'御恒春茶叶旗舰店',
        id:5
      },
      {
        url:'http://img.alicdn.com/img/i3/3011850071/O1CN01lRsV7o1COZ78DWVCp_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'华萃明前特级龙井茶叶礼盒装240g绿茶春茶新茶西湖高档送礼长辈 ',
        //价格
        price:'68',
        //几人付款
        Number:'1300人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:6
      },
      {
        url:'http://img.alicdn.com/img/i2/2216134324051/O1CN01UQdYpC1fnPNWgBglE_!!2216134324051-0-alimamacc.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'君品臻特级碧螺春绿茶2024新茶茶叶礼盒装送礼长辈送领导高档250g',
        //价格
        price:'278',
        //几人付款
        Number:'1240人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:7
      },
      {
        url:'http://img.alicdn.com/img/i4/2437750026/O1CN019w9uj31C3xI2D416i_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'简作竹制茶盘小型一人干泡台茶台2024新款茶具茶盘家用迷你小茶盘',
        //价格
        price:'78',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:8
      },
      {
        url:'https://gw.alicdn.com/imgextra/O1CN01EtmaIk1mQEj5oY2Dh_!!2206588314948-0-C2M.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'茉莉花茶2024新茶茉莉飘雪浓香型毛尖茶叶喝绿茶冷泡送礼',
        //价格
        price:'18',
        //几人付款
        Number:'17人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'国货甄选旗舰店',
        id:9
      },
    ],
    //白茶 //0
    whiteTeaList:[
      {
        url:'https://img2.baidu.com/it/u=2181799633,3094229643&fm=253&fmt=auto&app=120&f=JPEG?w=627&h=395',
        // 内容
        content:'2024新茶安徽黄山毛峰特级绿茶400克茶叶礼盒装节日送礼长辈团购',
        //价格
        price:'178',
        //几人付款
        Number:'170人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'谷徽韵旗舰店',
        id:1
      },
      {
        url:'https://img0.baidu.com/it/u=986906178,1824421616&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        // 内容
        content:'绿茶2024新茶叶高山云雾绿茶非毛尖茶特级日照充足浓香型袋泡茶包',
        //价格
        price:'88',
        //几人付款
        Number:'130人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'班德拉斯茶道礼品店',
        id:2
      },
      {
        url:'https://img1.baidu.com/it/u=2977755780,3931036420&fm=253&fmt=auto&app=120&f=JPEG?w=635&h=422',
        // 内容
        content:'台湾非特级冻顶乌龙茶2024新茶茶叶正宗浓香型高山乌龙茶冷泡茶包',
        //价格
        price:'8',
        //几人付款
        Number:'100人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'FEIKELIYA惠聚春秋旗舰店茗品生活馆',
        id:3
      },
      {
        url:'https://img0.baidu.com/it/u=1991966189,2802523473&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=302',
        // 内容
        content:'正宗都匀毛尖2024新茶特级嫩芽炒青绿茶散装贵州高山云雾明前茶叶',
        //价格
        price:'278',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'大业心茶叶旗舰店',
        id:4
      },
      {
        url:'https://img0.baidu.com/it/u=712810451,3321498375&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        // 内容
        content:'御恒春山东日照绿茶2024新茶特级明前春茶官方旗舰店浓香型礼盒装',
        //价格
        price:'78',
        //几人付款
        Number:'1000人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'御恒春茶叶旗舰店',
        id:5
      },
      {
        url:'https://img1.baidu.com/it/u=4067927725,3056644619&fm=253&fmt=auto&app=138&f=JPEG?w=863&h=500',
        // 内容
        content:'华萃明前特级龙井茶叶礼盒装240g绿茶春茶新茶西湖高档送礼长辈 ',
        //价格
        price:'68',
        //几人付款
        Number:'1300人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:6
      },
      {
        url:'https://img1.baidu.com/it/u=2899579093,1471022182&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500',
        // 内容
        content:'君品臻特级碧螺春绿茶2024新茶茶叶礼盒装送礼长辈送领导高档250g',
        //价格
        price:'278',
        //几人付款
        Number:'1240人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:7
      },
      {
        url:'https://img0.baidu.com/it/u=957107290,1287827469&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
        // 内容
        content:'简作竹制茶盘小型一人干泡台茶台2024新款茶具茶盘家用迷你小茶盘',
        //价格
        price:'78',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:8
      },
      {
        url:'https://img2.baidu.com/it/u=1409553981,2211066361&fm=253&fmt=auto&app=138&f=JPEG?w=655&h=435',
        // 内容
        content:'茉莉花茶2024新茶茉莉飘雪浓香型毛尖茶叶喝绿茶冷泡送礼',
        //价格
        price:'18',
        //几人付款
        Number:'17人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'国货甄选旗舰店',
        id:9
      },
    ],
    //岩茶//0
    RockList:[
      {
        url:'https://img2.baidu.com/it/u=513878180,2888717458&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
        // 内容
        content:'2024新茶安徽黄山毛峰特级绿茶400克茶叶礼盒装节日送礼长辈团购',
        //价格
        price:'178',
        //几人付款
        Number:'170人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'谷徽韵旗舰店',
        id:1
      },
      {
        url:'https://img0.baidu.com/it/u=60099867,2244170401&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        // 内容
        content:'绿茶2024新茶叶高山云雾绿茶非毛尖茶特级日照充足浓香型袋泡茶包',
        //价格
        price:'88',
        //几人付款
        Number:'130人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'班德拉斯茶道礼品店',
        id:2
      },
      {
        url:'https://img2.baidu.com/it/u=3521479285,1082428893&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800',
        // 内容
        content:'台湾非特级冻顶乌龙茶2024新茶茶叶正宗浓香型高山乌龙茶冷泡茶包',
        //价格
        price:'8',
        //几人付款
        Number:'100人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'FEIKELIYA惠聚春秋旗舰店茗品生活馆',
        id:3
      },
      {
        url:'https://img0.baidu.com/it/u=2626029915,1372246801&fm=253&fmt=auto&app=138&f=JPEG?w=607&h=404',
        // 内容
        content:'正宗都匀毛尖2024新茶特级嫩芽炒青绿茶散装贵州高山云雾明前茶叶',
        //价格
        price:'278',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'大业心茶叶旗舰店',
        id:4
      },
      {
        url:'https://img1.baidu.com/it/u=4065730763,300719180&fm=253&fmt=auto&app=138&f=JPEG?w=1067&h=800',
        // 内容
        content:'御恒春山东日照绿茶2024新茶特级明前春茶官方旗舰店浓香型礼盒装',
        //价格
        price:'78',
        //几人付款
        Number:'1000人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'御恒春茶叶旗舰店',
        id:5
      },
      {
        url:'https://img0.baidu.com/it/u=3594461729,3134395423&fm=253&fmt=auto&app=138&f=JPEG?w=1425&h=800',
        // 内容
        content:'华萃明前特级龙井茶叶礼盒装240g绿茶春茶新茶西湖高档送礼长辈 ',
        //价格
        price:'68',
        //几人付款
        Number:'1300人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:6
      },
      {
        url:'https://img2.baidu.com/it/u=120765974,776711975&fm=253&fmt=auto&app=138&f=JPEG?w=521&h=346',
        // 内容
        content:'君品臻特级碧螺春绿茶2024新茶茶叶礼盒装送礼长辈送领导高档250g',
        //价格
        price:'278',
        //几人付款
        Number:'1240人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:7
      },
      {
        url:'https://img2.baidu.com/it/u=2087216047,3019168902&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        // 内容
        content:'简作竹制茶盘小型一人干泡台茶台2024新款茶具茶盘家用迷你小茶盘',
        //价格
        price:'78',
        //几人付款
        Number:'1700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:8
      },
      {
        url:'https://img1.baidu.com/it/u=1915750000,4076312883&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500',
        // 内容
        content:'茉莉花茶2024新茶茉莉飘雪浓香型毛尖茶叶喝绿茶冷泡送礼',
        //价格
        price:'18',
        //几人付款
        Number:'17人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'国货甄选旗舰店',
        id:9
      },
    ],
    //绿茶 //1
    greenList:[
      {
        url:'https://img.alicdn.com/img/i3/6891622633/O1CN01V6REQT1VJxpW7bV4o_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'都匀毛尖2024新茶明前嫩芽叶250g贵州炒青绿茶板栗香浓鲜爽',
        //价格
        price:'69',
        //几人付款
        Number:'1710人付款',
        //地址
        addres:'四川',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'谷徽韵旗舰店',
        id:1
      },
      {
        url:'https://img.alicdn.com/img/i3/6561119063/O1CN01TZ39Sm2GouX5uxGBl_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'安徽岳西炒青绿茶谷雨后新茶高山春茶特级散装口粮茶国宾礼茶',
        //价格
        price:'169',
        //几人付款
        Number:'2345人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'班德拉斯茶道礼品店',
        id:2
      },
      {
        url:'https://img.alicdn.com/img/i2/6891622633/O1CN0122kLAk1VJxpYGwIU8_!!2-saturn_solar.png_360x360q90.jpg_.webp',
        // 内容
        content:'都匀毛尖茶贵州绿茶2024新茶谷雨炒青绿茶浓香型茶叶板栗香',
        //价格
        price:'188',
        //几人付款
        Number:'6574人付款',
        //地址
        addres:'湖北',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'FEIKELIYA惠聚春秋旗舰店茗品生活馆',
        id:3
      },
      {
        url:'https://img.alicdn.com/img/i3/5046397220/O1CN01DjwuyA23CoabUXFKt_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'四川峨眉正品特级茉莉飘雪2024年新茶浓香型茉莉花茶绿茶茶叶500g',
        //价格
        price:'199',
        //几人付款
        Number:'2342人付款',
        //地址
        addres:'广东',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'大业心茶叶旗舰店',
        id:4
      },
      {
        url:'https://img.alicdn.com/img/i3/983140193/O1CN018hfQFz1DIRR4ksIPS_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'雀舌2024新茶特级明前春茶嫩芽茶贵州湄潭毛尖绿茶清香250礼盒装',
        //价格
        price:'39',
        //几人付款
        Number:'8w人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'御恒春茶叶旗舰店',
        id:5
      },
      {
        url:'https://img.alicdn.com/img/i3/3011850071/O1CN01aIOUgn1COZ7PhvN8u_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'华萃2024新茶明前特级龙井茶150g绿茶春茶西湖茶叶礼盒装送长辈 ',
        //价格
        price:'59',
        //几人付款
        Number:'1237人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:6
      },
      {
        url:'https://img.alicdn.com/img/i1/32795740/O1CN01b0dB9z1sGyOFLkcWk_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'2024新茶茶叶头采嫩芽小叶苦丁茶米芽明前茶绿春茶浓香型苦丁芽茶',
        //价格
        price:'99',
        //几人付款
        Number:'3331人付款',
        //地址
        addres:'安徽',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:7
      },
      {
        url:'https://img.alicdn.com/img/i4/30696940/O1CN01gjbwa9218ZgnCd5c2_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'惠聚春秋新茶安溪兰花香铁观音茶叶高山参赛特级秋茶清香型送礼',
        //价格
        price:'79',
        //几人付款
        Number:'3458人付款',
        //地址
        addres:'湖北',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'简作家具旗舰店',
        id:8
      },
      {
        url:'https://img.alicdn.com/img/i1/20954021/O1CN01dxi0Oj1fZfP4Jg9iv_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'陕西汉中午子仙毫绿茶明前特级雀舌茶叶  精选嫩芽茶  春茶礼盒装',
        //价格
        price:'168',
        //几人付款
        Number:'3w人付款',
        //地址
        addres:'湖北',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'国货甄选旗舰店',
        id:9
      },
    ],
    //普尔//1
    PooleList:[
      {
        // 图片地址
              url:'https://img.alicdn.com/img/i1/6985197393/O1CN01jiR69N24U36yXgtgG_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'昔归普洱茶生茶357克云南七子饼茶古树茶叶自己喝口粮茶生普茶饼',
      
              //价格
              price:'66.8',
      
              //几人付款
              Number:'56人付款',
      
              //地址
              addres:'江西',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
       {
        // 图片地址
              url:'https://img.alicdn.com/img/i2/6781147913/O1CN014hVzHm28KD2gnNYLv_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'5片整提正宗云南古树老班章普洱茶熟茶砖 勐海特级宫廷七子饼茶叶',
      
              //价格
              price:'65.8',
      
              //几人付款
              Number:'116人付款',
      
              //地址
              addres:'江西',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      {
        // 图片地址
              url:'https://img.alicdn.com/img/i2/5528159724/O1CN011SNDC92LheKsZWnon_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'云南普洱熟茶三角茶包袋泡茶非特级陈年宫廷熟普洱茶叶老茶冷泡茶-淘宝网',
              //价格
              price:'36.8',
      
              //几人付款
              Number:'26人付款',
      
              //地址
              addres:'江西',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      {
        // 图片地址
              url:'https://img.alicdn.com/imgextra/i3/2213229850643/O1CN01uU7jQ91GcXcIn9A2R_!!2213229850643.jpg_.webp',
      
              // 内容
              content:'大雪山古普洱树 生茶饼茶 云南普洱茶2024压制 357克饼云南七子饼',
              //价格
              price:'66.8',
      
              //几人付款
              Number:'26人付款',
      
              //地址
              addres:'江西',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      {
        // 图片地址
              url:'https://img.alicdn.com/img/i1/6262728712/O1CN01oBOySX2EE9WQJ915b_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'茶人岭普洱熟茶菊花普洱50克罐装茶叶冰镇菊普',
              //价格
              price:'66.8',
      
              //几人付款
              Number:'26人付款',
      
              //地址
              addres:'江西',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      {
        // 图片地址
              url:'https://img.alicdn.com/img/i1/6262728712/O1CN01oBOySX2EE9WQJ915b_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'茶人岭普洱熟茶菊花普洱50克罐装茶叶冰镇菊普',
              //价格
              price:'36.8',
      
              //几人付款
              Number:'29.3人付款',
      
              //地址
              addres:'江西',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      
      
      {
        // 图片地址
              url:'https://img.alicdn.com/img/i2/5528159724/O1CN011SNDC92LheKsZWnon_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'冰中岛2022冰岛云泥 古树400克云南冰岛普洱茶生茶饼',
      
              //价格
              price:'66.8',
      
              //几人付款
              Number:'21人付款',
      
              //地址
              addres:'上海',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      
      
      {
        // 图片地址
              url:'https://img.alicdn.com/img/i2/5528159724/O1CN019Zznsy2LheKxlFNGv_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'冰中岛2024年冰岛黄金条315g云南冰岛普洱茶生茶冰岛老寨古树春茶',
      
              //价格
              price:'76.8',
      
              //几人付款
              Number:'31人付款',
      
              //地址
              addres:'上海',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      {
        // 图片地址
              url:'https://img.alicdn.com/img/i4/33716768/O1CN01sHrY371zrnZNWdv4O_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'五大名山普洱生茶礼盒装 班章易武困鹿昔归冰岛 御兴茶叶500g送礼',
      
              //价格
              price:'276.8',
      
              //几人付款
              Number:'311人付款',
      
              //地址
              addres:'上海',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      },
      
      {
        // 图片地址
              url:'https://gw.alicdn.com/imgextra/O1CN01pJN67d1h1tbK8dELq_!!2206584264218-0-C2M.jpg_360x360q90.jpg_.webp',
      
              // 内容
              content:'龙地山云南糯米香普洱茶小沱茶饼熟茶小坨小粒装糯香黑茶叶500g克',
      
              //价格
              price:'276.8',
      
              //几人付款
              Number:'311人付款',
      
              //地址
              addres:'上海',
      
              // 分期
              stages:'12期 先用后付 包邮',
      
              // 店铺
              shop:'黑鬼店铺',
      }
      
    ],
    //紫砂//1
    PurpleClayPot:[
      {
        url:' https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/923526317/O1CN014dzHne1wXEocDSLdz_!!0-item_pic.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'紫砂茶具套装家用轻奢高档懒人自动泡茶神器功夫茶杯茶2024新款',
        //价格
        price:'88',
        //几人付款
        Number:'14人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'谷徽韵旗舰店',
        id:1
      },
      {
        url:' https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/4057643953/O1CN01q7D1Vs1f4WdeEgdXu_!!0-item_pic.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'吴成志紫砂正品黄金段泥敦煌茶具套装',
        //价格
        price:'38',
        //几人付款
        Number:'430人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'美学好物旗舰店',
        id:2
      },
      {
        url:'https://img.alicdn.com/img/i1/3073308126/O1CN01evjhKm29tlJhlsWmw_!!0-saturn_solar.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'归玉堂 天然冰碛岩高档养生中式复古秦权泡茶壶全手工石壶茶器具',
        //价格
        price:'78',
        //几人付款
        Number:'1200人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'归玉堂',
        id:3
      },
      {
        url:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2934138215/O1CN01LR2Oop2AYWWPuc52a_!!0-item_pic.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'陶福气 复古紫砂自动茶具套装家用 懒人泡茶神器茶盘整套泡茶具',
        //价格
        price:'2178',
        //几人付款
        Number:'1740人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'陶福气旗舰店',
        id:4
      },
      {
        url:' https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2206608130463/O1CN01ImzeWz1FI6NMzO9ge_!!0-item_pic.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'小院遇见 高档手工敦煌紫砂功夫茶具家用陶瓷西施泡茶礼盒装',
        //价格
        price:'728',
        //几人付款
        Number:'1100人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'小院遇见旗舰店',
        id:5
      },
      {
        url:' https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/4098443114/O1CN01XiFIlp1YsGLLesc1l_!!0-item_pic.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'原矿功夫茶具套装家用高档办公室泡茶盖碗茶杯2024新款中式',
        //价格
        price:'1268',
        //几人付款
        Number:'1300人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'凌胜居家日用旗舰店',
        id:6
      },
      {
        url:' https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/3665978473/O1CN01tn2MJN2CSgmUSSBhZ_!!3665978473.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'原矿功夫茶具套装家用高档办公室泡茶盖碗茶杯2024新款中式',
        //价格
        price:'2718',
        //几人付款
        Number:'1240人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'天猫超市',
        id:7
      },
      {
        url:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/4062121879/O1CN01GeOQhu1Pkd4Od3VTH_!!0-item_pic.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'高端紫陶功夫茶具套装中式复古家用办公泡茶盖碗陶瓷',
        //价格
        price:'48',
        //几人付款
        Number:'700人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'茶缘阁高端茶具',
        id:8
      },
      {
        url:' https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/4098443114/O1CN01XiFIlp1YsGLLesc1l_!!0-item_pic.jpg_360x360q90.jpg_.webp',
        // 内容
        content:'原矿功夫茶具套装家用高档办公室泡茶盖碗茶杯2024新款中式',
        //价格
        price:'48',
        //几人付款
        Number:'172人付款',
        //地址
        addres:'江西',
        // 分期
        stages:'12期 先用后付 包邮',
        // 店铺
        shop:'凌胜居家日用旗舰店',
        id:9
      },
    ],
  },
  onChange(event) {
    console.log(event.detail);
    if(event.detail == 0){
      this.setData({
        oneInfo:true
      })
    }else{
      this.setData({
        oneInfo:false
    })
  }
  if(event.detail == 1){
    this.setData({
      twoInfo:true
    })
  }else{
    this.setData({
      twoInfo:false
  })
}
if(event.detail == 2){
  this.setData({
    thereInfo:true
  })
}else{
  this.setData({
    thereInfo:false
})
}
if(event.detail == 3){
  this.setData({
    foreInfo:true
  })
}else{
  this.setData({
    foreInfo:false
})
}
if(event.detail == 4){
  this.setData({
    SevenInfo:true
  })
}else{
  this.setData({
    SevenInfo:false
})
}
if(event.detail == 5){
  this.setData({
    EightInfo:true
  })
}else{
  this.setData({
    EightInfo:false
})
}
if(event.detail == 6){
  this.setData({
    NineInfo:true
  })
}else{
  this.setData({
    NineInfo:false
})
}
}
})