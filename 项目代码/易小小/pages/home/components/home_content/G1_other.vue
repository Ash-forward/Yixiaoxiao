<template>
	<view class="contain">
		
		<scroll-view scroll-y="true" class="scroll-Y"
			 style="height: 800px;" scroll-with-animation = "true"
			scroll-anchoring = "true" show-scrollbar = "false">
			
			<view class="data" v-for="(item ,index) in NeedsData" :key="index" :style="{width : Width}">
				
				<view class="img">
					<image :src="item.imglink" style="width: 40px;height: 40px;" mode="scaleToFill"></image>
				</view>
				
				<view class="title" :style="{width : Width - 48 + 'px'}">
				
				<view style="position: absolute;top: 7px;left: 8px; width: 61px;height: 21px;overflow: hidden;">
					<text style= "color: #b9b9b9;"> {{ item.name}} </text>
				</view>
				
					<text style="position: absolute;top: 7px;left: 20px;color: #f8b007;font-size: 13px;top: 9px;left: 72px;"> {{item.pos}}</text>
					
					<view class="time">
						<text style="font-size: 13px;">{{item.time}}</text>
					</view>
					
					<view class="detail">
						<text style="font-size: 13px;">{{item.contant}}</text>
					</view>
					
					<view class="price">
						<text>￥</text>
						<text>{{item.budget}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default{
		onReady() {
			let screenwid  = 0;
			uni.getSystemInfo({
				success(res) {
					screenwid = res.screenWidth;
				}
			})
			
			this.Width = screenwid;
		},
		
		data(){
			return{
				Width : 0,
				
				NeedsData : [
					{
						name : 'fksb',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.ex7IED2b2rO_8YdslDUD_gAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求礼品盒，不要很大，可以装百来张 便利贴。', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/2',
						pos : '李白河校区',
						tag:'other',
						cart :'其他',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					},
					{
						name : 'keep',
						imglink : 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant : ' 求大学物理实验第三版大一', //商品名称
						budget: 15, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/5',
						pos : '李白河校区',
						tag:'book',
						cart :'书本',//详情页用到
					},
					{
						name : 'dfosnvsdgbfh',
						imglink : 'https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
						contant: ' 求一个口红', //商品名称
						budget: 50, // 0 -> 不是全新 ，1 -> 全新 ， 95,89,其余值
						time : '2022/11/12',
						pos : '李白河校区',
						tag:'makeup',
						cart :'美妆',//详情页用到
					}
				]
			}
		}
	}
</script>

<style scoped>
	.data{
		height: 60px;
		margin-top: 5px;
	}
	.img{
		position: relative;
		top: 10px;
		left: 5px;
		height: 40px;
		width:  40px;
		border-radius: 20px;
		overflow: hidden;
	}
	.title{
		position: relative;
		top: -40px;
		left: 48px;
		height: 60px;
		border-bottom: solid 1px #f0f0f0;
	}
	.time{
		position: absolute;
		right: 0;
		height: 22px;
	}
	.detail{
		position: absolute;
		left: 8px;
		top: 30px;
		height: 22px;
		width: 255px;
		overflow: hidden;
	}
	.price{
		position: absolute;
		bottom: 5px;
		right: 0;
		height: 20px;
		width: 50px;
	}
</style>