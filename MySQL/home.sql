create table efficacy(
    id int primary key auto_increment,
    title varchar(255) not null,
    text varchar(1000) not null
);
insert into efficacy(title,text) values
(
 '白茶',
 '白茶是我国传统名茶之一，属于微发酵茶。白茶采摘后不做杀青或揉捻等处理，只是进行晾晒或文火干燥。外形芽毫完整，且满身披毫，汤色黄绿清澈，滋味清淡回甘。1、平衡血糖：白茶中富含人体必需的活性酶，长期饮用可提高体内酯酶活性，加速脂肪分解和代谢。还能有效控制胰岛素的分泌量，减少糖分含量的吸收，并能促进多余的糖分排出，有助于调节血糖，保持血糖平衡'
),
(
 '黑茶',
 '黑茶的功效一般有调节血糖、消除烦渴、调节血压、美容养颜、清醒头脑等，建议适量饮用。具体分析如下调节血糖：黑茶中富含的茶多糖是一种具有较强的控糖作用的物质，因此黑茶具有调节血糖的作用，糖尿病患者通常可以适量饮用。黑茶性质寒凉，甘寒入心肺，清热而生津。因此饮用黑茶通常具有除烦止渴，解腻清神的功效。黑茶中所含的茶氨酸通常可通过激活多巴胺能神经元发挥降压作用，同时其所含的咖啡因、儿茶素等物质，一般可起到舒张血管的作用，从而达到降压的目的'
),
(
 '红茶',
 '红茶是一种经过全发酵（发酵程度大于80％）制成的茶，以适宜制作本品的茶树新芽叶为原料，经揉捻、发酵、干燥等典型工艺精制而成。红茶内含多种维生素，叶片及汤呈红色，具有提神消疲、生津清热、利尿等的功效。红茶中的咖啡碱可刺激大脑皮质兴奋神经中枢，进而提神、使思维反应更敏锐、记忆力增强；红茶也对血管系统和心脏具有兴奋作用，加快血液循环以利于新陈代谢。同时红茶可以促进发汗和利尿，达到减轻疲劳的效果'
),
(
 '岩茶',
 '岩茶是我国的一种名茶，一般产于福建武夷山的岩缝中，故名岩茶。岩茶是一种半发酵的茶，茶叶的香气由清香转化成了果香，以“岩骨花香”的独特岩韵著称。岩茶不仅包括的品种多，还具有独特的保健功效，是保健价值较高的一种茶类，具有保护肠胃、保护牙齿、保护眼睛的功效'
),
(
 '普洱茶',
 '普洱茶有减肥降脂、养胃、降血压、抗衰老、排毒等辅助作用和功效。长期饮用普洱茶对瘦身减重有一定的辅助效果。饮用普洱茶可以一定程度的使人的血管舒张、血压下降、心率减慢等生理效应，所以对高血压和脑动脉硬化人群有良好的辅助治疗作用。适当饮用熟普洱茶可以暖胃。普洱茶具有很高的药用价值，在适当浓度和温度下，饮用平和的普洱茶不会刺激胃。长期饮用普洱茶可以滋养和保护胃'
);

create table historys(
    id int primary key auto_increment,
    title varchar(255) not null,
    time varchar(255) not null,
    p_1 varchar(255) not null,
    subtitle_1 varchar(255) not null,
    p_2 varchar(255) not null,
    subtitle_2 varchar(255) not null,
    p_3 varchar(255) not null,
    subtitle_3 varchar(255) not null,
    p_4 varchar(255) not null,
    img varchar(555) not null
);
insert into historys(title,time,p_1,subtitle_1,p_2,subtitle_2,p_3,subtitle_3,p_4,img) values
(
'唐代茶文化',
 '2023/11/1 15:80 爱喝茶的帅哥 7.0k阅读',
 ' 唐代是中国茶文化发展的重要时期，被称为“茶文化的奠基时代”。茶在唐代不仅作为日常饮品，还被赋予了更深的文化和礼仪内涵。',
 '饮茶方式：',
 ' 唐代盛行煮茶法，将茶饼碾成粉末后与调料一起煮沸。陆羽的《茶经》详细记载了茶的种植、制作和饮用方式，为后世茶文化奠定了理论基础。',
 '茶文化盛行：',
 '饮茶在唐代由宫廷逐渐传播至民间，成为士人文雅生活的一部分。文人雅士常以茶会友，吟诗作赋，如白居易的“闲吟四句偈，静对一杯茶”。茶逐渐与书法、绘画等艺术相结合，成为精神修养的一部分。',
 '茶道礼仪：',
 '茶道在唐代萌芽，饮茶礼仪逐步完善，讲究水质、茶具和环境的优雅，体现了唐代人对生活美学的追求。
唐代茶文化的繁荣使茶成为国饮，同时也开启了茶与文化艺术深度融合的先河，为后世茶文化的发展奠定了基础。',
 'https://img0.baidu.com/it/u=975807847,2884719699&fm=253&fmt=auto&app=120&f=JPEG?w=797&h=415'
 ),
(
'宋代茶文化',
 '2023/12/1 10:10 爱喝茶的帅哥 3.2k阅读',
 ' 宋代是中国茶文化的黄金时代，以“斗茶”和“点茶”闻名，茶文化达到空前繁荣',
 '饮茶方式：',
 ' 宋代流行点茶法，将茶粉放入茶盏中，用茶筅搅拌出细腻的泡沫。这种方式不仅是一种饮茶技巧，更是一种观赏艺术',
 '斗茶之风：',
 '斗茶是宋代盛行的风尚，文人雅士通过比试点茶技艺来评判茶的质量、泡沫的均匀度以及茶艺水平。这种竞赛极大地推动了茶文化的传播和发展。',
 '文化内涵：',
 '饮茶在宋代成为一种精神享受，与琴棋书画并列为文人修养的重要内容。宋徽宗赵佶撰写的《大观茶论》进一步推动了茶文化的发展，将饮茶与艺术和哲学紧密结合。宋代茶文化在技艺、艺术和精神内涵方面均达到巅峰，是茶文化史上的一座高峰。',
 'https://img2.baidu.com/it/u=767385021,4206968273&fm=253&fmt=auto&app=138&f=JPEG?w=1067&h=800'
 )
,
(
'元代茶文化',
 '2024/1/1 12:14 爱喝茶的帅哥 9.2k阅读',
 ' 元代是中国茶文化的重要发展时期，茶文化在多民族融合的背景下有了新的特征',
 '饮茶方式：',
 ' 元代饮茶方式从宋代的点茶逐渐过渡到散茶泡饮法，这种更简便的方式适应了蒙古族游牧文化的特点，同时也为明代的泡茶法奠定了基础。',
 '茶与政治文化：',
 '茶在元代不仅是一种生活饮品，也与政治礼仪紧密结合。朝廷将茶作为贡品和外交礼物，加强了中央对地方的控制，同时推动了茶文化的传播。',
 '多民族融合：',
 '元代茶文化融合了蒙古族、汉族以及其他少数民族的传统习俗，形成了独具特色的饮茶风尚。例如，蒙古族偏爱奶茶，将茶与奶制品结合，这种饮茶方式至今仍在草原地区流行。',
 'https://img2.baidu.com/it/u=905537119,3127971710&fm=253&fmt=auto?w=954&h=564'
 ),
(
'明代茶文化',
 '2024/3/1 1:45 爱喝茶的帅哥 4.3k阅读',
 '明代茶文化发生了重要转变，奠定了现代茶文化的基础，泡茶法逐渐取代了点茶法，茶叶形态也由饼茶向散茶转变',
 '饮茶方式：',
 '明代朱元璋废除团茶改用散茶，泡茶法逐渐成为主流。这种方式更为便捷，减少了茶制作和饮用的复杂工序。',
 '茶书与理论：',
 '明代的《茶谱》《茶说》等茶书不断涌现，系统地总结了茶叶种植、制作和饮用的经验，标志着茶文化理论体系的进一步完善。',
 '文人茶文化：',
 '明代文人以茶为媒，常以茶会友，诗茶唱和。文人饮茶更注重品味生活、修身养性，与书画艺术紧密结合，使茶成为文化雅集中的重要元素。',
 'https://img2.baidu.com/it/u=2715229597,3073956505&fm=253&fmt=auto?w=1200&h=800'
 ),
(
'清代茶文化',
 '2024/11/11 16:24 爱喝茶的帅哥 4.7k阅读',
 '清代茶文化延续了明代的泡茶传统，同时注入了新的社会文化特质，茶文化在这一时期进一步普及',
 '饮茶方式：',
 '清代饮茶以散茶冲泡为主，并开始注重不同茶叶的独特风味。乌龙茶和普洱茶等新茶种在清代发展壮大，丰富了茶文化的内涵。',
 '茶馆文化的兴起：',
 '茶馆在清代迅速发展，成为重要的社交场所。人们不仅在茶馆品茗，还谈天论事、交流思想，使茶馆成为文化传播和社会交流的中心。',
 '茶叶出口与国际化：',
 '清代是中国茶叶出口的重要时期，茶叶通过海上丝绸之路销往欧洲、美洲等地，对世界茶文化的传播产生了深远影响。清代茶叶贸易的繁荣推动了全球对中国茶文化的认知。清代的茶文化实现了从宫廷到民间、从国内到国际的全面普及，奠定了中国作为世界茶文化中心的地位。',
 'https://img1.baidu.com/it/u=87652788,2844189426&fm=253&fmt=auto&app=138&f=JPEG?w=1067&h=800'
 );

create table tea (
    id int primary key auto_increment,
    title varchar(255) not null,
    text varchar(555) not null
);
insert into tea (title, text) values
(
 '茶艺',
 '茶艺是一种文化现象，它在中国优秀文化的基础上广泛吸收和借鉴了其它艺术形式，并扩展到文学、艺术等领域，形成了具有浓厚民族特色的中国茶文化。茶艺包括茶叶品评技法和艺术操作手段的鉴赏以及品茗美好环境的领略等整个品茶过程的美好意境，其过程体现形式和精神的相互统一'
),
(
 '茶道',
 '茶道是以修行得道为宗旨的饮茶艺术，它被视为一种烹茶饮茶的生活艺术、一种以茶为媒的生活礼仪以及一种以茶修身的生活方式。茶道精神是茶文化的核心，强调和谐、尊重、清净和禅意'
),
(
 '区别',
 '茶道是以修行得道为宗旨的饮茶艺术，它被视为一种烹茶饮茶的生活艺术、一种以茶为媒的生活礼仪以及一种以茶修身的生活方式。茶道精神是茶文化的核心，强调和谐、尊重、清净和禅意'
);