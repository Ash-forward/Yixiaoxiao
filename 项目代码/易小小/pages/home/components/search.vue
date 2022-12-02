<template>
		
		<uni-nav-bar height = "40px" class = "nav_bar"> 
			<template v-slot:left >
				<view @click="postion">
					<text class="uni-nav-bar-text" style="font-size: 13px;">李白河</text>
					<uni-icons type="arrowdown" color="#666" size="17"/>
					
				</view>
				</template>
				<template v-slot :middile>
				<view class="input-view">
						<uni-icons class="input-uni-icon" type="search" size="18" color="black" />
						<view class="input_content">
							<uni-transition :show="true"
							timingFunction = "ease-in-out"
							ref="ani">
								<view color = "#DCDCDC">
									{{searchData}}
								</view>
							</uni-transition>
						</view>
						<!-- <input confirm-type="search" class="nav-bar-input" type="text" disabled="false" :placeholder="searchData" /> -->
				</view>
				</template> 
			<template v-slot:right>
					<navigator url="/pages/class/class" hover-class="none" open-type = "redirect" animation-type >
					<view class="cart">
						<uni-icons custom-prefix="custom-icon" type="list" size="23">
						</uni-icons>
					</view>
					</navigator>
				</template>
			</uni-nav-bar>
		<!-- <button @click="run" style="background-color: greenyellow;width: 30px;height: 20px;"></button> -->
</template>

<script>
	export default{
		data(){
			return{
				searchData : '书本',
				searchList :[
					{
						temp : '唇釉',
					},
					{
						temp : '吹风',
					},
					{
						temp : '美妆蛋',
					},
					{
						temp : '梳子',
					}
				],
			}
		},
		onReady(){
			this.changecontent();
		},
		methods:{
			changecontent(){
				
				setInterval(()=>{
					let num = Math.floor(Math.random()*4);
					this.searchData = this.searchList[num].temp;
				},4000);
				
			},
		}
	}
</script>

<style scoped>
		.nav_bar{
			position: fixed;
			background-color: white;
			/* border-bottom: solid 1px #e7e7e7; */
			box-shadow: 0 3px 4px 3px #e7e7e7;
			z-index: 20;
			padding-bottom: 3px;
		}
		.cart{
			margin-right: 25px;
		}
		.input-view {
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			width: 400rpx;
			flex: 1;
			background-color: #f8f8f8;
			height: $nav-height;
			border-radius: 15px;
			padding: 0 15px;
			flex-wrap: nowrap;
			margin: 7px 0;
			line-height: $nav-height;
		}
		.input_content{
			position: absolute;
			top: 12px;
			left: 120px;
		}
		.input-uni-icon {
			margin-top: 5px;
			line-height: $nav-height;
		}
	
		.nav-bar-input {
			margin-top: 2px;
			height: $nav-height;
			line-height: $nav-height;
			/* #ifdef APP-PLUS-NVUE */
			width: 370rpx;
			/* #endif */
			padding: 0 5px;
			font-size: 12px;
			background-color: #f8f8f8;
		}
	
</style>