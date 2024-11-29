# 推荐

create table Hot (
    # id
    id int primary key auto_increment,
    # 头像
    avatarUrl varchar(255) not null,
    # 昵称
    name varchar(45) not null,
    # 职位
    actor varchar(45) not null,
    # 内容
    text varchar(255) not null,
    # 图一
    image1 varchar(255) not null,
    # 图二
    image2 varchar(255) not null,
    #转发
    forward int not null,
    # 点赞
    Thumbs int not null
);
# 头像 昵称 职位 内容 图一 图二 转发 点赞
insert into Hot(avatarUrl,name,actor,text,image1,image2,forward,Thumbs) values
(
'https://img2.baidu.com/it/u=1090452517,2487311686&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1732381200&t=0718a97debe3c3a6a9a46a5e2ef800c0',
 '王志涛',
 '导演',
 '茶农直供云南临沧2022年、2023年纯料普洱春茶，优质的茶品，口粮的价格，存量有限。喜欢普洱生茶的朋友，欢迎订购',
 'http://t14.baidu.com/it/u=24302809,193799096&fm=224&app=112&f=JPEG?w=500&h=500',
 'https://img2.baidu.com/it/u=560609558,2813077403&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
 100,
 200
),
(
'https://img2.baidu.com/it/u=3419433046,873673719&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=450',
 '沐子',
 '路人',
 '想进茶友群的关注我',
 'https://img0.baidu.com/it/u=3403058578,1903085353&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=774',
 'https://img1.baidu.com/it/u=977717653,1274671968&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
 267,
 123
)
,
(
'https://img1.baidu.com/it/u=3186817418,799221380&fm=253&fmt=auto&app=138&f=JPEG?w=427&h=427',
 '久而安之',
 '路人',
 '谁知道贡眉和寿眉的区别？杵荼茶业买的都好便宜？质量靠谱吗？',
 'https://img1.baidu.com/it/u=3230542969,147208211&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=590',
 'https://img2.baidu.com/it/u=855339470,1564350715&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
 117,
 23
)
,
(
'https://img1.baidu.com/it/u=3186817418,799221380&fm=253&fmt=auto&app=138&f=JPEG?w=427&h=427',
 '罂粟花伤',
 '路人',
 '雅安名山蒙顶山茶文化旅游节有什么好吃的？',
 'https://img0.baidu.com/it/u=2472692441,2419638180&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 'https://img1.baidu.com/it/u=2560819536,1629369098&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
 334,
 123
)
,
(
'https://img0.baidu.com/it/u=2302400309,3335535334&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '萝莉通缉犯',
 '路人',
 '青山碧水，微风拂面。历史在青山下，也在碧水中。。。',
 'https://img0.baidu.com/it/u=93538477,1379814373&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300',
 'http://t13.baidu.com/it/u=1537880977,2321767297&fm=224&app=112&f=JPEG?w=500&h=500&s=25567E87414286E63AD1FC0C0300B081',
 17,
 10
)
,
(
'https://img1.baidu.com/it/u=3719305757,1772801521&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
 '和尚洗头用飘柔',
 '路人',
 '人生看不惯的东西太多，看清、看懂，全是自找伤心。',
 'https://img2.baidu.com/it/u=4105681700,2053728060&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
 'https://img0.baidu.com/it/u=45114679,796232214&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300',
 90,
 34
)
,
(
'https://img2.baidu.com/it/u=3381283045,2671640901&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '薄凉之人',
 '路人',
 '谁知道贡眉和寿眉的区别？杵荼茶业买的都好便宜？质量靠谱吗？',
 'https://img0.baidu.com/it/u=122053997,2713445636&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
 'https://img0.baidu.com/it/u=2054360055,3913790755&fm=253&fmt=auto&app=138&f=JPEG?w=778&h=500',
 230,
 78
)
,
(
'https://img0.baidu.com/it/u=2056084278,2654493898&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '初夏',
 '路人',
 '缘聚了，缘散了，随顺就好。',
 'https://img0.baidu.com/it/u=2353740174,3847273431&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
 'https://img2.baidu.com/it/u=302123655,2146015235&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
 430,
 258
)
,
(
'https://img1.baidu.com/it/u=2928381678,839789461&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '微凉',
 '路人',
 '冬天喝茶以红茶为好。红茶甘温，可养人体阳气',
 'http://t15.baidu.com/it/u=2700874290,1757186689&fm=224&app=112&f=JPEG?w=500&h=500',
 'http://t13.baidu.com/it/u=2181929879,2309572&fm=224&app=112&f=JPEG?w=500&h=500',
 231,
 90
)
,
(
'https://img2.baidu.com/it/u=2601935451,895459905&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '激萌美少女',
 '路人',
 '得到了，失去了，知足就好。',
 'http://t15.baidu.com/it/u=3325431313,2507180741&fm=224&app=112&f=JPEG?w=500&h=500&s=6F381BC2A0033AE63D18941B0300E0D0',
 'https://img0.baidu.com/it/u=3372304922,1431929374&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
 31,
 133
);

# 推荐 评论
create table Comment (
    # id
    id int primary key auto_increment,
    # 头像
    avatarUrl varchar(255) not null,
    # 昵称
    name varchar(45) not null,
    # 内容
    text varchar(255) not null,
    # 评论时间
    time varchar(45) not null
);

insert into Comment(avatarUrl,name,text,time) values
(
 'https://img2.baidu.com/it/u=3029837478,1144772205&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '小李',
 '这个茶叶超级无敌好喝',
 '2023-04-01 07：27'
),
(
 'https://img0.baidu.com/it/u=2419060532,3565832687&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
 '我就爱说实话',
 '这个小程序制作人真的帅',
 '2023-04-01 08：07'
),
(
 'https://img1.baidu.com/it/u=2263910431,3439099047&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
 '小王',
 '+1',
 '2023-04-01 09：23'
),
(
 'https://img2.baidu.com/it/u=753554730,338496702&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
 '小孙',
 '有群吗',
 '2023-04-01 10：47'
),
(
 'https://img1.baidu.com/it/u=2414179785,319919069&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
 '小徐',
 '我买过，这个茶叶很好喝',
 '2023-04-01 11：10'
),
(
 'https://img0.baidu.com/it/u=2424567408,950570388&fm=253&fmt=auto&app=120&f=JPEG?w=504&h=500',
 '小方',
 '哈哈哈',
 '2023-04-01 11：57'
),
(
 'https://img0.baidu.com/it/u=1690076377,4003691410&fm=253&fmt=auto&app=120&f=JPEG?w=507&h=500',
 '小洪',
 '我也要买，有链接吗',
 '2023-04-01 14：17'
);

# 转发 评论
create table Forward (
    # id
    id int primary key auto_increment,
    # 头像
    avatarUrl varchar(255) not null,
    # 昵称
    name varchar(45) not null,
    # 内容
    text varchar(255) not null,
    # 转发时间
    time varchar(45) not null
);
insert into Forward(avatarUrl,name,text,time) values
(
 'https://img2.baidu.com/it/u=3967530751,3358765104&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '冰凌蔷薇女孩',
 '转发微信',
 '2023-04-01 07：27'
),
(
 'https://img0.baidu.com/it/u=3538641254,1544988329&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '温柔小仙女',
 '转发QQ',
 '2023-04-01 08：07'
),
(
 'https://img1.baidu.com/it/u=3972386340,1277570720&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '旋舞龙魂',
 '转发微博',
 '2023-04-01 09：23'
),
(
 'https://img2.baidu.com/it/u=1550243853,744813502&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '宁缺勿滥',
 '转发微信',
 '2023-04-01 10：47'
),
(
 'https://img2.baidu.com/it/u=414435471,982308763&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
 '残雪',
 '转发微信',
 '2023-04-01 11：10'
),
(
 'https://img2.baidu.com/it/u=2098442959,1308813749&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
 '梦空',
 '转发QQ',
 '2023-04-01 11：57'
),
(
 'https://img1.baidu.com/it/u=1760079186,3349523763&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
 '紫剑雪枫',
 '转发微信',
 '2023-04-01 14：17'
);
