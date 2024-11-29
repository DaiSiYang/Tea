create table RECOMMAND (
    id int primary key auto_increment,
    url varchar(200) not null ,
    text varchar(200) not null ,
    price int not null
);
insert into RECOMMAND (url, text, price) values
(
'https://pic9.997788.com/_pic_auction/00/18/79/23/18792384.jpg',
'养生名具 - 紫砂壶',
3500
),
(
'https://img1.baidu.com/it/u=3884187836,2700566469&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'保利拍卖 - 夜壶',
3600
),
(
'https://img2.baidu.com/it/u=2081312693,4165363277&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'不锈钢 - 铁壶v',
1600
),
(
'https://img1.baidu.com/it/u=120694273,3908392362&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'抖音 - 青花瓷',
2300
),
(
'https://img0.baidu.com/it/u=4153621653,994187470&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'拍卖 - 紫砂壶',
5400
),
(
'https://img1.baidu.com/it/u=3059576640,2672421438&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
'拍卖 - 紫砂壶',
5300
),
(
'https://pic.taohuren.com/images/article/2024/0812/481945312badde76.png',
'养生名具 - 紫砂壶',
3300
),
(
'https://pic9.997788.com/_pic_auction/00/19/73/50/19735057.jpg',
'养生名具 - 紫砂壶',
3200
),
(
'https://img0.baidu.com/it/u=639260551,2630314882&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
'养生名具 - 紫砂壶',
1300
);

create table memberHot(
        id int primary key auto_increment,
    url varchar(200) not null ,
    text varchar(200) not null ,
    price int not null
);
insert into memberHot (url, text, price) values
(
'https://pic9.997788.com/_pic_auction/00/18/79/23/18792384.jpg',
'养生名具 - 紫砂壶',
3500
),
(
'https://img1.baidu.com/it/u=3884187836,2700566469&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'保利拍卖 - 夜壶',
3600
),
(
'https://img2.baidu.com/it/u=2081312693,4165363277&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'不锈钢 - 铁壶',
1600
),
(
'https://img1.baidu.com/it/u=120694273,3908392362&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'抖音 - 青花瓷',
2300
),
(
'https://img0.baidu.com/it/u=4153621653,994187470&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
'拍卖 - 紫砂壶',
5400
),
(
'https://img1.baidu.com/it/u=3059576640,2672421438&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
'拍卖 - 紫砂壶',
5300
);

create table cart(
    id int primary key auto_increment,
    url varchar(555) not null ,
    title varchar(555) not null ,
    price int not null
);
delete  from cart where id = 1;