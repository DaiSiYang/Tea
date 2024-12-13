create table courseMain(
    id int primary key auto_increment,
    text varchar(255) not null ,
    price int not null ,
    day varchar(255) not null ,
    content varchar(555) not null
);
insert into courseMain(text, price, day, content)
values ('中国茶文化简史', 1, '8月25日',
        '中国茶文化是中国制茶、饮茶的文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，少说也有4700多年了。直到现在，汉族还有民以茶代礼的风俗'),
       ('茶经', 1, '8月26日',
        '《茶经》是唐代‌陆羽创作的茶学专著，是中国乃至世界现存最早、最完整、最全面的茶叶专著，被誉为茶叶百科全书。全书分为上中下三卷，共十章节，系统地总结了唐代中期以前茶叶发展、生产、加工、品饮等方面的情形，并深入发掘饮茶的文化内涵，将饮茶从日常生活习惯提升到了艺术和审美的层次。'),
       ('茶思想研讨', 1, '8月27日',
        '茶虽简单，却蕴含无限韵味，提醒我们要珍视眼前的每一刻，活在当下，用心去体验生活中的点点滴滴，发现平凡中的美好，感恩生命赐予的一切'),
       ('东西方艺术欣赏', 1, '8月28日',
        '西方艺术家学习借鉴东方艺术的两个高潮是印象派和超现实主义，区别在于印象派关注东方艺术的符号和元素，超现实主义则更关注东方精神和艺术技法'),
       ('泡茶技艺初级', 1, '9月5日',
        '茶道，就是品赏茶的美感之道。茶道是一种烹茶饮茶的生活艺术，一种以茶修身的生活方式'),
       ('初级实践', 1, '9月6日',
        '茶的泡法 泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量,这样茶的香味、色泽、滋味才会得以充分的发挥'),
       ('中级实践', 1, '9月12日', '泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量'),
       ('高级实践', 1, '9月21日', '泡茶时应根据不同茶类的特点来调整水的温度、浸润的时间和茶叶的用量');

create table purchase
(
    id           int primary key auto_increment,
    image       text, # 图片
    duration     varchar(255), #课时
    studentCount int           # 学习人数
);
insert into purchase(image, duration, studentCount)
values ('https://tse2-mm.cn.bing.net/th/id/OIP-C.xa5VGwVPww-fBQ24EveDSgHaE7?w=248&h=180&c=7&r=0&o=5&pid=1.7', '8课时', 100),
       ('https://tse4-mm.cn.bing.net/th/id/OIP-C.w6D23dB95VIICfgfCoVGRAHaE7?w=266&h=180&c=7&r=0&o=5&pid=1.7','11课时',120),
       ('https://tse4-mm.cn.bing.net/th/id/OIP-C.oT-f8OZ3yGffPMCwuO7jVQHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7','7课时',520),
       ('https://tse2-mm.cn.bing.net/th/id/OIP-C.pNMRvGToM2aL_Sl6-DYnmgHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7','14课时',350),
       ('https://tse4-mm.cn.bing.net/th/id/OIP-C.H7iIYzQmb5KmKbGnhJ92VwHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7','45课时',1250),
       ('https://tse4-mm.cn.bing.net/th/id/OIP-C.G_eYPo2NIrwppXaI8cZdlgHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7','10课时',620),
       ('https://tse2-mm.cn.bing.net/th/id/OIP-C.NVoA7pfHPB7sSnnLyawsogHaEk?w=289&h=180&c=7&r=0&o=5&pid=1.7','11课时',526),
       ('https://tse2-mm.cn.bing.net/th/id/OIP-C.LD3V6ix7ayLtA9Ea8A_KtgHaIj?w=122&h=180&c=7&r=0&o=5&pid=1.77','11课时',1520);