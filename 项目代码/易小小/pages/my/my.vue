<template>
	<view class="userdata" >
		<view class="blur_back"></view>
			<view class="headshot">
				<image src="../../static/headshot.png" style="width: 60px;height: 60px;" mode ="aspectFill"></image>
			</view>
			<view class="nickname">
				<h1>
					 {{Userdata.nikename}}
					
				</h1>
			</view>
			
	</view>
	<view style="position: fixed;">
	<view class="column">
		<view class="sell">
			<uni-icons type="shop-filled" size="50"></uni-icons>
			<text style="font-size: 16px;font-weight: 700;">我卖的</text>
		</view>
		<view style="width: 2px;height: 55px;background-color: #fff;position: absolute;left: 48%;"></view>
		<view class="pulish">
			<uni-icons type="camera-filled" size="50"></uni-icons>
			<text style="font-size: 16px;font-weight: 700;">我发布的</text>
		</view>
	</view>
	
	<view class="detail">
		<view class="cart" :style="{width : Swidth + 'px'}">
			<uni-icons type="shop" size="25" color="rgb(244, 207, 22)" style="margin-left: 10px;"></uni-icons>
			<text style="margin-left:15px;font-size: 16px;font-weight: 600;"> 我的订单 </text>
			<uni-icons type="right" size="25" style = "position: absolute; left: 85%;"></uni-icons>
		</view>
		<view class="cart" :style="{width : Swidth + 'px'}">
			<uni-icons type="wallet-filled" size="25" color="rgb(244, 207, 22)" style="margin-left: 10px;"></uni-icons>
			<text style="margin-left:15px;font-size: 16px;font-weight: 600;"> 待付款 </text>
			<uni-icons type="right" size="25" style = "position: absolute; left: 85%;"></uni-icons>
		</view>
		<view class="cart" :style="{width : Swidth + 'px'}">
			<uni-icons type="checkbox-filled" size="25" color="rgb(244, 207, 22)" style="margin-left: 10px;"></uni-icons>
			<text style="margin-left:15px;font-size: 16px;font-weight: 600;"> 待发货 </text>
			<uni-icons type="right" size="25" style = "position: absolute; left: 85%;"></uni-icons>
		</view>
		<view class="cart" :style="{width : Swidth + 'px'}">
			<uni-icons type="paperplane-filled" size="25" color="rgb(244, 207, 22)" style="margin-left: 10px;"></uni-icons>
			<text style="margin-left:15px;font-size: 16px;font-weight: 600;"> 待收货</text>
			<uni-icons type="right" size="25" style = "position: absolute; left: 85%;"></uni-icons>
		</view>
		<view class="cart" :style="{width : Swidth + 'px'}">
			<image src="../../static/comment.png" style="width: 25px;height: 25px;margin-left: 10px;"></image>
			<text style="margin-left:15px;font-size: 16px;font-weight: 600;"> 待评价</text>
			<uni-icons type="right" size="25" style = "position: absolute; left: 85%;"></uni-icons>
		</view>
		<view class="cart" :style="{width : Swidth + 'px'}">
			<image src="../../static/refund.png" style="width: 25px;height: 25px;margin-left: 10px;"></image>
			<text style="margin-left:15px;font-size: 16px;font-weight: 600;"> 退款/售后</text>
			<uni-icons type="right" size="25" style = "position: absolute; left: 85%;"></uni-icons>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Swidth : 0,
				code : "",
				
				Userdata:{
					nikename : '力争',
					headshot : '../../static/headshot.png',
					
				},
				
			};
		},
		onReady() {
			let swidth = 0;
			uni.getSystemInfo({
				success(res) {
					swidth = res.screenWidth;
				}
			})
			this.Swidth = swidth;

			
			//this.handleThirdLoginApp();
		}
	}
	//	methods:{
	// 		handleThirdLoginApp(){
			
	// 		console.log("App微信拉起授权")
			
	// 		var that=this
			
	// 		uni.getProvider({
			
	// 		    service: 'oauth',
			
	// 		    success: function(res) {
			
	// 		        console.log(res.provider);
			
	// 		        //支持微信、qq和微博等
			
	// 		        if (~res.provider.indexOf('weixin')) {
			
	// 		            uni.login({
			
	// 		              provider: 'weixin',
			
	// 		              success: function (loginRes) {
			
	// 		  				console.log("App微信获取用户信息成功",loginRes);
	// 						  that.code = loginRes.code;
	// 		                  that.getApploginData(loginRes)  //请求登录接口方法
			
	// 		              },
			
	// 		              fail:function(res){
			
	// 		              console.log("App微信获取用户信息失败",res);
			
	// 		              }
			
	// 		            })
			
	// 		        }
			
	// 		    }
			
	// 		});
			
	// 		},
			
	// 		//请求登录接口方法
			
	// 		getApploginData(data){
			
	// 		var that =this
			
	// 		let appid = "wxadb9a458fb50d7b6";
	// 		let secret = "b30c2163d51125313ef4120e40d88215";
	// 		//前端自己去调微信用户信息的接口，根据接口需要请求，如果不需要前端去获取的话就交给后端，可省去次操作
			
	// 		uni.request({
			
	// 		url: "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appid +"&secret=" + secret + "&code=" + that.code + "&grant_type=authorization_code",
			
	// 		method: 'GET',
			
	// 		dataType: 'json',
			
	// 		header: {
			
	// 		  'content-type': 'application/x-www-form-urlencoded' // 默认值
			
	// 		},
			
	// 		success(res) {
			
	// 		console.log(res)
			
	// 		that.$api.ajax('smdc/index/applogin', res.data,function(ret){
			
	// 		console.log("登录接口成功回调：",ret)
			
	// 		},'POST',true)
			
	// 		},fail() {
			
	// 		}
			
	// 		})
			
	// 		}
			
	// 	}
	// }
</script>

<style  scoped>
	.userdata{
		display: flex;
		position: fixed;
		height: 85px;
		width: 400px;
		align-items: center;
		border: solid 1px #dcdcdc;
		z-index: 88;
		
	}
	.blur_back{
		height: 85px;
		width: 500px;
		background: linear-gradient(120deg, transparent,pink,rgba(222, 0, 0, 0.8),pink, mistyrose,red);
		filter: blur(12px);
	}
	.headshot{
		position: absolute;
		overflow: hidden;
		left: 6%;
		height: 60px;
		width: 60px;
		border-radius: 30px;
	}
	.nickname{
		position: absolute;
		font-weight: 800;
		top: 16px;
		left: 25%;
		
	}
	.column{
		position: absolute;
		display: flex;
		align-items: center;
		height: 70px;
		width: 375px ;
		top:97px;
		background-color: #ebebeb;
		margin: 5px;
		border-radius: 20px;
	}
	.sell{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 3%;
		width: 150px;
		height: 64px;
	}
	.pulish{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 50%;
		width: 150px;
		height: 64px;
	}
	.detail{
		position: absolute;
		top: 184px;
		height: 400px;
		width: 370px;
	}
	.cart{
		position: absolute;
		display: flex;
		align-items: center;
		height: 50px;
		border: solid 1px #ebebeb;
	}
	.cart:nth-child(2){
		top: 60px;
	}
	.cart:nth-child(3){
		top: 120px;
	}
	.cart:nth-child(4){
		top: 180px;
	}
	.cart:nth-child(5){
		top: 240px;
	}
	.cart:nth-child(6){
		top: 300px;
	}
</style>
