"use strict";var e=require("../../../common/vendor.js");const i={onReady(){let i=0,r=0,t=0,a=0,c=this.resarr,l=this.GoodsDataDefault;e.index.getSystemInfo({success(e){a=e.screenWidth}}),r=(a-320)/3,t=r.toString()+"px",this.elementstyle={marginLeft:t},l.forEach(((e,r)=>{"bag"==e.tag&&(this.currentarr[i]=r,c.push(l[r]),i++)})),this.resarr=c},methods:{scroll_index(e){0!=this.currentscroll?this.ifshow=!0:this.ifshow=!1,this.currentscroll=Math.round(e.detail.scrollTop)},totop(){this.scrolltop=Math.random()},navi_deteial(i){let r=this.currentarr;e.index.navigateTo({url:"/pages/detail/detail",events:{acceptDataFromOpenedPage:function(e){console.log(e)},someEvent:function(e){console.log(e)}},success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",r[i])}})}},data:()=>({ifshow:!1,scrolltop:0,currentscroll:0,elementstyle:{},resarr:[],currentarr:[],GoodsDataDefault:[{selever:"书怨砚渊",title:"尘子醉 【化蝶】 花城衍生面具蝴蝶配饰簪子发簪",ifnew:56,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/2933460057/O1CN0177Askx1CI9Lhxyxje_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:999,newPrice:850,tag:"hair",cart:"发簪"},{selever:"田是荷叶田田的田26314744",title:"【金莲】福田妙果古风汉服发簪子发夹全新落春流同款",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/4011580509/O1CN01yhVMZv1FdAOALfto5_!!4011580509.jpg_360x360Q90.jpg_.webp",oldPrice:48,newPrice:40,tag:"hair",cart:"发簪"},{selever:"Ww芬芬ya",title:"3美妆蛋+1个美妆蛋架子8元 一整盒全新",ifnew:"全",remaker:"",imglink:"https://gw.alicdn.com/imgextra/i3/4133581371/O1CN01RUSa2b1LzxmuFaErw_!!4133581371.jpg_Q75.jpg_.webp",oldPrice:10,newPrice:8,tag:"makeup",cart:"美妆"},{selever:"良品铺子旗舰店",title:" 良品铺子猪肉脯干靖江网红解馋即食熟零食小吃休闲",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/131425407/O1CN01jMoQ4o1poSGsrIkCI_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:24.9,newPrice:23,tag:"food",cart:"零食"},{selever:"何",title:"李佳埼100分粉扑棉花糖美妆蛋粉底液专用",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2201262696396/O1CN01owEGZZ1x7Pvr2L9S3_!!2201262696396.jpg_430x430q90.jpg",oldPrice:29,newPrice:20,tag:"makeup",cart:"美妆"},{selever:"木村耀司旗舰店",title:" 双肩包男士简约百搭大容量小型旅行背包女初中生高",ifnew:78,remaker:"",imglink:"https://img.alicdn.com/imgextra/i1/117575163/O1CN014I4bYt1o0hSqdEtSK_!!0-saturn_solar.jpg_200x200.jpg",oldPrice:62.1,newPrice:62.1,tag:"shcoolbag",cart:"书包"},{selever:"Disciple",title:"妖制粉扑蛋黄派菠萝派气妆蛋化妆棉干湿两用",ifnew:"全",remaker:"",imglink:"https://gw.alicdn.com/imgextra/i1/2208157155426/O1CN01ZvGcfl1px9mWtqSJg_!!2208157155426.jpg_Q75.jpg_.webp",oldPrice:12,newPrice:10,tag:"makeup",cart:"美妆"},{selever:"天国少女11",title:"8个装|美妆蛋超软液专用彩妆蛋",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/i2/2201262696396/O1CN01a3NRVY1x7Q0i0FZXe_!!2201262696396.jpg_430x430q90.jpg",oldPrice:15,newPrice:12,tag:"makeup",cart:"美妆"},{selever:"小花s4m8565",title:"二手活着 余华",ifnew:95,remaker:"",imglink:"https://gw.alicdn.com/imgextra/i2/2414369401/O1CN01bHMPwy2JJiCeHSd2v_!!2414369401.jpg_Q75.jpg_.webp",oldPrice:35,newPrice:19.9,tag:"book",cart:" 书本"},{selever:"回忆童颜无忌",title:"活着2012版平装余华作家正版二手旧书",ifnew:"全",remaker:"",imglink:"https://gw.alicdn.com/imgextra/i2/1708549076/O1CN01Qd925x2GurRYkdLES_!!1708549076.jpg_Q75.jpg_.webp",oldPrice:20,newPrice:10,tag:"book",cart:" 书本"},{selever:"xiaozhi7899",title:"盛唐【中古优品】二手包包 喆喆定金专拍",ifnew:"二手",remaker:"",imglink:"https://img.alicdn.com/imgextra/i4/698598873/O1CN01Ort5vm2FPt5Bi6Qbq_!!698598873.jpg_400x400.jpg",oldPrice:1e3,newPrice:500,tag:"bag",cart:"包包"},{selever:"mink宝贝",title:"盛唐【双十一闭眼入】二手包包LV小号购物袋 83723",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/i1/198595514/O1CN01dhCEQk1qbSfxEcwh6_!!198595514.jpg",oldPrice:7899,newPrice:7500,tag:"bag",cart:"包包"},{selever:"kiko觅宝家",title:"盛唐【中古优品】二手包包YSL白色NIKI托特",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/i3/14048205/O1CN01NQrL7i2ATwV8b3K9e_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",oldPrice:7999,newPrice:7600,tag:"bag",cart:"包包"},{selever:"jinjunjian",title:"清代，民国银簪子 古董古玩杂项银器玉花件小簪子",ifnew:85,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/4137011410/O1CN01fnQy4D1MHpF2rGIND_!!4137011410.png_360x360Q90.jpg_.webp",oldPrice:230,newPrice:200,tag:"hair",cart:"发簪"},{selever:"食客星儿",title:"【团购】obitsu/ob娃/6分三分山河令温客行萧簪子",ifnew:95,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3335579257/O1CN01pDdBWY2IFlAaAca7z_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:13,newPrice:8,tag:"hair",cart:"发簪"},{selever:"唐十八子77",title:"明代錾刻回字边花纹如意形的 老银发簪子双尖",ifnew:75,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1077067571/O1CN01IjRLY925nZP9Y8xGH_!!1077067571.jpg_360x360Q90.jpg_.webp",oldPrice:480,newPrice:320,tag:"hair",cart:"发簪"},{selever:"bikaiyao",title:"古董老物件玉器收藏清代和田白玉喜鹊报喜鸟簪子头",ifnew:75,remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2207500366123/O1CN01zJCmbO1v6NthmwxsG_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:46,newPrice:42,tag:"hair",cart:"发簪"},{selever:"来福a来福",title:"收藏古董老物件清代老骨制品佛手持花簪子头",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2214084751820/O1CN01ufdYLh1PJbcufTydb_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:1300,newPrice:1200,tag:"hair",cart:"发簪"},{selever:"来福a来福",title:"古玩古董老银簪子点翠簪子老银玛瑙簪子（价格不等请议",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1655070820/O1CN01T0aF2y1HvbZ4bdAyO_!!1655070820.jpg_360x360Q90.jpg_.webp",oldPrice:888,newPrice:750,tag:"hair",cart:"发簪"},{selever:"穿比基尼的熊爸爸",title:" A5带锁日记本密码锁笔记本A6学生记事本文具本子手",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/1082360160/O1CN01NTRxwN1D3K7edv0Cp_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:17.9,newPrice:15.99,tag:"nodebook",cart:"笔记本"},{selever:"septemberwiner",title:"晨光文具正品学生花与海系列精装绑带本 A5笔记本",ifnew:65,remaker:"",imglink:"https://img.alicdn.com/imgextra/i4/129280969/O1CN016xORpR1J1qa1SlHtP_!!0-saturn_solar.jpg_200x200.jpg",oldPrice:29.9,newPrice:12.2,tag:"nodebook",cart:"笔记本"},{selever:"定州古旧书店",title:"阅古斋日本回流名牌正品圆珠笔怀旧学生练字笔老文具满五",ifnew:95,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/106044872/O1CN01w8Ljbp1lrQMLMVx4e_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:33.9,newPrice:32,tag:"nodebook",cart:"笔记本"},{selever:"初克旺店",title:"文具晨光中性笔k35黑按动备考商务黑色蓝色书写日常",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/i2/40598549/O1CN01UfHTae2D1UgKX10xQ_!!0-saturn_solar.jpg_200x200.jpg",oldPrice:13.99,newPrice:10.65,tag:"nodebook",cart:"笔记本"},{selever:"tb135091923",title:"文具可爱创意四叶草韩国金属挂件迷你国文学习幸运",ifnew:75,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/331340056/O1CN01tmr9Tb1CHgqtnzuHQ_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:12.98,newPrice:10,tag:"nodebook",cart:"笔记本"},{selever:"圣香香",title:" 【写意居】剑网三 星演秀娘cos 星演七秀成女 衣服配",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/i4/113020020/O1CN01VLZyBF1C1CfHjdezO_!!0-saturn_solar.jpg_200x200.jpg",oldPrice:1100,newPrice:900,tag:"cosclothes",cart:"cos衣服"},{selever:"东哥哥的人生",title:" 二手闲置女士衣服羊绒衫套头圆领长袖秋冬保暖衣服",ifnew:78,remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2536199060/O1CN010JXAVv2GnX8gBNFhb_!!2536199060.jpg_360x360Q90.jpg_.webp",oldPrice:670,newPrice:500,tag:"choths",cart:" 衣服"},{selever:"jamielau313",title:"二手 仙剑奇侠传六 仙剑6 明绣 cos cosplay衣服全套渐变",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/162626278/TB2ze85aabyQeBjy1XbXXa9yXXa_!!162626278.jpg_360x360Q90.jpg_.webp",oldPrice:650,newPrice:300,tag:"cosclothes",cart:"cos衣服"},{selever:"ffantasy520",title:"cos服 魔法少女小圆 巴麻美 衣服 头饰 帽子 全套",ifnew:87,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1029570186/O1CN01wrxbGq1DFEL2NLSG8_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:270,newPrice:230,tag:"cosclothes",cart:"cos衣服"},{selever:"willowyc",title:"实拍败家女闲置女装二手旧衣服装论按斤打包称重甩卖",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/390170755/TB29DLWj3xlpuFjy0FoXXa.lXXa_!!390170755.jpg_360x360Q90.jpg_.webp",oldPrice:452,newPrice:352.99,tag:"clothes",cart:"衣服"},{selever:"秀美猪猪商城",title:" 100%秋季新品纯棉长袖t恤男圆领秋衣打底衫潮男t恤",ifnew:67,remaker:"",imglink:"https://img.alicdn.com/imgextra/i3/133275759/O1CN01BHY72o1sPfiGsN4ty_!!0-saturn_solar.jpg_200x200.jpg",oldPrice:360.55,newPrice:320.33,tag:"clothes",cart:"衣服"},{selever:"sgfchjgi",title:"裘皮、皮草、狐狸毛衣服干洗、狐狸毛服装干洗服务（短",ifnew:87,remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/53520996/O1CN01PIhiA51JED6VdWKZh_!!53520996.jpg_360x360Q90.jpg_.webp",oldPrice:423,newPrice:242.22,tag:"clothes",cart:"衣服"},{selever:"xycdx007",title:"临期L 劲仔手撕素肉23g香辣麻辣素零食豆干制品湖南休闲",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/47572845/O1CN01J0eZM01Wt3ZuXkMuc_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:1,newPrice:1,tag:"food",cart:"零食"},{selever:"艾屋品牌",title:"海子仁巴西手剥松子休闲食品开口手拨松子坚果炒货",ifnew:"全",remaker:"",imglink:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/725677994/O1CN01jBTOsB28vIwFDMdtP_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:148,newPrice:148,tag:"food",cart:"零食"},{selever:"墨居一分二",title:"【正版二手】品质生活·烘焙课堂：全家最爱的小甜点、小零",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1217420099/O1CN01bd0UzM1CbO0825wTr_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:8.69,newPrice:8.69,tag:"food",cart:"零食"},{selever:"良品铺子旗舰店",title:" 良品铺子零食大礼包整箱送女友超大巨型包网红爆款",ifnew:67,remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/619123122/O1CN01WqVckX1YvvJGdRutB_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:19.66,newPrice:12.99,tag:"food",cart:"零食"},{selever:"东成食品专营",title:"金磨坊60包零食礼包麻辣网红小",ifnew:"全",remaker:"",imglink:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1636772035/O1CN01LsiQdA1Qu4mizMqtc_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:52,newPrice:25,tag:"food",cart:"零食"},{selever:"来伊份官方旗舰店",title:" 来伊份零食贩卖机小吃解馋小零食休闲食品大全送女",ifnew:"全",remaker:"",imglink:"https://picasso.alicdn.com/imgextra/863037/O1CNA1Pimgrender863037O1CN01cVHINu1YvvJIg17wF_!!0-item_pic.jpg?backup_url=O1CN01cVHINu1YvvJIg17wF_!!0-item_pic.jpg&p_context=eyJiaXoiOiJtYWMiLCJidWNrZXRJZCI6IkMiLCJjaGFubmVsIjoid3NlYXJjaGljb24taXRlbSIsIml0ZW1JZCI6IjQwMTAxNzI1OTMyIiwicGljVHlwZSI6InAxMSIsInJlbmRlckNvbmRpdGlvbiI6e30sInJlbmRlckRhdGEiOnt9fQ--&sign=863037b7caeddde3cd38287499b232bc&v=4.0_360x360Q90.jpg_.webp",oldPrice:189,newPrice:160.35,tag:"food",cart:"零食"},{selever:"百草味旗舰店",title:"百草味手撕面包1kg蛋糕早餐代餐休闲小吃食品零食整",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/131425407/O1CN01tTW56m1poSJa2F4v3_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp ",oldPrice:26.9,newPrice:25,tag:"food",cart:"零食"},{selever:"卫龙食品旗舰店",title:" 卫龙魔芋爽辣条魔芋素毛肚素肉好吃办公室零食小吃",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/4197172177/O1CN01slNDrV1Rx6zriccvG_!!4197172177.jpg_360x360Q90.jpg_.webp",oldPrice:14.9,newPrice:13.55,tag:"food",cart:"零食"},{selever:"三只松鼠旗舰店",title:"【三只松鼠_麻辣零食大礼包500g 】休闲食品鸭肉鸭",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2209639454804/O1CN01sJG3uw1lMHMbbRZtR_!!2209639454804.jpg_360x360Q90.jpg_.webp",oldPrice:19.9,newPrice:15.2,tag:"food",cart:"零食"},{selever:"鱼臻多旗舰店",title:" 香酥小黄鱼干黄花鱼酥脆即食小鱼小吃休",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2206812956355/O1CN01OXoRob1wodlg5gofZ_!!2206812956355.jpg_360x360Q90.jpg_.webp",oldPrice:34.9,newPrice:32.1,tag:"food",cart:"零食"},{selever:"千牛花食品专营店广",title:"百草味零食大礼包肉食类夜宵充饥休闲",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2209035897788/O1CN012jmG1Q27OxKSOrtQg_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:125.1,newPrice:120,tag:"food",cart:"零食"},{selever:"优麦食品专营店",title:"甘源青豆官方旗舰店蒜香原味豌豆芥末味小吃",ifnew:67,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2209002050534/O1CN01fcdGeD1FocHlqVVa7_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:15.9,newPrice:14.3,tag:"food",cart:"零食"},{selever:"金美时旗舰店",title:" 书包女初中生大容量新款韩版2022女生中学生高中生",ifnew:95,remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/126786776/O1CN01X7OrDi1zvSTp8vXi1_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:20.99,newPrice:18.56,tag:"shcoolbag",cart:"书包"},{selever:"金美时旗舰店",title:"书包女初中生大容量新款韩版2022女生中学生高中生",ifnew:"全",remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1046707508/O1CN01eEF6Kt25KiS4Ie67Y-1046707508.jpg_360x360Q90.jpg_.webp",oldPrice:115.9,newPrice:110.2,tag:"shcoolbag",cart:"书包"},{selever:"edison箱包旗舰店",title:"爱迪生初中生书包男中学生2022新款超大容量双肩包",ifnew:45,remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/748793950/O1CN01p2vW4n1f39BrXqPFs_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:157.5,newPrice:130.1,tag:"shcoolbag",cart:"书包"},{selever:"kangol旗舰店",title:" KANGOL中号双肩包女大学生简约百搭运动背包防水",ifnew:"全",remaker:"",imglink:"https://picasso.alicdn.com/imgextra/O1CNA1Zq0BnC1ETGCuRZs48_!!3421620352-0-psf.jpg_360x360Q90.jpg_.webp",oldPrice:449.1,newPrice:449.1,tag:"shcoolbag",cart:"书包"},{selever:"当当网官方旗舰店",title:" 【当当网 小嘉推荐】你可以生气但不要越想越气 温柔",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/33010900/O1CN01dDQACK1IWFEssN20W_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",oldPrice:19.9,newPrice:15.5,tag:"shcoolbag",cart:"书包"},{selever:"凤凰新华书店旗舰店",title:"漫画儿童心理学 全套5册 小学生三四年级上册至六年",ifnew:67,remaker:"",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/747883302/O1CN01ysR8kl1aGMaRrgAYJ_!!747883302.jpg_360x360Q90.jpg_.webp",oldPrice:19.8,newPrice:19.8,tag:"book",cart:"书本"},{selever:"博库旗舰店",title:" 三体全集正版共3册 刘慈欣科幻小说全套作品集 雨果",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/i3/940910178/O1CN01zxudZl1DBZI0Sw8Iy_!!0-saturn_solar.jpg_200x200.jpg",oldPrice:45.5,newPrice:45.5,tag:"book",cart:"书本"},{selever:"木子简图书专营店山",title:" 名家获奖绘本3–6岁 4-5岁儿童绘本3一6幼儿绘本阅读",ifnew:"全",remaker:"",imglink:"https://picasso.alicdn.com/imgextra/O1CNA18S6J2b1CP1JBwkKHY_!!101450072-0-psf.jpg_360x360Q90.jpg_.webp",oldPrice:23.8,newPrice:23.8,tag:"book",cart:"书本"},{selever:"邺水朱华图书专营",title:"【现货速发】易经很容易真的曾仕强 正版易经真的很",ifnew:89,remaker:"",imglink:"https://img.alicdn.com/imgextra/i4/108962136/O1CN01Dgjkgz1ReKfj6QIII_!!0-saturn_solar.jpg_200x200.jpg",oldPrice:24.5,newPrice:20.2,tag:"book",cart:"书本"},{selever:"乐乐趣图书专营店湖",title:" 中国当代获奖儿童文学全10册一年级阅读课外书必读",ifnew:"全",remaker:"",imglink:"https://img.alicdn.com/imgextra/i3/15940794/O1CN01fAPDho1Hjh8qZ4J9p_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",oldPrice:59,newPrice:52,tag:"book",cart:"书本"},{selever:"硕博图书专营店",title:"线装正版如果历史是一群喵1-10全套10册宋辽金夏篇",ifnew:97,remaker:"",imglink:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1049653664/O1CN01M9HgWZ1cw9nCdTtgZ_!!1049653664-0-lubanu-s.jpg_360x360Q90.jpg_.webp",oldPrice:182,newPrice:120,tag:"book",cart:"书本"},{selever:"墨香天下图书专营店",title:" 纽伯瑞国际儿童文学金奖小说系列全套12册中小学生",ifnew:76,remaker:" ",imglink:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2200607228172/O1CN01NFu7Fa2AEpODv3zMm_!!0-item_pic.jpg_360x360Q90.jpg_.webp",oldPrice:74,newPrice:60,tag:"book",cart:"书本"},{selever:"果麦官方旗舰店",title:"小嘉推荐小王子立体书珍藏版 小王子的奇想世界 3D",ifnew:"全",remaker:"",imglink:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextrahttps://img.alicdn.com/imgextra/i2/3944105410/O1CN01vretIz1pppUFDYmv3_!!3944105410-0-alimamacc.jpg_360x360Q90.jpg_.webp",oldPrice:169,newPrice:169,tag:"book",cart:"书本"}]})};if(!Array){e.resolveComponent("uni-icons")()}Math;var r=e._export_sfc(i,[["render",function(i,r,t,a,c,l){return{a:e.p({"custom-prefix":"custom-icon",type:"top",size:"35"}),b:c.ifshow?1:"",c:e.o(((...e)=>l.totop&&l.totop(...e))),d:e.f(c.resarr,((i,r,t)=>({a:i.imglink,b:e.t(i.ifnew),c:e.n("全"==i.ifnew?"style1":i.ifnew>80?"style2":i.ifnew>70?"style3":i.ifnew>50?"style4":"style5"),d:e.t(i.title),e:e.t(i.oldPrice),f:e.t(i.newPrice),g:e.o((e=>l.navi_deteial(r))),h:r}))),e:e.s(c.elementstyle),f:e.p({type:"spinner-cycle",color:"#666",size:"25"}),g:c.scrolltop,h:e.o((e=>l.scroll_index(e)))}}],["__scopeId","data-v-ff7f7402"]]);wx.createComponent(r);
