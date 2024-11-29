# 关注
create table concern (
    # id
    id int primary key auto_increment,
    # 头像
    avatarUrl varchar(255) not null,
    # 昵称
    name varchar(45) not null,
    # 时间
    time varchar(45) not null
);
insert into concern(avatarUrl,name,time) values
(
 'https://tse1-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'小李',
 '1小时前在线'
),
(
 'https://tse3-mm.cn.bing.net/th/id/OIP-C.y6rdSCGpxbfeb8Rd1CpSuwAAAA?w=209&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'小妙',
 '10分钟前在线'
),
(
 'https://tse2-mm.cn.bing.net/th/id/OIP-C.vSbfZDamI_Nvyt-0pVFnswAAAA?w=218&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'小婷',
 '30分钟前在线'
),
(
 'https://tse1-mm.cn.bing.net/th/id/OIP-C.-r8TdWtF72EheUNjt_uKvwAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'小王',
 '30分钟前在线'
),
(
 'https://tse4-mm.cn.bing.net/th/id/OIP-C.TU21XU7j1uvvOqfkpM-ABgAAAA?w=185&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'相思故',
 '10分钟前在线'
),
(
 'https://tse4-mm.cn.bing.net/th/id/OIP-C.Pm1czWZi-tFKDEWWIlE-9AAAAA?w=218&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'寄信给风',
 '2小时前在线'
),
(
 'https://tse1-mm.cn.bing.net/th/id/OIP-C.idk-iv7XuEblZlCDnCGorQAAAA?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'不眠日记',
 '3小时前在线'
),
(
 'https://tse1-mm.cn.bing.net/th/id/OIP-C.nvsOfKKNoenYbXS79CB9SAAAAA?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'岁月不休',
 '10分钟前在线'
),
(
 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P1_umg0GlbW_ibg8-oKfKwAAAA?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'孤芳又自赏',
 '1小时前在线'
),
(
 'https://tse2-mm.cn.bing.net/th/id/OIP-C.BBSXQfHv0uIe9TCzvm5nuQAAAA?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'思念彼岸',
 '30分钟前在线'
);

create table fans(
    # id
    id int primary key auto_increment,
    # 头像
    avatarUrl varchar(255) not null,
    # 昵称
    name varchar(45) not null,
    # 时间
    time varchar(45) not null
);
insert into fans(avatarUrl,name,time) values
(
 'https://tse1-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'小李',
 '1小时前在线'
),
(
 'https://tse3-mm.cn.bing.net/th/id/OIP-C.y6rdSCGpxbfeb8Rd1CpSuwAAAA?w=209&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'小妙',
 '10分钟前在线'
),
(
 'https://tse2-mm.cn.bing.net/th/id/OIP-C.vSbfZDamI_Nvyt-0pVFnswAAAA?w=218&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7',
'小婷',
 '30分钟前在线'
);
