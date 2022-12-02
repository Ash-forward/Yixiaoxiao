<template>
	<view class="main_content">
		
		<scroll-view scroll-y="true" class="scroll-Y"
		 style="height: 800px;" scroll-with-animation = "true"
		scroll-anchoring = "true" show-scrollbar = "false">
				
				<view class="top_blur" :style="{width : Width + 'px'}"></view>
			
				<swiper class="photo" 
						autoplay="true"
						circular = "true"
						indicator-color = "rgb(255, 205, 55)"
						indicator-active-color = "rgb(237,109,0)"
						indicator-dots = "true">
					<swiper-item class="page" >
						<view class="img" :style="{width : Width + 'px'}">
							<image class="image_item" :src = "GoodsDataDefault[item].imglink" mode="scaleToFill"></image>
						</view>
					</swiper-item>	
				</swiper>
			
			<view class="messa" :style="{width : Width + 'px'}">
				<view class="moneny">
					<text style="font-size: 18px;">￥</text>
					<text style="font-size: 25px;">
						{{GoodsDataDefault[item].newPrice}}
					</text>
					<text style="color: #515151;text-decoration: line-through;margin-left: 8px;">￥{{GoodsDataDefault[item].oldPrice}}</text>
				</view>
				
				<view class="title">
					<view class="mask">
						<view style="display: flex; width: 30px; justify-content: center;color: white;position: relative;top: -3px;font-size: 14px;"
						      :class=" GoodsDataDefault[item].ifnew == '全' ? 'style1' : GoodsDataDefault[item].ifnew > 80  ? 'style2' : GoodsDataDefault[item].ifnew > 70 ?  'style3' : GoodsDataDefault[item].ifnew > 50 ? 'style4' : 'style5'">
						{{GoodsDataDefault[item].ifnew}} 
						</view>
						<view style="width: 20px;color: #dcdcdc;position: relative;top:-22px ;right: -34px; font-size: 14px;">
							新
						</view>
					</view>
					
					<view  style="margin-left: 10px;height: 56px;">
					<text>{{GoodsDataDefault[item].title}}</text>
					</view>
				</view>
				
				<view class="posi">
					<view style="position: absolute;bottom: 8px;margin-left: 10px;">
					<text style="color: #d2d2d2;font-size: 13px;">发布于李白河校区</text>
					</view>
					
					
					<view style="position: absolute;right: 15px;bottom: 8px;">216浏览</view>
				</view>
			</view>
			
			<view class="comment" :style="{width : Width + 'px'}">
				<view style="height: 40px;width: 40px;border-radius: 20px;overflow: hidden;margin-left: 5px;">
					<image src="https://img2.woyaogexing.com/2022/11/06/4358607bc6b7cad7!400x400.jpg" style="height: 40px;width: 40px;" mode="scaleToFill"></image>
				</view>
				<view class="nickname">
				<text> Ww芬芬ya</text>
				</view>
				<view class="content" >
					<text style="font-size: 13px;"> 复古花朵流苏珍珠发簪甜美小众设计高级感简约现代日常盘发器发钗</text>
				</view>
			</view>	
			
			<view class="comments_img" :style="{width : Width -20 + 'px'}">
				<view style="border-radius: 5px; overflow: hidden;">
					<image style="height: 80px;width: 80px;" mode="scaleToFill" src="https://gd4.alicdn.com/imgextra/i4/812265685/O1CN01g66ARW1rrmNiwRQIj_!!812265685.jpg_50x50.jpg_.webp"></image>
				</view>
				<view style="border-radius: 5px; overflow: hidden;">
					<image style="height: 80px;width: 80px;" mode="scaleToFill" src="https://gd4.alicdn.com/imgextra/i4/812265685/O1CN01uewNo51rrmNn8hJzu_!!812265685.jpg_50x50.jpg_.webp"></image>
				</view>
				<view style="border-radius: 5px; overflow: hidden;">
					<image style="height: 80px;width: 80px;" mode="scaleToFill" src="https://gd4.alicdn.com/imgextra/i3/812265685/O1CN017gKTZA1rrmNk8MTUb_!!812265685.jpg_50x50.jpg_.webp"></image>
				</view>
				<view style="border-radius: 5px; overflow: hidden;">
					<image style="height: 80px;width: 80px;" mode="scaleToFill" src="https://gd2.alicdn.com/imgextra/i2/812265685/O1CN010N44n41rrmNn8kk5i_!!812265685.jpg_50x50.jpg_.webp"></image>
				</view>
			</view>
			
			
			<view class="Good_detail"  :style="{width : Width  + 'px'}">
				<view style="width: 66px;position: absolute;left: 5px;padding: 3px;">
					<text>宝贝详情</text>
				</view>
				
				<view class="Good_detail_more" :style="{width : Width  + 'px'}">
					<view style="width: 360px;height: 190px;background-color: #f4f4f4;border-radius: 8px;display: flex;align-items: stretch;flex-direction: column;">
						<view style="height: 46px;width: 250px;display: flex;align-items: center;">
							<text style="margin-left: 5px; color: #d2d2d2;">分类</text>
							<view class="msg_comment">
								<text >{{GoodsDataDefault[item].cart}}</text>
							</view>
						</view>
						<view style="height: 46px;width: 250px;display: flex;align-items: center;">
							<text style="margin-left: 5px; color: #d2d2d2;">成色</text>
							<view class="msg_comment">
								<text> 全新</text>
							</view>
						</view>
						<view style="height: 46px;width: 250px;display: flex;align-items: center;">
							<text style="margin-left: 5px; color: #d2d2d2;">风格</text>
							<view class="msg_comment">
								<text> 甜美，大气，简约</text>
							</view>
						</view>
						<view style="height: 46px;width: 250px;display: flex;align-items: center;">
							<text style="margin-left: 5px; color: #d2d2d2;">材质</text>
							<view class="msg_comment">
								<text > 其他</text>
							</view>
						</view>
						
					</view>
				</view>
			</view>
			
			<view class="detail_image" :style="{width : Width + 'px'}">
				<image src="https://gd2.alicdn.com/imgextra/i2/812265685/O1CN010N44n41rrmNn8kk5i_!!812265685.jpg_400x400.jpg" style="width: inherit;height: 400px;" mode="scaleToFill" @click="preview()"></image>
				<image src="https://gd2.alicdn.com/imgextra/i3/812265685/O1CN017gKTZA1rrmNk8MTUb_!!812265685.jpg_400x400.jpg" style="width: inherit;height: 400px;" mode="scaleToFill" @click="preview()"></image>
				<image src="https://gd3.alicdn.com/imgextra/i3/812265685/O1CN01Yiak4W1rrmNp4Fu89_!!812265685.jpg_400x400.jpg" style="width: inherit;height: 400px;" mode="scaleToFill" @click="preview()"></image>
				<image src="https://gw.alicdn.com/imgextra/i2/679712099/TB2gJa.m9tYBeNjSspkXXbU8VXa_!!679712099.jpg_Q75.jpg_.webp" style="width: inherit;height: 400px;" mode="scaleToFill" @click="preview()"></image>
			</view>
			
			
			<view class="Good_nav" :style="{width : Width + 'px'}">
				<view class="chat">
					<uni-icons type="chat" size="30" ></uni-icons>
					<view style="font-size: 13px;">客服</view>
				</view>
				<view class="shop">
					<uni-icons type="shop" size="30"></uni-icons>
					<view style="font-size: 13px;"> 店铺 </view>
				</view>
				<view class="cart">
					<uni-icons type="cart" size="30"></uni-icons>
					<view style="font-size: 13px;"> 购物车</view>
				</view>
				<view class="select">
					<view class="join">
						<text style="color: white;">加入购物车</text>
					</view>
					<view class="join">
						<text style="color: white;">立即购买</text>
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		methods:{
			preview(){
					// 预览图片
					uni.previewImage({
						urls: res.tempFilePaths,
						longPressActions: {
							itemList: ['发送给朋友', '保存图片', '收藏'],
							success: function(data) {
								console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
							},
							fail: function(err) {
								console.log(err.errMsg);
							}
						}
					});
					
			}
		},
		data(){
			return{
				item : 0,
				Width : 0,
				
						
						
				GoodsDataDefault: [
					{
						id : 0,
						selever: '书怨砚渊', //卖家名称
						title: '尘子醉 【化蝶】 花城衍生面具蝴蝶配饰簪子发簪', //商品名称
						ifnew: 56, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/2933460057/O1CN0177Askx1CI9Lhxyxje_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 999, //原价，全新价格
						newPrice: 850, // 现价
						tag:'hair',
						cart : '发簪',
					
					},
					{
						id : 1,
						selever: '田是荷叶田田的田26314744', //卖家名称
						title: '【金莲】福田妙果古风汉服发簪子发夹全新落春流同款', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/4011580509/O1CN01yhVMZv1FdAOALfto5_!!4011580509.jpg_360x360Q90.jpg_.webp',
						oldPrice: 48, //原价，全新价格
						newPrice: 40, // 现价
						tag:'hair',
						cart : '发簪',
					},
					{
						id : 2,
						selever: 'Ww芬芬ya', //卖家名称
						title: '3美妆蛋+1个美妆蛋架子8元 一整盒全新', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink :'https://gw.alicdn.com/imgextra/i3/4133581371/O1CN01RUSa2b1LzxmuFaErw_!!4133581371.jpg_Q75.jpg_.webp',
						oldPrice: 10, //原价，全新价格
						newPrice: 8, // 现价
						tag:'makeup',
						cart : '美妆',
					},
					{
						id : 3,
						selever: '良品铺子旗舰店', //卖家名称
						title: ' 良品铺子猪肉脯干靖江网红解馋即食熟零食小吃休闲', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/131425407/O1CN01jMoQ4o1poSGsrIkCI_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 24.90, //原价，全新价格
						newPrice: 23.0, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 4,
						selever: '何', //卖家名称
						title: '李佳埼100分粉扑棉花糖美妆蛋粉底液专用', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2201262696396/O1CN01owEGZZ1x7Pvr2L9S3_!!2201262696396.jpg_430x430q90.jpg',
						oldPrice: 29, //原价，全新价格
						newPrice: 20, // 现价
						tag:'makeup',
						cart : '美妆',
					},
					{
						id : 5,
						selever: '木村耀司旗舰店', //卖家名称
						title: ' 双肩包男士简约百搭大容量小型旅行背包女初中生高', //商品名称
						ifnew: 78, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i1/117575163/O1CN014I4bYt1o0hSqdEtSK_!!0-saturn_solar.jpg_200x200.jpg',
						oldPrice: 62.10, //原价，全新价格
						newPrice: 62.10, // 现价
						tag:'shcoolbag',
						cart : '书包',
					},
					{
						id : 6,
						selever: 'Disciple', //卖家名称
						title: '妖制粉扑蛋黄派菠萝派气妆蛋化妆棉干湿两用', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://gw.alicdn.com/imgextra/i1/2208157155426/O1CN01ZvGcfl1px9mWtqSJg_!!2208157155426.jpg_Q75.jpg_.webp',
						oldPrice: 12, //原价，全新价格
						newPrice: 10, // 现价
						tag:'makeup',
						cart : '美妆',
					},
					{
						id : 7,
						selever: '天国少女11', //卖家名称
						title: '8个装|美妆蛋超软液专用彩妆蛋', //商品名称
						ifnew:'全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i2/2201262696396/O1CN01a3NRVY1x7Q0i0FZXe_!!2201262696396.jpg_430x430q90.jpg',
						oldPrice: 15, //原价，全新价格
						newPrice: 12, // 现价
						tag:'makeup',
						cart : '美妆',
					},
					{
						id : 8,
						selever: '小花s4m8565', //卖家名称
						title: '二手活着 余华', //商品名称
						ifnew: 95, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://gw.alicdn.com/imgextra/i2/2414369401/O1CN01bHMPwy2JJiCeHSd2v_!!2414369401.jpg_Q75.jpg_.webp',
						oldPrice: 35, //原价，全新价格
						newPrice: 19.9, // 现价
						tag:'book',
						cart :' 书本',
					},
					{
						id : 9,
						selever: '回忆童颜无忌', //卖家名称
						title: '活着2012版平装余华作家正版二手旧书', //商品名称
						ifnew:'全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://gw.alicdn.com/imgextra/i2/1708549076/O1CN01Qd925x2GurRYkdLES_!!1708549076.jpg_Q75.jpg_.webp',
						oldPrice: 20, //原价，全新价格
						newPrice: 10, // 现价
						tag:'book',
						cart :' 书本',
					},
					{
						id : 10,
						selever: 'xiaozhi7899', //卖家名称
						title: '盛唐【中古优品】二手包包 喆喆定金专拍', //商品名称
						ifnew: '二手', // 0 -> 不是全新 ，1 -> 全新  3 ->二手， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i4/698598873/O1CN01Ort5vm2FPt5Bi6Qbq_!!698598873.jpg_400x400.jpg',
						oldPrice: 1000, //原价，全新价格
						newPrice: 500, // 现价
						tag : 'bag',
						cart :'包包',
					},
							
					
					{
						id : 11,
						selever: 'mink宝贝', //卖家名称
						title: '盛唐【双十一闭眼入】二手包包LV小号购物袋 83723', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i1/198595514/O1CN01dhCEQk1qbSfxEcwh6_!!198595514.jpg',
						oldPrice: 7899, //原价，全新价格
						newPrice: 7500, // 现价
						tag:'bag',
						cart :'包包',
					},
					{
						id : 12,
						selever: 'kiko觅宝家', //卖家名称
						title: '盛唐【中古优品】二手包包YSL白色NIKI托特', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i3/14048205/O1CN01NQrL7i2ATwV8b3K9e_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
						oldPrice: 7999, //原价，全新价格
						newPrice: 7600, // 现价
						tag:'bag',
						cart :'包包',
					},
					
					{
						id : 13,
						selever: 'jinjunjian', //卖家名称
						title: '清代，民国银簪子 古董古玩杂项银器玉花件小簪子', //商品名称
						ifnew: 85, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/4137011410/O1CN01fnQy4D1MHpF2rGIND_!!4137011410.png_360x360Q90.jpg_.webp',
						oldPrice: 230, //原价，全新价格
						newPrice: 200, // 现价
						tag:'hair',
						cart :'发簪',
					},
					{
						id : 14,
						selever: '食客星儿', //卖家名称
						title: '【团购】obitsu/ob娃/6分三分山河令温客行萧簪子', //商品名称
						ifnew: 95, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3335579257/O1CN01pDdBWY2IFlAaAca7z_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 13, //原价，全新价格
						newPrice: 8, // 现价
						tag:'hair',
						cart :'发簪',
					},
					{
						id : 15,
						selever: '唐十八子77', //卖家名称
						title: '明代錾刻回字边花纹如意形的 老银发簪子双尖', //商品名称
						ifnew: 75, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1077067571/O1CN01IjRLY925nZP9Y8xGH_!!1077067571.jpg_360x360Q90.jpg_.webp',
						oldPrice: 480, //原价，全新价格
						newPrice: 320, // 现价
						tag:'hair',
						cart :'发簪',
					},
					{
						id : 16,
						selever: 'bikaiyao', //卖家名称
						title: '古董老物件玉器收藏清代和田白玉喜鹊报喜鸟簪子头', //商品名称
						ifnew: 75, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2207500366123/O1CN01zJCmbO1v6NthmwxsG_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 46, //原价，全新价格
						newPrice: 42, // 现价
						tag:'hair',
						cart :'发簪',
					},
					{
						id : 17,
						selever: '来福a来福', //卖家名称
						title: '收藏古董老物件清代老骨制品佛手持花簪子头', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2214084751820/O1CN01ufdYLh1PJbcufTydb_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 1300, //原价，全新价格
						newPrice: 1200, // 现价
						tag:'hair',
						cart :'发簪',
					},
					{
						id : 18,
						selever: '来福a来福', //卖家名称
						title: '古玩古董老银簪子点翠簪子老银玛瑙簪子（价格不等请议', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1655070820/O1CN01T0aF2y1HvbZ4bdAyO_!!1655070820.jpg_360x360Q90.jpg_.webp',
						oldPrice: 888, //原价，全新价格
						newPrice: 750, // 现价
						tag:'hair',
						cart :'发簪',
					},
					{
						id : 19,
						selever: '穿比基尼的熊爸爸', //卖家名称
						title: ' A5带锁日记本密码锁笔记本A6学生记事本文具本子手', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/1082360160/O1CN01NTRxwN1D3K7edv0Cp_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 17.90, //原价，全新价格
						newPrice: 15.99, // 现价
						tag:'nodebook',
						cart :'笔记本',
					},
					{
						id : 20,
						selever: 'septemberwiner', //卖家名称
						title: '晨光文具正品学生花与海系列精装绑带本 A5笔记本', //商品名称
						ifnew: 65, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i4/129280969/O1CN016xORpR1J1qa1SlHtP_!!0-saturn_solar.jpg_200x200.jpg',
						oldPrice: 29.90, //原价，全新价格
						newPrice: 12.2, // 现价
						tag:'nodebook',
						cart :'笔记本',
					},
					{
						id : 21,
						selever: '定州古旧书店', //卖家名称
						title: '阅古斋日本回流名牌正品圆珠笔怀旧学生练字笔老文具满五', //商品名称
						ifnew: 95, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/106044872/O1CN01w8Ljbp1lrQMLMVx4e_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 33.90, //原价，全新价格
						newPrice: 32, // 现价
						tag:'nodebook',
						cart :'笔记本',
					},
					{
						id : 22,
						selever: '初克旺店', //卖家名称
						title: '文具晨光中性笔k35黑按动备考商务黑色蓝色书写日常', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i2/40598549/O1CN01UfHTae2D1UgKX10xQ_!!0-saturn_solar.jpg_200x200.jpg',
						oldPrice: 13.99, //原价，全新价格
						newPrice: 10.65, // 现价
						tag:'nodebook',
						cart :'笔记本',
					},
					
					{
						id : 23,
						selever: 'tb135091923', //卖家名称
						title: '文具可爱创意四叶草韩国金属挂件迷你国文学习幸运', //商品名称
						ifnew: 75, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/331340056/O1CN01tmr9Tb1CHgqtnzuHQ_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 12.98, //原价，全新价格
						newPrice: 10, // 现价
						tag:'nodebook',
						cart :'笔记本',
					},
					{
						id : 24,
						selever: '圣香香', //卖家名称
						title: ' 【写意居】剑网三 星演秀娘cos 星演七秀成女 衣服配', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i4/113020020/O1CN01VLZyBF1C1CfHjdezO_!!0-saturn_solar.jpg_200x200.jpg',
						oldPrice: 1100.00, //原价，全新价格
						newPrice: 900.00, // 现价
						tag:'cosclothes',
						cart :'cos衣服',
					},
					{
						id : 25,
						selever: '东哥哥的人生', //卖家名称
						title: ' 二手闲置女士衣服羊绒衫套头圆领长袖秋冬保暖衣服', //商品名称
						ifnew: 78, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2536199060/O1CN010JXAVv2GnX8gBNFhb_!!2536199060.jpg_360x360Q90.jpg_.webp',
						oldPrice: 670, //原价，全新价格
						newPrice: 500, // 现价
						tag : 'choths',
						cart :' 衣服',
					},
					{
						id : 26,
						selever: 'jamielau313', //卖家名称
						title: '二手 仙剑奇侠传六 仙剑6 明绣 cos cosplay衣服全套渐变', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/162626278/TB2ze85aabyQeBjy1XbXXa9yXXa_!!162626278.jpg_360x360Q90.jpg_.webp',
						oldPrice: 650, //原价，全新价格
						newPrice: 300, // 现价
						tag:'cosclothes',
						cart :'cos衣服',
					},
					
					{
						id : 27,
						selever: 'ffantasy520', //卖家名称
						title: 'cos服 魔法少女小圆 巴麻美 衣服 头饰 帽子 全套', //商品名称
						ifnew: 87, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1029570186/O1CN01wrxbGq1DFEL2NLSG8_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 270.00, //原价，全新价格
						newPrice: 230, // 现价
						tag:'cosclothes',
						cart :'cos衣服',
					},
					{
						id : 28,
						selever: 'willowyc', //卖家名称
						title: '实拍败家女闲置女装二手旧衣服装论按斤打包称重甩卖', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/390170755/TB29DLWj3xlpuFjy0FoXXa.lXXa_!!390170755.jpg_360x360Q90.jpg_.webp',
						oldPrice: 452, //原价，全新价格
						newPrice: 352.99, // 现价
						tag:'clothes',
						cart :'衣服',
					},
					{
						id : 29,
						selever: '秀美猪猪商城', //卖家名称
						title: ' 100%秋季新品纯棉长袖t恤男圆领秋衣打底衫潮男t恤', //商品名称
						ifnew: 67, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i3/133275759/O1CN01BHY72o1sPfiGsN4ty_!!0-saturn_solar.jpg_200x200.jpg',
						oldPrice: 360.55, //原价，全新价格
						newPrice: 320.33, // 现价
						tag:'clothes',
						cart :'衣服',
					},
					
					{
						id : 30,
						selever: 'sgfchjgi', //卖家名称
						title: '裘皮、皮草、狐狸毛衣服干洗、狐狸毛服装干洗服务（短', //商品名称
						ifnew: 87, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/53520996/O1CN01PIhiA51JED6VdWKZh_!!53520996.jpg_360x360Q90.jpg_.webp',
						oldPrice: 423, //原价，全新价格
						newPrice: 242.22, // 现价
						tag:'clothes',
						cart :'衣服',
					},
					{
						id : 31,
						selever: 'xycdx007', //卖家名称
						title: '临期L 劲仔手撕素肉23g香辣麻辣素零食豆干制品湖南休闲', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/47572845/O1CN01J0eZM01Wt3ZuXkMuc_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 1.00, //原价，全新价格
						newPrice: 1.00, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 32,
						selever: '艾屋品牌', //卖家名称
						title: '海子仁巴西手剥松子休闲食品开口手拨松子坚果炒货', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/725677994/O1CN01jBTOsB28vIwFDMdtP_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 148.00, //原价，全新价格
						newPrice: 148.00, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 33,
						selever: '墨居一分二', //卖家名称
						title: '【正版二手】品质生活·烘焙课堂：全家最爱的小甜点、小零', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1217420099/O1CN01bd0UzM1CbO0825wTr_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 8.69, //原价，全新价格
						newPrice: 8.69, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 34,
						selever: '良品铺子旗舰店', //卖家名称
						title: ' 良品铺子零食大礼包整箱送女友超大巨型包网红爆款', //商品名称
						ifnew: 67, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/619123122/O1CN01WqVckX1YvvJGdRutB_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 19.66, //原价，全新价格
						newPrice: 12.99, // 现价
						tag:'food',
						cart :'零食',
					},
					
					{
						id : 35,
						selever: '东成食品专营', //卖家名称
						title: '金磨坊60包零食礼包麻辣网红小', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1636772035/O1CN01LsiQdA1Qu4mizMqtc_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 52, //原价，全新价格
						newPrice: 25, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 36,
						selever: '来伊份官方旗舰店', //卖家名称
						title: ' 来伊份零食贩卖机小吃解馋小零食休闲食品大全送女', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://picasso.alicdn.com/imgextra/863037/O1CNA1Pimgrender863037O1CN01cVHINu1YvvJIg17wF_!!0-item_pic.jpg?backup_url=O1CN01cVHINu1YvvJIg17wF_!!0-item_pic.jpg&p_context=eyJiaXoiOiJtYWMiLCJidWNrZXRJZCI6IkMiLCJjaGFubmVsIjoid3NlYXJjaGljb24taXRlbSIsIml0ZW1JZCI6IjQwMTAxNzI1OTMyIiwicGljVHlwZSI6InAxMSIsInJlbmRlckNvbmRpdGlvbiI6e30sInJlbmRlckRhdGEiOnt9fQ--&sign=863037b7caeddde3cd38287499b232bc&v=4.0_360x360Q90.jpg_.webp',
						oldPrice: 189.00, //原价，全新价格
						newPrice: 160.35, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 37,
						selever: '百草味旗舰店', //卖家名称
						title: '百草味手撕面包1kg蛋糕早餐代餐休闲小吃食品零食整', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/131425407/O1CN01tTW56m1poSJa2F4v3_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp ',
						oldPrice: 26.90, //原价，全新价格
						newPrice: 25, // 现价
						tag:'food',
						cart :'零食',
					},
					
					{
						id : 38,
						selever: '卫龙食品旗舰店', //卖家名称
						title: ' 卫龙魔芋爽辣条魔芋素毛肚素肉好吃办公室零食小吃', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/4197172177/O1CN01slNDrV1Rx6zriccvG_!!4197172177.jpg_360x360Q90.jpg_.webp',
						oldPrice: 14.90, //原价，全新价格
						newPrice: 13.55, // 现价
						tag:'food',
						cart :'零食',
					},
					
					{
						id : 39,
						selever: '三只松鼠旗舰店', //卖家名称
						title: '【三只松鼠_麻辣零食大礼包500g 】休闲食品鸭肉鸭', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2209639454804/O1CN01sJG3uw1lMHMbbRZtR_!!2209639454804.jpg_360x360Q90.jpg_.webp',
						oldPrice: 19.90, //原价，全新价格
						newPrice: 15.2, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 40,
						selever: '鱼臻多旗舰店', //卖家名称
						title: ' 香酥小黄鱼干黄花鱼酥脆即食小鱼小吃休', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2206812956355/O1CN01OXoRob1wodlg5gofZ_!!2206812956355.jpg_360x360Q90.jpg_.webp',
						oldPrice: 34.90, //原价，全新价格
						newPrice: 32.1, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 41,
						selever: '千牛花食品专营店广', //卖家名称
						title: '百草味零食大礼包肉食类夜宵充饥休闲', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2209035897788/O1CN012jmG1Q27OxKSOrtQg_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 125.10, //原价，全新价格
						newPrice: 120, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 42,
						selever: '优麦食品专营店', //卖家名称
						title: '甘源青豆官方旗舰店蒜香原味豌豆芥末味小吃', //商品名称
						ifnew: 67, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2209002050534/O1CN01fcdGeD1FocHlqVVa7_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 15.90, //原价，全新价格
						newPrice: 14.3, // 现价
						tag:'food',
						cart :'零食',
					},
					{
						id : 43,
						selever: '金美时旗舰店', //卖家名称
						title: ' 书包女初中生大容量新款韩版2022女生中学生高中生', //商品名称
						ifnew: 95, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/126786776/O1CN01X7OrDi1zvSTp8vXi1_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 20.99, //原价，全新价格
						newPrice: 18.56, // 现价
						tag:'shcoolbag',
						cart :'书包',
					},
					{
						id : 44,
						selever: '金美时旗舰店', //卖家名称
						title: '书包女初中生大容量新款韩版2022女生中学生高中生', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1046707508/O1CN01eEF6Kt25KiS4Ie67Y-1046707508.jpg_360x360Q90.jpg_.webp',
						oldPrice: 115.9, //原价，全新价格
						newPrice: 110.2, // 现价
						tag:'shcoolbag',
						cart :'书包',
					},
					
					{
						id : 45,
						selever: 'edison箱包旗舰店', //卖家名称
						title: '爱迪生初中生书包男中学生2022新款超大容量双肩包', //商品名称
						ifnew: 45, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/748793950/O1CN01p2vW4n1f39BrXqPFs_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 157.50, //原价，全新价格
						newPrice: 130.1, // 现价
						tag:'shcoolbag',
						cart :'书包',
					},
					{
						id : 46,
						selever: 'kangol旗舰店', //卖家名称
						title: ' KANGOL中号双肩包女大学生简约百搭运动背包防水', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://picasso.alicdn.com/imgextra/O1CNA1Zq0BnC1ETGCuRZs48_!!3421620352-0-psf.jpg_360x360Q90.jpg_.webp',
						oldPrice: 449.10, //原价，全新价格
						newPrice: 449.10, // 现价
						tag:'shcoolbag',
						cart :'书包',
					},
					{
						id : 47,
						selever: '当当网官方旗舰店', //卖家名称
						title: ' 【当当网 小嘉推荐】你可以生气但不要越想越气 温柔', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/33010900/O1CN01dDQACK1IWFEssN20W_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
						oldPrice: 19.90, //原价，全新价格
						newPrice: 15.5, // 现价
						tag:'shcoolbag',
						cart :'书包',
					},
					{
						id : 48,
						selever: '凤凰新华书店旗舰店', //卖家名称
						title: '漫画儿童心理学 全套5册 小学生三四年级上册至六年', //商品名称
						ifnew: 67, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/747883302/O1CN01ysR8kl1aGMaRrgAYJ_!!747883302.jpg_360x360Q90.jpg_.webp',
						oldPrice: 19.80, //原价，全新价格
						newPrice: 19.80, // 现价
						tag:'book',
						cart :'书本',
					},
					{
						id : 49,
						selever: '博库旗舰店', //卖家名称
						title: ' 三体全集正版共3册 刘慈欣科幻小说全套作品集 雨果', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i3/940910178/O1CN01zxudZl1DBZI0Sw8Iy_!!0-saturn_solar.jpg_200x200.jpg',
						oldPrice: 45.50, //原价，全新价格
						newPrice: 45.50, // 现价
						tag:'book',
						cart :'书本',
					},
					{
						id : 50,
						selever: '木子简图书专营店山', //卖家名称
						title: ' 名家获奖绘本3–6岁 4-5岁儿童绘本3一6幼儿绘本阅读', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://picasso.alicdn.com/imgextra/O1CNA18S6J2b1CP1JBwkKHY_!!101450072-0-psf.jpg_360x360Q90.jpg_.webp',
						oldPrice: 23.80, //原价，全新价格
						newPrice: 23.80, // 现价
						tag:'book',
						cart :'书本',
					},
					{
						id : 51,
						selever: '邺水朱华图书专营', //卖家名称
						title: '【现货速发】易经很容易真的曾仕强 正版易经真的很', //商品名称
						ifnew: 89, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i4/108962136/O1CN01Dgjkgz1ReKfj6QIII_!!0-saturn_solar.jpg_200x200.jpg',
						oldPrice: 24.50, //原价，全新价格
						newPrice: 20.2, // 现价
						tag:'book',
						cart :'书本',
					},
					{
						id : 52,
						selever: '乐乐趣图书专营店湖', //卖家名称
						title: ' 中国当代获奖儿童文学全10册一年级阅读课外书必读', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://img.alicdn.com/imgextra/i3/15940794/O1CN01fAPDho1Hjh8qZ4J9p_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
						oldPrice: 59.00, //原价，全新价格
						newPrice: 52.00, // 现价
						tag:'book',
						cart :'书本',
					},
					
					{
						id : 53,
						selever: '硕博图书专营店', //卖家名称
						title: '线装正版如果历史是一群喵1-10全套10册宋辽金夏篇', //商品名称
						ifnew: 97, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1049653664/O1CN01M9HgWZ1cw9nCdTtgZ_!!1049653664-0-lubanu-s.jpg_360x360Q90.jpg_.webp',
						oldPrice: 182.00, //原价，全新价格
						newPrice: 120, // 现价
						tag:'book',
						cart :'书本',
					},
					{
						id : 54,
						selever: '墨香天下图书专营店', //卖家名称
						title: ' 纽伯瑞国际儿童文学金奖小说系列全套12册中小学生', //商品名称
						ifnew: 76, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: ' ', // 备注
						imglink : 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2200607228172/O1CN01NFu7Fa2AEpODv3zMm_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
						oldPrice: 74, //原价，全新价格
						newPrice: 60, // 现价
						tag:'book',
						cart :'书本',
					},
					{
						id : 55,
						selever: '果麦官方旗舰店', //卖家名称
						title: '小嘉推荐小王子立体书珍藏版 小王子的奇想世界 3D', //商品名称
						ifnew: '全', // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						remaker: '', // 备注
						imglink : 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextrahttps://img.alicdn.com/imgextra/i2/3944105410/O1CN01vretIz1pppUFDYmv3_!!3944105410-0-alimamacc.jpg_360x360Q90.jpg_.webp',
						oldPrice: 169, //原价，全新价格
						newPrice: 169, // 现价
						tag:'book',
						cart :'书本',
					}
				],
			}
		},
		onReady() {
			let ScreenWid = 0;
			let msg = -1;
			
			uni.getSystemInfo({
				success(res) {
					ScreenWid = res.screenWidth;
				}
			})
			this.Width = ScreenWid;
			
		  const eventChannel = this.getOpenerEventChannel();
		  eventChannel.emit('acceptDataFromOpenedPage', {data: 'success'});
		  //eventChannel.emit('someEvent', {data: 'data from test page for someEvent'});
		  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
		  eventChannel.on('acceptDataFromOpenerPage', function(data) {
		    msg = data;
		  })
		  this.item = msg;
		}
	}
</script>

<style scoped>
	.mask{
		overflow: hidden;
		width: 50px;
		height: 15px;
		border-radius: 4px;
		margin-left: 6px;
		margin-bottom: 5px;
		border: solid 1px #dcdcdc;
	}
	.img{
		height: 200px;
	}
	.photo{
		position: relative;
		height: 400rpx;
		width:  auto;
		background-color: white;
		/*box-shadow: 5px 5px 5px 2px #d1d1d1 , -10px -2px 3px 2px #bdbdbd ; */
		box-sizing: border-box;
	}
	.page{
		height: 120rpx;
		width: auto;
		background-color: #e7e7e7;
	}
	.image_item{
		width: inherit;
		height: inherit;
	}
	.top_blur{
		position: absolute;
		height: 5px;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		z-index: 60;
	}
	.messa{
		position: absolute;
		height: 154px;
		box-shadow: 0 6px 0 0 #ebebeb;
	}
	.moneny{
		margin-top: 8px;
		margin-left: 10px;
		height: 30px;
		width: inherit;
	}
	.title{
		margin-top: 8px;
		width: inherit;
		height: 40px;
	}
	
	.sign{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		height: 14px;
		width: 22px;
		border: solid 1px #d9d9d9;
		border-radius: 5px;
	}
	
	.Good_nav{
		position: fixed;
		bottom: 0;
		height: 72px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f9f9f9;
		border-top: solid 1px #e7e7e7;
	}
	.chat{
		padding-left: 10px;
	}
	
	.select{
		display: flex;
		justify-content: center;
		width: 220px;
		height: 50px;
		border-radius: 30px;
		overflow: hidden;
		box-shadow: 0 0 0 2px rgb(255, 205, 55);
	}
	.join{
		width: 110px;
		height: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.join:nth-child(1){
		 background: linear-gradient(to left, rgb(237,109,0), rgb(255, 205, 55));
	}
	.join:nth-child(2){
		background: linear-gradient(to right, red, rgb(238, 24, 99));
	}
	.posi{
		position: absolute;
		bottom: 0;
		height:30px;
		width: inherit;
		border-top: solid 1px #f4f4f4;
	}
	.comment{
		position: absolute;
		top: 374px;
		height: 100px;
	}
	.nickname{
		position: absolute;
		top: 5px;
		left: 60px;
	}
	.content{
		position: absolute;
		left: 59px;
		width: 288px;
	}
	.comments_img{
		position: absolute;
		top:465px;
		left: 3%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		
	}
	.Good_detail{
		position: absolute;
		top: 560px;
		height: 500px;
		box-shadow: 0 2px 0 8px #f4f4f4;
	}
	.Good_detail_more{
		height: 200px;
		border-radius: 5px;
		position: absolute;
		top: 34px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.detail_image{
		position: absolute;
		top: 800px;
	}
	.msg_comment{
		position: absolute;
		width: 200px;
		height: 20px;
		right: 10%;
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 13px;
		overflow: hidden;
	}
	.style1 {
		background-color: black;
	}
	.style2 {
		background-color: greenyellow;
	}
	.style3{
		background-color: rgb(191, 214, 73);
	}
	.style4{
		background-color: rgb(220, 222, 85);
	}
	.style5{
		background-color: rgb(214, 90, 52);
	}
</style>