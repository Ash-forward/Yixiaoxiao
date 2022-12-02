<template>
	
	<view class="nav_text">
		<text style="font-size: 24px;position: absolute;top: 5px;">消息</text>
		<text style="position: absolute;top: 16px;left: 80px;" v-if = " count >0">({{count}})</text>
		<view class="customer">
			<image src="/static/Customer.png" style="height: 30px;width: 30px;"></image>
		</view>
	</view>
	<view class="message" :style="{width : ScreenWidth + 'px'}">
	
	</view>
	<scroll-view scroll-y="true" class="scroll-Y"
		scroll-with-animation = "true"
		scroll-anchoring = "true" show-scrollbar = "false">
		
	
		<view v-for="(data,index) in MessageData" :key="index" class="message_content">
		<uni-swipe-action style = "height: 40px;">
			  <uni-swipe-action-item 
			    :threshold="0"
			    :right-options="options"
			    @click="bindClick($event,index)">
				<view style="height: 42px;position: relative;left: 15px;" >
					<view class="img">
						<image :src="data.image" style="width: 45px;height: 45px;" mode="scaleToFill"></image>
					</view>
			
							<view class="text_content">
								<view class="name">
										{{data.name}}
									</view>
								
									<view class="admin" v-if = "data.type == 1">
										<view style="width:30px;height: 10px;">
											<text style="position:absolute;left:2px; top: -2px; color: red; "> 官方 </text>
										</view>
									</view>
				
						<view class="time">
							{{data.time}}
						</view>
						<view class="content" >
							{{data.content}}
						</view>
					</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
	</scroll-view>
</template>

<script>
	
	export default{
		methods:{
			bindClick(event,index){
				let _this = this;
				if(event.content.text == '删除'){
					uni.showModal({
						title:'提示',
						content:'确定要删除该条消息吗？',
						cancelText:'取消',
						confirmText:'确定',
						success(res) {
							if(res.confirm){
								_this.MessageData.splice(index,1);
								_this.count = _this.MessageData.length;
								_this.numbersigh();
							}
						}
						
					})
					
				}
			 
			},
			numbersigh(){
							let len = this.MessageData.length;
							this.count = len;
							let tabmsg = this.count.toString();
							
							if(this.count > 100){
								uni.setTabBarBadge({
									index: 2,
									text : '99+'
								})
							}else if (this.count > 0){
								uni.setTabBarBadge({
									index: 2,
									text: tabmsg
								})
							}
						}
			},
		data(){
			return{
				count : 22,
				ifshoe : true,
				clickindex : -1,
				ScreenWidth : 0,
				
				options:[
				        {
				            text: '取消',
				            style: {
				                backgroundColor: '#007aff'
				            }
				        }, {
				            text: '删除',
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        }
				      ],
					  
				MessageData : [
					{	
						id : 0,
						image : '/static/navigator/icon4.png',
						name : '易物团队',
						type : 1 , // 是否为官方消息 1 -> 是 0 -> 否
						content : '注意：该页面显示的消息仅做测试用途',
						time : '2022/11/2'
					},
					{
						id : 1,
						image : '/static/navigator/icon4.png',
						name : '易物团队',
						type : 1 ,
						content : '禁止以任何形式的转载',
						time : '2022/11/6'
					},
					{
						id : 2,
						image : '/static/navigator/icon4.png',
						name : '易物团队',
						type : 1 ,
						content : '或其他不当用途',
						time : '2022/11/8'
					},
					{
						id : 3,
						image : 'https://img2.woyaogexing.com/2022/11/06/a6f8e476813c58c1!400x400.jpg',
						name : 'Ww芬芬ya',
						type : 0 ,
						content : '要是那天，我抓住你就好了',
						time : '2022/11/5'
					},
					{
						id : 4,
						image : 'https://img2.woyaogexing.com/2022/11/05/c7c85b5880408145!400x400.jpg',
						name : '何',
						type : 0 ,
						content : '后来啊，书没有读好，喜欢的人也没有在一起',
						time : '2022/11/8'
					},
					{
						id : 5,
						image : 'https://img2.woyaogexing.com/2022/11/05/989d6a54d361f2e3!400x400.jpg',
						name : '江意间',
						type : 0 ,
						content : '后来，南山的风吹散了谷堆，北海的水淹没了墓碑',
						time : '2022/11/8'
					},
					{
						id : 6,
						image : 'https://img2.woyaogexing.com/2022/11/05/c0b05851a8215a7d!400x400.jpg',
						name : '青衫隐',
						type : 0 ,
						content : '你根本忘不了一个认认真真爱过的人，你以为错过的是一个人，其实你错过的是一整个人生',
						time : '2022/11/7'
					},
					
					{
						id : 7,
						image : 'https://img2.woyaogexing.com/2022/11/05/e2571d6cad042d0f!400x400.jpg',
						name : '祭流年',
						type : 0 ,
						content : '所有不合时宜的相遇，都是遗憾让人心疼',
						time : '2022/11/22'
					},
					{
						id : 8,
						image : 'https://img2.woyaogexing.com/2022/11/06/c6d8b00180d98b06!400x400.jpg',
						name : '念往昔',
						type : 0 ,
						content : '那天车窗起雾了我写了你的名字 后来雾散了 名字模糊了 你不见了 我们回不去了',
						time : '2022/11/12'
					},
					{
						id : 9,
						image : 'https://img2.woyaogexing.com/2022/11/06/4358607bc6b7cad7!400x400.jpg',
						name : '冰映月',
						type : 0 ,
						content : '从来没有人正式跟我说 “我们在一起吧” ，然而到最后都会正式的跟我说 “对不起”。',
						time : '2022/11/23'
					},
					{
						id : 10,
						image : 'https://img2.woyaogexing.com/2022/11/06/7770f68b1b5e5533!400x400.jpg',
						name : '离心语',
						type : 0 ,
						content : '我这份悬在半空的喜欢，飞不过千山万水了',
						time : '2022/11/20'
					},
					{
						id : 11,
						image : 'https://img2.woyaogexing.com/2022/11/06/12b2997776a814fb!400x400.jpg',
						name : '长恨歌',
						type : 0 ,
						content : '还能再见你一面么 我可以站的很远',
						time : '2022/11/20'
					},
					{
						id : 12,
						image : 'https://img2.woyaogexing.com/2022/11/06/998352bc5c8b8c03!400x400.jpg',
						name : '醉清风',
						type : 0 ,
						content : '我们都在奔赴不同的人生了',
						time : '2022/11/24'
					},
					{
						id : 13,
						image : 'https://img2.woyaogexing.com/2022/11/06/9177ae2a0e827ad7!400x400.png',
						name : '意君兮',
						type : 0 ,
						content : '“过了几年 你会不会突然想起2020长达4个月的寒假 疫情爆发 钉钉奔溃 网易云黑色 还有你错过了我 ”',
						time : '2022/11/15'
					},
					{
						id : 14,
						image : 'https://img2.woyaogexing.com/2022/11/06/45c8d13de24e54f9!400x400.jpg',
						name : '笑念伊人',
						type : 0 ,
						content : '这世上的所有“突然想起”都是“一直放在心上”',
						time : '2022/11/17'
					},
					{
						id : 15,
						image : 'https://img2.woyaogexing.com/2022/11/06/a378c123e39cc56c!400x400.jpg',
						name : '淡墨无殇',
						type : 0 ,
						content : '我最大的遗憾，是你的遗憾与我有关',
						time : '2022/11/16'
					},
					{
						id : 16,
						image : 'https://img2.woyaogexing.com/2022/11/06/5aec0c3d04b21a4a!400x400.jpg',
						name : '画眉如黛',
						type : 0 ,
						content : '你看，世人多奇怪。喜欢的人得不到，得到了不珍惜，在一起时怀疑，失去了怀念，怀念的想相见，相见的又恨晚。终其一生，满是遗憾。',
						time : '2022/11/18'
					},
					{
						id : 17,
						image : 'https://img2.woyaogexing.com/2022/11/06/3b0c5d21cab368e0!400x400.jpg',
						name : '朝夕盼兮',
						type : 0 ,
						content : '从前从前有个人爱你很久 但偏偏风渐渐把距离吹得好远',
						time : '2022/11/19'
					},
					{
						id : 18,
						image : 'https://img2.woyaogexing.com/2022/11/06/00f5d62121409f2f!400x400.jpg',
						name : '故城',
						type : 0 ,
						content : '很抱歉，终究没能成为你的例外',
						time : '2022/11/20'
					},
					{
						id : 19,
						image : 'https://img2.woyaogexing.com/2022/11/06/86cc893647395858!400x400.jpg',
						name : '画卿颜',
						type : 0 ,
						content : '我们好像不该这样 不止这样 但只能这样了',
						time : '2022/11/25'
					},
					{
						id : 20,
						image : 'https://img2.woyaogexing.com/2022/11/06/48cbebafdaeb8529!400x400.jpg',
						name : '如曲终破尘',
						type : 0 ,
						content : '晚点没关系 我可以等你 但你一定要来 如果你没来 那就当月亮失约了吧',
						time : '2022/11/26'
					},
					{
						id : 21,
						image : 'https://img2.woyaogexing.com/2022/11/06/86aca07e688e2255!400x400.jpg',
						name : '一树摇光',
						type : 0 ,
						content : '有些故事没讲完，那就算了吧',
						time : '2022/11/30'
					},
				]
			}
		},
		onReady(){
			let Width = 0;
			uni.getSystemInfo({
				success(res) {
					Width = res.screenWidth;
				}
			})
			this.ScreenWidth = Width;
			this.numbersigh();
	}
}
</script>

<style>
	.nav_text{
		position: fixed;
		height: 40px;
		width: 100px;
		display: flex;
		justify-content: center;
		z-index: 80;
		
	}
	.customer{
		position: absolute;
		top:6px;
		right: -260px;
	}
	.message{
		position: fixed;
		height: 40px;
		border-bottom : solid 1px #a8a8a8;
		box-shadow: 0  0 8px 6px #dcdcdc;
		
	}
	.scroll-Y{
		position: fixed;
		height:630px;
		top: 46px;
	}
	.message_content{
		position: relative;
		height: 50px;
		padding-bottom: 10px;
	}
	.img{
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 40px;
		overflow: hidden;
	}
	.admin{
		position: absolute;
		left: 75px;
		top: 2px;
		width: 27px;
		height: 12px;
		border: solid 1px red;
		border-radius: 4px;
		
	}
	.text_content{
		height: 40px;
		width: 310px;
		overflow: hidden;
		font-size: 12px;
		position: absolute;
		left: 45px;
		border-bottom: solid 1px #dcdcdc;
		border-top: solid 1px #dcdcdc;
	}
	.name{
		width: 150px;
		position: absolute;
	}
	.time{
		position: absolute;
		left:78%;
	}
	.content{
		position: absolute;
		width: 200px;
		overflow: hidden;
		top: 21px;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: -webkit-box;
		line-clamp: 1;
	}
</style>