<template>
	<view class="main_content">
	<view class="text_inform" >
	<uni-notice-bar  show-icon scrollable
	color="#AF8A54" background-color="white"
	showClose = true
	text="管理员: 禁止交易宠物,传播不良物品,图片,及不当评论,犯者必究!"/>
	</view>
	<swiper class="photo" 
			autoplay="true"
			circular = "true"
			next-margin="40px"
			indicator-color = "rgb(255, 205, 55)"
			indicator-active-color = "rgb(237,109,0)"
			indicator-dots = "true">
		<swiper-item class="page">
			<view class="page_1">
				<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/619123122/O1CN01zUFZkf1YvvJIKEqwV-619123122.jpg_360x360Q90.jpg_.webp" mode="scaleToFill" style="width: 360px;height: 120x;"></image>
			</view>
		</swiper-item>
		<swiper-item class="page">
			<view class="page_2">
				<image src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/4011580509/O1CN01yhVMZv1FdAOALfto5_!!4011580509.jpg_360x360Q90.jpg_.webp" mode="scaleToFill" style="width: 360px;height: 120x;"></image>
			</view>
		</swiper-item>
		<swiper-item class="page">
			<view class="page_3">
				<image src="https://img.alicdn.com/imgextra/i2/390690019/O1CN01NISFsb1C0kJhMEL3i_!!0-saturn_solar.jpg_200x200.jpg" mode="scaleToFill" style="width: 360px;height: 120x;"></image>
			</view>
		</swiper-item>
		<swiper-item class="page">
			<view class="page_4">
				<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/3401213738/O1CN01AwHjHl1dU39FIaRTz_!!3401213738.jpg_360x360Q90.jpg_.webp" mode="scaleToFill" style="width: 360px;height: 120x;"></image>
			</view>
		</swiper-item>
	</swiper>
	
	
	<view class="nav_instrocter">
	<view class="search_bottom">
		<label class="item-text" @click="changecolor(1,$event)" :class= "curIndex == 1 ? 'active' : ''" >
			最新
		</label>
		<label class="item-text" @click="changecolor(2,$event)" :class= "curIndex == 2 ? 'active' : ''" >
			美妆
		</label>
		<label class="item-text" @click="changecolor(3,$event)" :class= "curIndex == 3 ? 'active' : ''" >
			书本
		</label>
		<label class="item-text" @click="changecolor(4,$event)" :class= "curIndex == 4 ? 'active' : ''" >
			需求
		</label>
		<uni-transition
		mode-class="fade"
		ref="ani" :show="true">
			<label class=" instrocter" ></label>
		</uni-transition>
	</view>
	<view class="nav_instrocter_filter">
		<label class="item-text-bottom"  @click="rank" >
			排序
		<view :class = "rotate1 ? 'go' : 'tem'" style = "display: inline-block;">
			<uni-icons  type="arrowdown" color="#666" size="17"/>
		</view>
		
		</label>
		<label class="item-text-bottom" @click="price">
			价格
			<view :class = "rotate2 ? 'go' : 'tem'" style = "display: inline-block;">
				<uni-icons  type="arrowdown" color="#666" size="17"/>
			</view>
		</label>
		
						
		<label class="item-text-bottom"  @click="nav_class">
				分类
			<uni-icons style = "position: relative;top: 2px;" type="calendar-filled" color="#666" size="17"/>
		</label>
		
		<label class="vertical-line"></label>

		<label class="item-text-bottom">
			筛选
		<uni-icons class="settings-filled" type="settings-filled" size="18"></uni-icons>
		</label>
		
	</view>
	
		<view  :class="height1 ? 'pullDown' : 'pullDown_hidden' ">
				

				<view class="colllape_content"  @click="cart(1)">
					<text>价格降序</text>
				</view>

				<view class="colllape_content" @click="cart(2)">
					<text>价格升序</text>
				</view>
			</view>
			
		<view  :class="height2 ? 'pull_price' : 'pullDown_hidden' ">
				<view class="pull_price_item">
					<text> 价格范围（元）</text>
					<view  class="input" style="position: absolute;left: 15px;" :style="inputstyle">
						<view style="position :relative; width: 40px;margin-left: 8px;" :style="text_position">
							<input :value="minprice"  type="number" maxlength="10" placeholder = "最低价"
									@blur="Getvaluel($event)"/>
						</view>
					</view>
					
					<label 
					style="
					display: inline-block;width: 20px;height: 2px;background-color:#e7e7e7;
					position: relative;  top: 32px;left: 140rpx;
					"></label>
					
					
					<view  class="input"  style="position: absolute;right: 25px;" :style="inputstyle"> 
						<view style="position :relative; width:40px;margin-left: 8px;" :style="text_position">
							<input  :value="maxprice" type="number" maxlength="10" placeholder = "最高价"
									@blur="Getvaluer($event)"/>
						</view>
					</view>
					
					<view style="
					width: 354px;height:95px;
					position: relative;top: 120rpx;
					">
						<view class = "price_button" style="left: 4%; transition: all 250ms;" :style= "stylecart1" @click = "chengenum(1);boderstyle()">
							<text style="position: absolute; top: 3px;left: 8px;">100元以下</text>
						</view>
						<view class = "price_button" style="left: 38%; transition: all 250ms;" :style= "stylecart2"  @click = "chengenum(2);boderstyle()">
							<text style="position: absolute; top: 3px;left: 8px; ">200元以下</text>
						</view>
						<view class = "price_button" style="right: 4%; transition: all 250ms;"  :style= "stylecart3"  @click = "chengenum(3);boderstyle()">
							<text style="position: absolute; top: 3px;left: 8px;">400元以下</text>
						</view>
					</view>
					
					<view style="position: absolute;left: 4%;margin-top:5px ; width : 100px;height: 25px;
						border-radius: 25px; border: solid 1px #d5d5d5;" @click="minprice = '';maxprice = '';stylecart1={};stylecart2 = {}; stylecart3 = {};text_position = {};">
						<text style="position: absolute;top: 3px;left: 36px;font-weight: 900;"> 重置 </text>
					</view>
					<view style="position: absolute; right: 7%; width: 200px;height: 33px;background-color: orangered;
						border-radius: 25px;display: flex;justify-content: center;align-items: center;" @click="cart(4)">
					<text style="position: absolute;top: 5px;left: 90px;font-weight: 900;color: white;"> 确定 </text>
					</view>
					
				</view>
			</view>
	</view>
	
	<view class="swiper_content">
		<swiper class="swiper_css" 
		easing-function = "easeOutCubic"
		:current="current_page"
		@animationfinish = "swiper_change($event)">
			<swiper-item>
				<view>
					<G1New></G1New>
				</view>
			</swiper-item>
			<swiper-item>
				<view>
					<G1Makeup></G1Makeup>
				</view>
			</swiper-item>
			<swiper-item>
				<view>
					<G1Book></G1Book>
				</view>
			</swiper-item>
			<swiper-item>
				<view> 
					<G1Other></G1Other>
				</view>
			</swiper-item>
		</swiper>
	</view>
	</view>
</template>

<script>
	import G1New  from '../components/home_content/G1_new.vue'
	import G1Makeup from '../components/home_content/G1_makeup.vue'
	import G1Book from '../components/home_content/G1_book.vue'
	import G1Other from '../components/home_content/G1_other.vue'
		
	export default{
			components:{
				G1New,
				G1Makeup,
				G1Book,
				G1Other
			},
			data(){
				return{
					curIndex : 1,
					current_page : 0,
					code : 0,
					height1 : false,
					rotate1 : false,
					height2 : false,
					rotate2 : false,
					inputstyle : { },
						
					stylecart1 : {},
					stylecart2 : {},
					stylecart3 : {},
					ifselect1 : false,
					ifselect2 : false,
					ifselect3 : false,
					stylecarttrans : {
						backgroundColor : '#EE3F4D',
						
					},
					text_position : {},
				
					
					minprice : '',
					maxprice : '',
					// imageAarray :[
					// 	{
					// 		name: 'colorkey唇釉',
					// 		src1 : 'https://gw.alicdn.com/imgextra/i4/2210843787782/O1CN01ZBcq1i27MCyPzpycB_!!2210843787782.jpg_Q75.jpg_.webp',
					// 		src2 : 'https://gw.alicdn.com/imgextra/i3/857532066/O1CN01fVIpkW1R8H237A9Vb_!!857532066.jpg_Q75.jpg_.webp'
					// 	},
					// 	{
					// 		name:'美妆蛋',
					// 		src1 : 'https://img.alicdn.com/imgextra/i3/2526051849/O1CN01PbDXUN1PWt78aFM8O_!!2526051849.jpg_430x430q90.jpg',
					// 		src2 : 'https://gw.alicdn.com/imgextra/i3/2258006982/O1CN01mkfwfL21Ro74QzfrC_!!2258006982.jpg_Q75.jpg_.webp',
					// 		src3 : 'https://gw.alicdn.com/imgextra/i1/2258006982/O1CN01Z1nJxL21Ro6uPSrCM_!!2258006982.jpg_Q75.jpg_.webp'
					// 	},
					// 	{
					// 		name : '无机化学',
					// 		src1 : 'https://gw.alicdn.com/imgextra/O1CNA1vlCGnW1WH2j37x3TO_!!288902762-0-psf.jpg_Q75.jpg_.webp',
					// 		src2 : 'https://gw.alicdn.com/imgextra/O1CN01lpK11T1CP18S98Qfa-101450072.jpg_Q75.jpg_.webp'
					// 	}
					// ],
				}
			},
			onReady() {
					this.$refs.ani.init({
						duration: 250,
						timingFunction: 'ease',
						transformOrigin: 'center',
					})
					
					// uni.removeTabBarBadge(OBJECT)
				},
			methods:{
				Getvaluel(ev){
					this.minprice = ev.detail.value;
				},
				Getvaluer(ev){
					this.maxprice = ev.detail.value;
				},
				// getLocationFun() {
				// 		 // return new Promise((resolve, reject) => {
				// 		    uni.getLocation({
				// 		      type: 'gcj02',
				// 		      success: function (res) {
				// 				console.log(res);
				// 		        resolve(res)
				// 		      },
				// 		      fail: function (error) {
				// 		        console.log('执行',error)
				// 		        reject(error)
				// 		      }
				// 		    });
						  
						
				// 	},
				cart(code){
					
					if(code ==1 || code == 2){
						
						uni.$emit('rankcode',{value : code});
					}else if(code == 4){
						uni.$emit('rankcode',{value : code ,min : this.minprice , max : this.maxprice});
					}
					
					
				},
				// tips(){
				// 	uni.showModal({
				// 		title: '提示',
				// 		content: '由于暂时未开发后台系统，该功能暂不支持，望见谅！',
				// 		showCancel:false,
						
				// 	})
				// },
				nav_class(){
					uni.navigateTo({
						url:'/pages/class/class'
					})
				},
				
				rank(){
					
					let page = this.current_page;
					
					if(page != 3){
						if(this.height2){
							this.height2 = false;
						}
						this.rotate1 = !this.rotate1;
						this.height1 = !this.height1;
					}
					
					
					//this.icon_style1 = { 'rotate' : '180deg'}
				},
				price(){
					let page = this.current_page;
					
					if(page != 3){
						
						if(this.height1){
							this.height1 = false;
						}
						this.rotate2 = !this.rotate2;
						this.height2 = !this.height2;
					}
				},
				chengenum(num){
					this.stylecart1 = {};
					this.stylecart2 = {};
					this.stylecart3 = {};
					if(num == 1){
						this.ifselect1 = !this.ifselect1;
						this.text_position = {
							left : '9px'
						}
						this.minprice = '0';
						this.maxprice = '100';
						if(this.ifselect1){
						this.stylecart1 = this.stylecarttrans;
						}else{
							this.minprice = '';
							this.maxprice = '';
							this.stylecart1 = {};
							this.text_position = {};
						}
						}else if(num == 2){
							this.ifselect2 = !this.ifselect2;
							this.stylecart2 = this.stylecarttrans;
							this.text_position = {
								left : '9px'
							}
							this.minprice = '0';
							this.maxprice = '200';
							if(this.ifselect2){
							this.stylecart2 = this.stylecarttrans;
							}else{
								this.minprice = '';
								this.maxprice = '';
								this.stylecart2 = {};
								this.text_position = {};
							}
						}else{
							this.ifselect3 = !this.ifselect3;
							this.stylecart3 = this.stylecarttrans;
							this.text_position = {
								left : '9px'
							}
							this.minprice = '0';
							this.maxprice = '400';
							if(this.ifselect3){
							this.stylecart3 = this.stylecarttrans;
							}else{
								this.minprice = '';
								this.maxprice = '';
								this.stylecart13= {};
								this.text_position = {};
							}
						}
					
				},
				boderstyle(){
					this.inputstyle = {
						border : 'solid 1px black',
						};
				},
				changecolor(index,event){
					this.curIndex = index;
					let change_des = event.currentTarget.offsetLeft - 10;
					let tran_1 = change_des.toString();
					this.$refs.ani.step({
						translateX:  tran_1 +'px'
					})
					this.$refs.ani.run();
					this.current_page = index - 1;
					
				},
				swiper_change(ev){
					let index = ev.detail.current;
					let tras_des = 0;
					switch(index){
						case 0:
							tras_des = 0;
							break;
						case 1:
							tras_des = 45;
							break
						case 2:
							tras_des = 88;
							break
						case 3:
							tras_des = 130;
							break
						default:
						break;
					}
					let tran_2 = tras_des.toString();
					this.$refs.ani.step({
						translateX:  tran_2 +'px'
					})
					this.$refs.ani.run();
					this.curIndex = index + 1;
					
					this.current_page = index;
				}
			}
	}	
</script>

<style>
	.main_content{
		position: relative;
		top: 65rpx;
	}
	.text_inform{
		position: relative;
		top: 5px;
		padding-top: 10px;
		z-index: 15;
	}
	.swiper_content{
		position: relative;
		top: 5px;	
	}
	.swiper_css{
		height: 600px ;
	}
	.search_bottom{
		margin-top: 10px;
		margin-left: 10rpx;
		height: 28px;
	}
	.item-text-bottom{
		position: absolute;
		margin-top: 5px;
	}
	.item-text-bottom:nth-child(1){
		width : 50px;
		left: 15px;
	}
	.item-text-bottom:nth-child(2){
		left: 105px;
	}
	.item-text-bottom:nth-child(3){
		left: 200px;
	}
	.item-text-bottom:nth-child(5){
		
		right: 30px;
	}
	.item-text {
		font-size: 30rpx;
		margin-top: 5px;
		margin-left: 8px;
		text-anchor: middle;
		vertical-align:bottom;
	}
	/* item-text:nth-child(2){
		left: 58px;
	}
	.item-text:nth-child(3){
		left: 105px;
	}
	.item-text:nth-child(4){
		left: 160px;
	} */
	.active {
	    color: red;
	}
	.instrocter{
		position: absolute;
		display: inline-block;
		margin-top: 5rpx;
		margin-left: 26rpx;
		width: 32rpx;
		height: 6rpx;
		border-radius: 6rpx;
		background-color: red;
	}
	.nav_instrocter_filter{
		display: flex;
		position: relative;
		top: 5px;
		font-size: 13px;
		vertical-align: center;
		height: 35px;
		width: auto;
		border-top:solid 1px #e7e7e7;

	}
	.photo{
		position: relative;
		height: 300rpx;
		width:  auto;
		background-color: white;
		margin-top: 3px;
		/*box-shadow: 5px 5px 5px 2px #d1d1d1 , -10px -2px 3px 2px #bdbdbd ; */
		border-top: solid 5px #e7e7e7;
		box-sizing: border-box;
		z-index: 15;
	}
	.nav_instrocter{
		
		position: sticky;
		top:  47px;
		/* border-top: solid 1px #DCDCDC; */
		background-color: white;
		margin-top: 5px;
		z-index: 20;
		padding-top: 3px;
		padding-bottom: 2px;
		box-shadow: 0 5px 5px 3px #e7e7e7 , 0 -5px 4px 2px #e7e7e7;
	}
	.page{
		height: 120rpx;
		width: auto;
		background-color: #e7e7e7;
		border-radius: 20px;
	}
	.vertical-line{
		position: absolute;
		height: 20px;
		width: 2px;
		top: 5px;
		right: 200rpx;
		background-color: #e7e7e7;
	}
	.settings-filled{
		position: relative;
		top: 2px;
	}
	
	.pullDown{
		height: 52px;
		transition:all 250ms; 
		/* transform:translateY(-30px) ; */
	}
	.pullDown_hidden{
		overflow-y: hidden;
		height: 0;
		transition:all 250ms; 
	}
	.pull_price{
		overflow-y: hidden;
		height:170px;
		transition:all 250ms; 
	}
	.pull_price_item{
		position: relative;
		z-index: 0;
		font-size: 14px;
		margin-top: 15px;
		margin-left: 10px;
	}
	.colllape_content{
		margin-left: 10px;
		margin-top: 10px;
		font-size: 13px;
	}
	.go{
		transform: rotate(-180deg);
		transition: all 250ms;
	}
	.tem{
		transition: all 250ms;
	}
	.input{
		position: absolute;
		display: flex;
		flex-direction: row;
		justify-content: center;
		
		width: 225rpx; 
		margin-top: 30rpx;  
		border: solid 1px #e7e7e7;
		border-radius: 15px;
		font-size: 13px;
		
	}
	.price_button{
		position: absolute; 
		width: 85px;
		height:25px;
		background-color: #eeeeee;
		border-radius: 20px;
		
	}
</style>