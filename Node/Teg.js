const express = require('express')

const mysql = require('mysql2');
const bodyParser = require('body-parser');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '051223',
  database: 'my_mysql'
});

db.connect(function(err){
    if(err){
        console.log('Error connecting to Db',err);
    }else{
        console.log('Connection established');
    }
});

const app = express()

const cors = require('cors')
const {connect, connection} = require("mongoose");
const req = require("express/lib/request");

// member
const commodity = [
    {
        id:1,
        url:"http://img.alicdn.com/img/i2/117375874/O1CN01fchMVu1tGLS5LejUM_!!0-saturn_solar.jpg_580x580q90.jpg_.webp",
        text:"乌金石茶盘2024新款客厅家用高档石头托盘办公室轻奢现代功夫茶台",
        price:"999"
    },
    {
        id:2,
        url:"http://img.alicdn.com/img/i3/120308478/O1CN01w1TvI92CUyRjT7V3a_!!0-saturn_solar.jpg_.webp",
        text:"流水雾化乌金石茶盘简约功夫茶具套装",
        price:"959"
    },
    {
        id:3,
        url:"http://img.alicdn.com/img/i3/2084270144/O1CN01ZGnON71Cvzo8ocJZ7_!!0-saturn_solar.jpg_360x360q90.jpg_.webp",
        text:"整块实木茶盘家用茶具套装小型干泡茶台排水茶海办公室高端电木款",
        price:"288"
    },
    {
        id:4,
        url:"http://img.alicdn.com/img/i2/2331325658/O1CN01QKt3DT1rfPogD31Jh_!!2331325658-0-alimamacc.jpg_360x360q90.jpg_.webp",
        text:"天然玄青石茶盘",
        price:"398"
    },
    {
        id:5,
        url:"http://img.alicdn.com/img/i1/2268785024/O1CN01yAWhxA1mz2nlmLysg_!!2268785024-0-alimamacc.jpg_360x360q90.jpg_.webp",
        text:"嵌入式乌金石茶盘茶桌中间下沉漏水盖板面板内嵌支持定制茶台茶具",
        price:"388"
    },
    {
        id:6,
        url:"http://img.alicdn.com/img/i1/118903584/O1CN01F2W7xm1cLWTvi4wYi_!!0-saturn_solar.jpg_360x360q90.jpg_.webp",
        text:"天然乌金石头茶盘大号家用办公室用简约轻奢现代茶海排水托盘茶台",
        price:"148"
    },
    {
        id:7,
        url:"http://img.alicdn.com/img/i2/2206599856188/O1CN016cH6JU1va9qBKQVu8_!!2206599856188-0-alimamacc.jpg_360x360q90.jpg_.webp",
        text:"仁唐天然乌金石茶盘高端2024家用浮雕石盘石头办公室茶台天罗绿",
        price:"498"
    },
    {
        id:8,
        url:"http://img.alicdn.com/img/i3/111169170/O1CN01L7AG0x2Hbum42ogTV_!!0-saturn_solar.jpg_360x360q90.jpg_.webp",
        text:"实木茶盘家用简约现代轻奢日式茶具黑胡桃木茶台排水茶海乌金石",
        price:"589"
    },
]
//home
const redTea = [
     {
        TeaList_1:[
            {url:"https://img2.baidu.com/it/u=2147015312,3718712687&fm=253&fmt=auto&app=120&f=JPEG?w=1209&h=800"},
            {url:"https://img1.baidu.com/it/u=995836202,3621523048&fm=253&fmt=auto&app=120&f=JPEG?w=741&h=500"},
             {url:"https://img0.baidu.com/it/u=1851405937,3102695151&fm=253&fmt=auto&app=138&f=JPEG?w=764&h=500"}
        ],
        background:"红茶的历史可以追溯到16世纪，起源于中国‌福建省‌武夷山一带。当时的茶农们发现，将茶叶经过发酵和烘焙后，可以制成一种新的茶品，这种茶品具有独特的香气和口感，深受人们喜爱。随着时间的推移，红茶逐渐传播到世界各地，并成为了‌英国等国家的主要茶类之"
        ,ingredients:"红茶中的茶多酚是主要的抗氧化物质，包含儿茶素、黄酮类化合物等。这些抗氧化物质有助于抵御自由基的损害，减缓细胞老化和疾病的发展,红茶中含有多种人体必需氨基酸，对维持生理功能有关键作用,红茶中含有维生素C、B族维生素等，有助于增强免疫力"
        ,variety:"正山小种,外山小种,门红茶,滇红茶,祁门红茶,川红茶,宜红茶,湖红工夫,闽红工夫,宁红工夫,越红工夫,英红工夫,昭平红,马边功夫",
        Tasting:" 红茶的色泽应呈乌润或红褐色，具有一定的油光。这是红茶经过发酵和烘焙后的正常表现，也是优质红茶的必不可少特征,优质红茶的茶叶大小应基本均匀，这表明茶叶的采摘和加工工艺较为精细,在观察茶叶外观时，应关注茶叶中是否含有杂质，如茶梗、茶末等。优质红茶应无杂质，干净整洁"
    }
]//红茶
const whiteTea = [
      {
        TeaList_1:[
            {url:"https://img2.baidu.com/it/u=1206861079,521020018&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500"},
            {url:"https://img2.baidu.com/it/u=488187411,1916557180&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"},
             {url:"https://img0.baidu.com/it/u=4118936870,760612441&fm=253&fmt=auto&app=138&f=JPEG?w=607&h=405"}
        ],
        background:"白茶的历史可以追溯到唐代，最早在福建福鼎被发现。‌白茶的名字最早出现在唐朝陆羽的《茶经》中，陆羽记载：“永嘉县东三百里有白茶山。”陈椽教授在《茶叶通史》中指出，永嘉东三百里是海，实际上是南三百里，即福建福鼎（唐时称为长溪县），这里是白茶的原产地"
        ,ingredients:"白茶中的多酚和儿茶素等成分具有强大的抗氧化能力，能够帮助保护身体免受自由基的损害，有助于维持细胞的健康和预防疾病，白茶中的茶多酚具有抗菌特性，能够抑制多种细菌和病原体的生长，有助于预防感染性疾病"
        ,variety:"白毫银针，钟眉白毫，子陵白毫，老欧洲白茶",
        Tasting:"选购白茶前，第一步要做的是了解白茶的产地。如这款白茶，是高山产，还是平地。不同海拔的白茶，茶青品质不同，新白茶，重点看白茶是否新鲜。运用传统工艺制作好的白茶，它的外观拥有共同点——新鲜。这种新鲜，主要体现在白茶的绿色中"
    }
]//白茶
const cliffTea = [
      {
        TeaList_1:[
            {url:"https://img0.baidu.com/it/u=1066700912,1847423602&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"},
            {url:"https://img0.baidu.com/it/u=1327543523,508266114&fm=253&fmt=auto&app=120&f=JPEG?w=753&h=500"},
             {url:"https://img1.baidu.com/it/u=275445852,2768798&fm=253&fmt=auto&app=138&f=JPEG?w=730&h=487"}
        ],
        background:"武夷岩茶是中国传统名茶，是具有岩韵（岩骨花香）品质特征的乌龙茶。产于福建闽北“秀甲东南”的武夷山一带，茶树生长在岩缝之中。武夷岩茶具有绿茶之清香，红茶之甘醇，是中国乌龙茶中之极品。"
        ,ingredients:"岩茶的成分对其香气和口感有显著影响。不同产区的岩茶成分含量有所不同，导致其“岩韵”的差异。正岩产区的岩茶含有较高的半胱氨酸、茶缬氨酸、甲硫氨酸、咖啡碱和没食子儿茶素没食子酸酯等成分，这些成分赋予了岩茶丰富的层次感和“岩韵”。此外，岩茶中的挥发性成分如醇类、醛类、酯类等也对其香气有重要贡献，不同产区和品种的岩茶在这些成分的含量和比例上存在差异，从而形成了各自独特的香气特征"
        ,variety:"大红袍，铁罗汉,白鸡冠,水金龟‌,半天妖",
        Tasting:"优质岩茶的条索紧结、粗壮、匀称，色泽油润，具有鲜活感。正岩茶表面会有类似蛤蟆皮的砂粒感。如果条索松散、粗细不均，颜色暗淡无光，或有杂质，则品质可能不佳‌,优质的岩茶汤色清澈明亮，不同品种和发酵程度的岩茶汤色有所不同。轻发酵的岩茶汤色可能是浅黄色或橙黄色，发酵程度高的则是橙红色。汤色浑浊、黯淡则可能是制作工艺粗糙或保存不当‌"
    }
]//岩茶
const RockTea = [
        {
        TeaList_1:[
            {url:"https://img1.baidu.com/it/u=1170910829,420894345&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"},
            {url:"https://img2.baidu.com/it/u=42973039,3910124898&fm=253&fmt=auto&app=138&f=JPEG?w=550&h=365"},
             {url:"https://img0.baidu.com/it/u=3283624865,4005760013&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=328"}
        ],
        background:"黄茶的起源可以追溯到明代，其制作工艺被视为绿茶加工工艺的改良。由于黄茶制作过程中增加了“闷黄”工序，使得茶叶在保持鲜爽的基础上，增加了独特的醇厚和鲜甜风味,黄茶的主要产地包括湖南、安徽、四川等地。其发展史虽然不像绿茶、红茶那样广为人知，但在清代以及现代重新受到重视，成为品质优良的传统名茶之一"
        ,ingredients:"黄茶的营养成分得益于其独特的加工工艺和优质的原料，主要包括抗氧化剂，帮助对抗自由基一种特有的多酚类物质，有抗菌和抗病毒的作用为茶汤提供鲜爽口感，同时有助于放松神经"
        ,variety:"君山银针,霍山黄芽,蒙顶黄芽,沩山毛尖,北港毛尖",
        Tasting:"品鉴黄茶需要综合其外形、汤色、香气、滋味和叶底等五个方面，具体方法如下颜色呈黄中带绿或金黄色，表面有毫是上品,冲泡后，茶汤应呈现出明亮的黄色或橙黄色,闷黄工序赋予其独特的馥郁香味，不可有异味"
    }
]//黄茶
const blackTea = [
          {
        TeaList_1:[
            {url:"https://img0.baidu.com/it/u=885063646,3306713364&fm=253&fmt=auto&app=138&f=JPEG?w=706&h=500"},
            {url:"https://img2.baidu.com/it/u=125424390,3459864479&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=390"},
             {url:"https://img1.baidu.com/it/u=2321563366,695245797&fm=253&fmt=auto&app=120&f=JPEG?w=671&h=500"}
        ],
        background:"黑茶起源于中国西南地区，有近千年的历史，是最早的边销茶，因其耐储存、易运输而闻名黑茶的出现可以追溯到唐宋时期，后来成为“茶马互市”的重要贸易商品，用于与西北少数民族交换马匹和其他物资"
        ,ingredients:"发酵后部分被氧化为茶黄素和茶红素，赋予黑茶独特的醇厚风味,黑茶中富含的多糖有助于调节血糖,提神醒脑的成分，含量适中,后发酵过程中形成的微生物，有益肠道健康"
        ,variety:"安化黑茶，泾阳茯茶，云南普洱茶，四川边茶,广西六堡茶",
        Tasting:"外形应整齐、紧实，砖茶或散茶应无明显碎屑, 颜色以深褐或黑褐色为佳，表面无霉斑,冲泡后的茶汤应呈现红亮或橙红的色泽，透亮无杂质,陈年黑茶汤色通常更为浓艳"
    }
]//黑茶
const cyanTea = [
           {
        TeaList_1:[
            {url:"https://img2.baidu.com/it/u=368389001,3871816866&fm=253&fmt=auto&app=138&f=JPEG?w=805&h=500"},
            {url:"https://img0.baidu.com/it/u=4195354106,89181973&fm=253&fmt=auto&app=138&f=JPEG?w=973&h=500"},
             {url:"https://img0.baidu.com/it/u=1891038982,704878436&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"}
        ],
        background:"青茶的起源可以追溯到明代中期。福建武夷山地区被认为是乌龙茶的发源地，随后制作技艺传入广东和台湾地区。因青茶的制作需要复杂的萎凋、摇青和轻发酵等工艺，其发展标志着茶叶制作技艺的高度成熟。"
        ,ingredients:"具有抗氧化和抗炎作用,提神醒脑，改善注意力,赋予乌龙茶独特的花果香，同时有助于减肥"
        ,variety:"武夷岩茶，安溪铁观音，凤凰单丛，冻顶乌龙,台湾高山茶",
        Tasting:"茶叶条索紧结，色泽油润,冲泡后茶汤应呈现金黄或蜜黄色，清澈明亮,具有浓郁的花果香或兰花香,入口鲜爽甘醇，层次感强，回甘明显,冲泡后的叶底应柔嫩，呈黄绿或黄褐色"
    }
]//青茶
const greenTea = [
               {
        TeaList_1:[
            {url:"https://img2.baidu.com/it/u=1482154847,1763375583&fm=253&fmt=auto&app=138&f=JPEG?w=860&h=500"},
            {url:"https://img1.baidu.com/it/u=73342314,2892516128&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=324"},
             {url:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00026-3991.jpg"}
        ],
        background:"绿茶是中国最早出现的茶类，历史可追溯到汉代。唐代《茶经》中已提及绿茶制作方法。明代的炒青工艺普及，使绿茶制作技艺进一步完善。。"
        ,ingredients:"抗氧化能力强，有助于清除自由基,增强免疫力,提神解疲,提供鲜爽口感，同时有助于放松神经"
        ,variety:"西湖龙井，黄山毛峰，碧螺春，信阳毛尖,六安瓜片",
        Tasting:"茶叶芽头肥壮，色泽翠绿或黄绿,茶汤应清澈明亮，呈黄绿色,鲜嫩或清香，无异味,入口鲜爽醇厚，有明显的回甘,芽叶柔嫩匀整"
    }
]//绿茶
const puerTea = [
      {
        TeaList_1:[
            {url:"https://q6.itc.cn/images01/20240313/6c0c973c57aa41e0b3d0b0ed25d9b93e.jpeg"},
            {url:"https://img2.baidu.com/it/u=809306948,614436724&fm=253&fmt=auto&app=120&f=JPEG?w=1201&h=800"},
             {url:"https://img2.baidu.com/it/u=823938195,71917573&fm=253&fmt=auto&app=138&f=JPEG?w=569&h=361"}
        ],
        background:"普洱茶的历史可追溯至唐代。因茶马古道的贸易兴盛，普洱茶成为边疆少数民族和内地居民的重要商品"
        ,ingredients:"强抗氧化性,熟茶中特有成分，促进新陈代谢,发酵过程中形成，促进肠道健康,有效分解体内脂肪,对糖尿病有辅助作用"
        ,variety:"生茶，熟茶",
        Tasting:"条索肥壮，色泽乌润,生茶汤色黄绿，熟茶汤色红浓,陈香显著，无霉味,生茶鲜爽回甘，熟茶醇滑甘甜"
    }
]//普洱茶
// course
const courseBanner = [
    {
        id:2,
        url:"https://img2.baidu.com/it/u=3284384509,2181697183&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=800"
    },
    {
        id:3,
        url:"https://img1.baidu.com/it/u=2057270161,971654607&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800"
    }
]
const Newlessons = [
         {text:"大观茶论",id:2,day:"10月16日",price:"30", content:"这是由古代皇帝亲笔撰写的茶书，不仅体现了宋代皇家茶艺的高度，也是珍贵的历史文献。"},
         {text:"茶人茶话",id:4,day:"10月17日",price:"50",content:"通过讲述茶人的故事与茶话，呈现出一幅幅生动的茶人画卷，展现了茶文化的多元面向。"},
         {text:"中国茶知识千题解",id:1,day:"10月18日",price:"20",content:"被誉为茶叶界的“十万个为什么”，覆盖了茶叶基础知识、历史文化、科学原理等多个领域"},
         {text:"茶酒共和国",id:3,day:"10月19日",price:"40",content:"三位作者分别从各自的文化视角出发，探讨茶与酒这两种传统文化元素如何交织并影响着中国人的生活方式和精神追求"},
]
const Free = [
    {text:"中国古代茶书集成",id:2,day:"8月26日",price:"0.03", content:"该书汇集了古代众多茶学经典，详尽展示了中国古代茶文化的源流与发展，是研究古代茶文化不可或缺的重要资料集"},
    {text:"茶趣",id:4,day:"8月28日",price:"0.05",content:"《茶趣》深入浅出地讲述了茶与生活的紧密联系，探讨茶带给人们的乐趣及其蕴含的哲学意味"},
    {text:"茶叶全书",id:1,day:"8月25日",price:"0.02",content:"中国茶文化是中国制茶、饮茶的文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，少说也有4700多年了。直到现在，汉族还有民以茶代礼的风俗"},
    {text:"茶道的开始",id:3,day:"8月27日",price:"0.04",content:"以《茶经》为基础，结合当代解读，帮助读者深入理解茶道精神的源头"},
]
const courseMore = [
    {text:"大观茶论",id:2,day:"10月16日",price:"30", content:"这是由古代皇帝亲笔撰写的茶书，不仅体现了宋代皇家茶艺的高度，也是珍贵的历史文献。"},
    {text:"茶人茶话",id:4,day:"10月17日",price:"50",content:"通过讲述茶人的故事与茶话，呈现出一幅幅生动的茶人画卷，展现了茶文化的多元面向。"},
    {text:"中国茶知识千题解",id:1,day:"10月18日",price:"20",content:"被誉为茶叶界的“十万个为什么”，覆盖了茶叶基础知识、历史文化、科学原理等多个领域"},
    {text:"茶酒共和国",id:3,day:"10月19日",price:"40",content:"三位作者分别从各自的文化视角出发，探讨茶与酒这两种传统文化元素如何交织并影响着中国人的生活方式和精神追求"},
    {text:"中国古代茶书集成",id:2,day:"8月26日",price:"0.03", content:"该书汇集了古代众多茶学经典，详尽展示了中国古代茶文化的源流与发展，是研究古代茶文化不可或缺的重要资料集"},
    {text:"茶趣",id:4,day:"8月28日",price:"0.05",content:"《茶趣》深入浅出地讲述了茶与生活的紧密联系，探讨茶带给人们的乐趣及其蕴含的哲学意味"},
    {text:"茶叶全书",id:1,day:"8月25日",price:"0.02",content:"中国茶文化是中国制茶、饮茶的文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，少说也有4700多年了。直到现在，汉族还有民以茶代礼的风俗"},
    {text:"茶道的开始",id:3,day:"8月27日",price:"0.04",content:"以《茶经》为基础，结合当代解读，帮助读者深入理解茶道精神的源头"},
    {text:"中国茶文化简史",id:1,day:"8月25日",price:"0.02",
        content:"中国茶文化是中国制茶、饮茶的文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，少说也有4700多年了。直到现在，汉族还有民以茶代礼的风俗"},
         {text:"茶经",id:2,day:"8月26日",price:"0.03",
        content:"《茶经》是唐代‌陆羽创作的茶学专著，是中国乃至世界现存最早、最完整、最全面的茶叶专著，被誉为茶叶百科全书。全书分为上中下三卷，共十章节，系统地总结了唐代中期以前茶叶发展、生产、加工、品饮等方面的情形，并深入发掘饮茶的文化内涵，将饮茶从日常生活习惯提升到了艺术和审美的层次。"},
         {text:"茶思想研讨",id:3,day:"8月27日",price:"0.04",
        content:"茶虽简单，却蕴含无限韵味，提醒我们要珍视眼前的每一刻，活在当下，用心去体验生活中的点点滴滴，发现平凡中的美好，感恩生命赐予的一切"},
         {text:"东西方艺术欣赏",id:4,day:"8月28日",price:"0.05",
        content:"西方艺术家学习借鉴东方艺术的两个高潮是印象派和超现实主义，区别在于印象派关注东方艺术的符号和元素，超现实主义则更关注东方精神和艺术技法"},
         {text:"泡茶技艺初级",id:5,day:"9月5日",price:"0.06",
        content:"茶道，就是品赏茶的美感之道。茶道是一种烹茶饮茶的生活艺术，一种以茶修身的生活方式"},
         {text:"初级实践",id:6,day:"9月6日",price:"0.07",
        content:"茶的泡法 泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量,这样茶的香味、色泽、滋味才会得以充分的发挥"},
         {text:"中级实践",id:7,day:"9月12日",price:"0.08",
        content:"泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量"},
         {text:"高级实践",id:8,day:"9月21日",price:"0.09",
        content:"泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量"}

]

app.use(cors())
app.use(bodyParser.json());
// member
app.get('/api/member/falseMain', (req, res) => {

    res.status(200).json(commodity)

})
// course
app.get('/api/course/banner',(req,res)=>{
    res.status(200).json(courseBanner)
})
app.get('/api/course/Newlessons',(req,res)=>{

    res.status(200).json(Newlessons)

})
app.get('/api/course/Free',(req,res)=>{

    res.status(200).json(Free)

})
app.get('/api/course/courseMore',(req,res)=>{

    res.status(200).json(courseMore)

})
//home
app.get('/api/home/redTeg',(req,res)=>{

    res.status(200).json(redTea)

})
app.get('/api/home/whiteTea',(req,res)=>{

    res.status(200).json(whiteTea)

})
app.get('/api/home/cliffTea',(req,res)=>{

    res.status(200).json(cliffTea)

})
app.get('/api/home/RockTea',(req,res)=>{

    res.status(200).json(RockTea)

})
app.get('/api/home/blackTea',(req,res)=>{

    res.status(200).json(blackTea)

})
app.get('/api/home/cyanTea',(req,res)=>{

    res.status(200).json(cyanTea)

})
app.get('/api/home/greenTea',(req,res)=>{

    res.status(200).json(greenTea)

})
app.get('/api/home/puerTea',(req,res)=>{

    res.status(200).json(puerTea)

})
// MySQL
app.get('/api/mysql/hot',(req,res)=>{
    const sql = 'SELECT * FROM hot';
    db.query(sql, (err, result) => {
        if (err) throw err;
         res.status(200).json(result)
    })
})
app.get('/api/mysql/hot/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM hot WHERE id=?';
    db.query(sql, [id],(err, result) => {
          res.status(200).json(result)
    })
})
app.get('/api/mysql/comment',(req,res)=>{
     const sql = 'SELECT * FROM Comment';
     db.query(sql , (err, result) => {
         if (err) throw err;
         res.status(200).json(result)
         console.log(result)
     })
})
app.get('/api/mysql/Forward',(req,res)=>{
     const sql = 'SELECT * FROM Forward';
     db.query(sql , (err, result) => {
         if (err) throw err;
         res.status(200).json(result)
         console.log(result)
     })
})
app.get('/api/mysql/efficacy/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM efficacy where id = ?';
    db.query(sql , id, (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/concern',(req,res)=>{
    const sql = 'SELECT * FROM concern';
    db.query(sql , (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/fans',(req,res)=>{
    const sql = 'SELECT * FROM fans';
    db.query(sql , (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/historys/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM historys where id=?';
    db.query(sql , [id],(err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/tea/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM tea where id=?';
    db.query(sql , [id],(err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/RECOMMAND',(req,res)=>{
    const sql = 'SELECT * FROM RECOMMAND';
    db.query(sql , (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/RECOMMAND/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM RECOMMAND where id=?';
    db.query(sql , id, (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/memberHot',(req,res)=>{
    const sql = 'SELECT * FROM memberHot';
    db.query(sql , (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/memberHot/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM memberHot where id=?';
    db.query(sql , id, (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.post('/api/cart/add', (req, res) => {
    const { url,text,price } = req.body;

    const sql = 'INSERT INTO cart (url,text,price) VALUES (?, ?, ?)';
    db.query(sql, [url,text,price], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding to cart');
        }
        res.status(200).send({ message: 'Item added to cart', cartId: result.insertId });
    });
});
app.get('/api/mysql/cart',(req,res)=>{
  const sql = 'select * from cart';
  db.query(sql , (err, result) => {
      if (err) throw err;
      res.status(200).json(result)
  })
})
app.delete('/api/mysql/cart/:id',(req,res)=>{
    const id = parseInt(req.params.id)
     const sql = 'DELETE FROM cart WHERE id=?';

    db.query(sql , id,(err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/coursemain',(req,res)=>{
    const sql = 'SELECT * FROM coursemain';
    db.query(sql , (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.get('/api/mysql/purchase/:id',(req, res)=>{
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM purchase where id=?';
    db.query(sql , id,(err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
})
app.listen(8080, () => console.log("http://127.0.0.1:8080"))
