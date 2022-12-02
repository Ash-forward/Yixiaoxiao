<template>
	<view class="mask" :style="ifshow"></view>
	<view class="box_price" :style="[{left : ScreenWidth/6 + 'px' },ifshow]" >
			<view style="color: darkorange;  width: 82px;height: 20px;margin-top: 10px;border-bottom: solid 1px #e7e7e7;">
				请输入金额
			</view>
			
			<view class="input" style="position: absolute;top: 60px;border: solid 1px #dcdcdc;border-radius: 8px;transition: all ease-in 250ms;" :style="input_style" >
			<input type="digit" placeholder="请输入你的预算:"  confirm-type="done" style="position: relative;left: 8px;"
					@focus="focu" @blur="blu($event)"  @confirm="box_style"/>
			</view>
			
			<view style="position: absolute;width: 100%;height:40px;bottom: 0;border-top: solid 1px #dcdcdc;display: flex;justify-content: center;align-items: center;"
				   @click="box_style">
					<text style="color: grey;">确定 </text>
				</view>
	</view>
	<view class="title" style="width: 320px;">
		发布需求：
		<view style="position: absolute; right: 10px; top: 7px; width: 60px;height: 20px;
					display: inline;font-size: 14px;font-weight: 400;background-color: whitesmoke;
					border-radius: 12px;">
					<text style="position: absolute;left: 16px;color: orange;"> 
					 发布
					</text>  
					</view>
	</view>
	
	<view :style="{width : ScreenWidth +'px',height : ScreenHeight +'px'}" class="content">
		<label style="display : block; position: absolute;width: 6px;height: 20px;
					background-color:rgb(0, 213, 199);left: 13px;border-radius: 8px;
					top: 2px;"></label>
					<text style="position: absolute;left: 28px;font-weight: 600;">请选择：</text>
	
		<view class="select" :style="{width : ScreenWidth + 'px'}">
			<view  style="transition: all ease-in 250ms;"  class="select_cart" @click="changeColor(1)" :style="style1">
				电子设备
			</view>
			<view  style="transition: all ease-in 250ms;"  class="select_cart" @click="changeColor(2)" :style="style2">
				美妆
			</view>
			<view  style="transition: all ease-in 250ms;"  class="select_cart" @click="changeColor(3)" :style="style3">
				书本
			</view>
			<view  style="transition: all ease-in 250ms;"  class="select_cart" @click="changeColor(4)" :style="style4">
				电子手表
			</view>
			
			<view  style="transition: all ease-in 250ms;margin-right: 10px;"  class="select_cart" @click="changeColor(5)" :style="style5" >
				其他
			</view>
		</view>
		
		<view style="position: absolute; top: 115px;width: 185px;
					 height: 26px;">
		<label style="display : block; position: absolute;width: 6px;height: 20px;
					background-color:rgb(0, 213, 199);left: 13px;border-radius: 8px;
					top: 2px;"></label>
					<text style="position: absolute;left: 28px;font-weight: 600;">请描述你的需求：</text>
		</view>
		
		
		<textarea :style="{width : ScreenWidth - 10 + 'px'}" placeholder-style="color:#e2e2e2" placeholder="好的描述,能够更快的找到你想要的宝贝哦!" class="text_input"/>
		<view  class="photo" @click="select_photo" :style="style_photo">
			<uni-icons type="camera-filled" size="55" style = "position: absolute;top: 12px;"></uni-icons>
			<view style="font-size: 13px;position: absolute;bottom: 5px;"> 上传相似照片</view>
		</view>
		
		<view class="up_photo" :style="{width : ScreenWidth - 95 + 'px'}">
			<scroll-view scroll-x="true"
                     class="scroll-X"
                     scroll-with-animation = "true"
					 scroll-anchoring = "true">
				<view v-for="(data ,index) of imgarr" :key="index" class="scroll-item">
					
					<image :src="data.path" style="position:relative;height: 90px;width: 90px;" mode="scaleToFill" @click="preview(index)">
					
					
					</image>
					<view style="position: absolute;top: 0;" @click="delimg(index)">
						<uni-icons type="closeempty" size="17"></uni-icons>
					</view>
				</view>
			</scroll-view>
			
		</view>
		
		<view class="price">
			<image src="../../static/money.png" style="margin-left:10px;  width: 25px;height: 25px;" mode = "aspectFill"></image>
			<text style="position: relative;left: 10px;font-size: 13px;top: -2px;"> 预算 </text>
			<text style="position: absolute;right: 30px;font-size: 13px;color: #dcdcdc;" @click="fill_price">{{price}}</text>
			<uni-icons type="right" size="17" style = "position: absolute;right: 8px;"></uni-icons>
		</view>
		
		<view class="advice" :style="{width : ScreenWidth + 'px'}">
			
			<view style="  position: absolute;   bottom: 5px;  width: 272px;height: 18px;font-size: 13px;">
			<text  style= "  color: red;">注意：</text>
			<text>请勿发布低俗，或其他不正当的需求！</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				ScreenWidth : 0,
				ScreenHeight : 0,
				index : 0,
				style1 : { },
				style2 : { },
				style3 : { },
				style4 : { },
				style5 : { },
				style_photo : {},
				input_style : {},
				ifclick : false,
				ifshow : { 
					display :'none',
					},
				
				imgarr : [],
				value : '',
				price : '填写预算',
			}
		},
		onReady() {
			let Width = 0;
			let Height = 0;
			uni.getSystemInfo({
				success(res) {
					Width = res.screenWidth;
					Height = res.screenHeight - 240;
				}
			})
			this.ScreenWidth = Width;
			this.ScreenHeight = Height;
		},
		methods:{
			box_style(){
				let value_str = [...this.value];
				let isnan = false;
				this.ifshow = {
					zIndex : 0,
					opacity : 0,
					transition :'all ease-in 250ms',
				}
				
				value_str.forEach(item => {
					if(isNaN(item)){
						isnan = true;
					}
				})
				
				if(isnan == true){
					uni.showModal({
						title:'提示',
						content:'预算中包含了非数字成分！',
						showCancel:false,
					})
					this.price = '填写预算';
				}else if(this.value == ''){
					this.price = '填写预算';
				}else{
					
				this.price = this.value;
				
				}
			},
			preview(idx){
				let imgarr = this.imgarr;
				uni.previewImage({
							urls: imgarr[idx].path,
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
			},
			focu(){
				this.input_style = {
					border : 'solid 1px red',
				}
			},
			blu(ev){
				let value_str = [...this.value];
				let isnan = false;
				this.value = ev.target.value;
				console.log(this.value)
				this.input_style = {
					border : 'solid 1px #dcdcdc',
				}
				
				value_str.forEach(item => {
					if(isNaN(item)){
						isnan = true;
					}
				})
				
				if(isnan == true){
					uni.showModal({
						title:'提示',
						content:'预算中包含了非数字成分！',
						showCancel:false,
					})
					this.price = '填写预算';
				}else if(this.value == ''){
					this.price = '填写预算';
				}else{
					
				this.price = this.value;
				
				}
			},
			select_photo(){
				let _this = this;
				uni.chooseImage({
					count: 9,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {
						_this.index++;
						if(_this.index == 10){
							uni.showModal({
								title:'提示',
								content:'最多上传9张图片！',
								confirmText:'确定',
								showCancel:false,
								
							})
						}else{
							_this.imgarr.push({
								'path' : res.tempFilePaths,
							})
						}
					}
					});
			},
			delimg(key){
				let _this = this;
				uni.showModal({
					title:'提示',
					content:'确定要删除图片吗？',
					cancelText:'取消',
					confirmText:'确定',
					success(res) {
						if(res.confirm){
							_this.imgarr.splice(key,1);
							_this.index--;
						}
					}
					
				})
			},
			fill_price(){
				this.ifshow = {
					zIndex : 88,
					transition :'all ease-in 250ms',
				}
			},
			changeColor(id){
				this.ifclick = !this.ifclick;
				this.style1 = { };
				this.style2 = { };
				this.style3 = { };
				this.style4 = { };
				this.style5 = { };
				switch (id)
				{
					case 1:
					if(this.ifclick){
						this.style1 = { 
							backgroundColor : '#ffb3a7',
							color : '#ff2d51'
						};
						
					}else{
						this.style1 = { };
					}
					break;
					case 2:
					if(this.ifclick){
						this.style2 = { 
							backgroundColor : '#ffb3a7',
							color : '#ff2d51'
						}
						
					}else{
						this.style2 = {};
					}
					
					break;
					case 3:
					if(this.ifclick){
						this.style3 = { 
							backgroundColor : '#ffb3a7',
							color : '#ff2d51'
						}
					}else{
						this.style3 = { };
					}
					
					break;
					case 4:
					if(this.ifclick){
						this.style4 = { 
							backgroundColor : '#ffb3a7',
							color : '#ff2d51'
						}
					}else{
						this.style4 = {};
					}
					break;
					case 5:
					if(this.ifclick){
						this.style5 = { 
							backgroundColor : '#ffb3a7',
							color : '#ff2d51'
						};
					}else{
						this.style5 = {};
						
					}
					break;
					default :
					break;
				}
				
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.title{
		position: absolute;
		top: 50rpx;
		left: 60rpx;
		font-size: 25px;
		font-weight: 800;
	}
	.content{
		position: absolute;
		top: 135rpx;
	}
	.select{
		position: absolute;
		top: 40px;
		height: 52px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
	}
	.select_cart{
		position: relative;
		top: 5px ;
		font-size: 13px;
		width: 60px;
		height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
		margin-left: 10px;
		background-color: #f0f0f0;
	}
	
	.text_input{
		position: absolute;
		top: 145px;
		height: 100px;
		margin-left: 5px;
	}
	.photo{
		position: absolute;
		width: 90px;
		height: 90px;
		top: 252px;
		display: flex;
		justify-content: center;
		margin-left: 8px;
		border-radius: 5px;
		background-color: #f0f0f0;
		transition: all ease-out 250ms;
	}
	.price{
		position: absolute;
		top: 374px;
		display: flex;
		align-items:  center;
		height: 40px;
		width: 100%;
		border: solid 1px #f0f0f0;
	}
	.advice{
		position: absolute;
		height: 150px;
		bottom: 8px;
		display: flex;
		justify-content: center;
	}
	.up_photo{
		position: absolute;
		height: 100px;
		top:247px;
		left: 105px;
		display: flex;
		align-items: center;
		margin-left: 3px;
	}
	.scroll-X{
		height: 100px;
		width: inherit;
		white-space: nowrap;
		margin-top: 10px;
		.scroll-item{
			height: 90px;
			width: 90px;
			border-radius: 8px;
			overflow: hidden;
			display: inline-block;
		}
	}
	.mask{
		display: flex;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.6;
	}
	.box_price{
		position: absolute;
		display: flex;
		justify-content: center;
		width: 250px;
		height: 150px;
		top: 30%;
		backdrop-filter: blur(100px);
		border-radius: 20px;
		background-color: #ffffff;
	}
</style>