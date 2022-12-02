<template>
	<uni-nav-bar height = "40px">
		<template v-slot:left>
			<text class="uni-nav-bar-text" style="font-size: 13px;">李白河</text>
			<uni-icons type="arrowdown" color="#666" size="17"/>
			</template>
			<template v-slot :middile>
			<view class="input-view">
					<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
					<input confirm-type="search" class="nav-bar-input" type="text" disabled="false" placeholder="输入搜索关键词" />
			</view>
			</template> 
		<template v-slot:right>
			<text class="uni-nav-bar-right-text" style="font-size: 13px;">搜索</text>
			</template>
	</uni-nav-bar>
    <view class="lxy-content">
        <scroll-view scroll-x="true"
                     class="content-scroll"
                     scroll-with-animation = "true"
                     :scroll-left="scrollLeft"
					 scroll-anchoring = "true" >
            <view v-for="(item, index) in category"
                  :key="index"
                  class="scroll-item"
                  @click="changeTitle(index,$event)">
							<text class="item-text"
							:class="curIndex == index? 'active' : ''">{{item.name}}</text>
            </view>
        </scroll-view>
    </view>
	
	<view class="swiper_content" >
		<swiper class="swiper_css" 
		easing-function = "easeOutCubic"
		:current="curIndex"
		@animationfinish = "swiper_change($event)"
		:style="{width : Width + 'px', height : Height - 83+ 'px'}">
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
					<G1Bag></G1Bag>
				</view>
			</swiper-item>
			<swiper-item>
				<view> 
					<G1Clothe></G1Clothe>
				</view>
			</swiper-item>
			<swiper-item>
				<view> 
					<G1Hair></G1Hair>
				</view>
			</swiper-item>
			<swiper-item>
				<view> 
					<G1Shcoolbag></G1Shcoolbag>
				</view>
			</swiper-item>
			<swiper-item>
				<view> 
					<G1Notebook></G1Notebook>
				</view>
			</swiper-item>
			<swiper-item>
				<view> 
					<G1Food></G1Food>
				</view>
			</swiper-item>
			<swiper-item>
				<view> 
					<G1Other></G1Other>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

	
<script>
	import G1New  from '../home/components/home_content/G1_new.vue'
	import G1Makeup from '../home/components/home_content/G1_makeup.vue'
	import G1Book from '../home/components/home_content/G1_book.vue'
	import G1Bag from '../class/navigator_top/bag.vue'
	import G1Clothe from '../class/navigator_top/chloth.vue'
	import G1Hair from '../class/navigator_top/hair.vue'
	import G1Shcoolbag from '../class/navigator_top/shcoolbag.vue'
	import G1Notebook from '../class/navigator_top/notebook.vue'
	import G1Food from '../class/navigator_top/food.vue'
	import G1Other from '../home/components/home_content/G1_other.vue'
	
    export default {
		components:{
			G1New,
			G1Makeup,
			G1Book,
			G1Bag,
			G1Clothe,
			G1Hair,
			G1Shcoolbag,
			G1Notebook,
			G1Food,
			G1Other
		},
		
		onReady() {
			let ScreenWid = 0;
			let ScreenHei = 0;
			let statelan = 0;
			uni.getSystemInfo({
				success(res) {
					ScreenWid = res.screenWidth;
					ScreenHei = res.windowHeight;
				}
			})
			this.Width = ScreenWid;
			this.Height = ScreenHei;
		},
		
        data() {
            return {
				Width : 0,
				Height : 0,
				heright_totop : 0,
				
                category: [
                    {
                        id: 1,
                        name: '最新'
                    },
                    {
                        id: 2,
                        name: '美妆'
                    },
					{
						id: 3,
						name:'书本',
						
					},
					{
						id: 4,
						name: '包包'
					},
					{
						id: 5,
						name: '衣服'
					},
					{
						id: 6,
						name: '饰品'
					},
					{
						id: 7,
						name: '书包'
					},
					{
						id: 8,
						name: '文具'
					},
					{
						id: 9,
						name: '零食'
					},
					{
						id: 10,
						name: '其它'
					}
					
                    
                ],

                contentScrollW: 0, // 导航区宽度
                curIndex: 0, // 当前选中
                scrollLeft: 0, // 横向滚动条位置
            }
        },
        mounted() {
            // 获取标题区域宽度，和每个子元素节点的宽度
            this.getScrollW()
        },
        methods: {
            // 获取标题区域宽度，和每个子元素节点的宽度以及元素距离左边栏的距离
            getScrollW() {
                const query = uni.createSelectorQuery().in(this);

                query.select('.content-scroll').boundingClientRect(data => {
                    // 拿到 scroll-view 组件宽度
					console.log(data.top)
                    this.contentScrollW = data.width;
                }).exec();

                query.selectAll('.scroll-item').boundingClientRect(data => {
                    let dataLen = data.length;
                    for (let i = 0; i < dataLen; i++) {
                        //  scroll-view 子元素组件距离左边栏的距离
                        this.category[i].left = data[i].left;
                        //  scroll-view 子元素组件宽度
                        this.category[i].width = data[i].width
                    }
                }).exec()
				
            },


             changeTitle(index,event) {
				 let ScreenWidth = 0;
				 
				 
				 uni.getSystemInfo({
				 	success:function(res) {
				 		ScreenWidth = res.windowWidth;
				 		//console.log('宽度'+res.windowWidth);
				 	}
				 })
                this.scrollLeft = Math.round(this.category[index].left - this.contentScrollW / 2 + this.category[index].width / 2); 
				this.curIndex = index; 
              },
			  swiper_change(ev){
				  let swiper_select = ev.detail.current;
				  this.changeTitle(swiper_select);
				  
			  }
        }
    }
</script>



<style lang="scss" scoped>
	/*搜索*/
	.uni-nav-bar-right-text{
		margin-right: 10px;
	}
	.input-view {

		display: flex;
		border-radius: 18px;
		flex-direction: row;
		 width: 350rpx;
		flex: 1;
		background-color: #f8f8f8;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
	}
		
	.input-uni-icon {
		margin-top: 5px;
	}
		
	.nav-bar-input {
		margin-top: 2px;
		width: 370rpx;
		padding: 0 5px;
		font-size: 12px;
		border-radius: 10px;
		background-color: #f8f8f8;
	}
	/*导航*/
	    .lxy-content {
	        width: 100%;
	        height: 76rpx;
			border-bottom: solid 1px #efefef;
	        .content-scroll {
	            height: 86rpx;
	            white-space: nowrap;
	            .scroll-item {
	                height: 88rpx;
	                padding: 0 20rpx;
	                display: inline-block;
	                text-align: center;
	                .item-text {
	                    font-size: 28rpx;
	                    line-height: 100rpx;
	                    &.active {
	                        color: red;
	                    }
	                }
	            }
	        }
	    }
	.swiper_content{
		margin-top: 3px;
	}
</style>

