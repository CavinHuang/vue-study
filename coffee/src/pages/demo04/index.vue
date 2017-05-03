<template>
	<div class="shopcar" id="demo04">
		<div class="header-title">
			<h3>购物车</h3>
		</div>
		<div class="car-list">
			<ul>
				<li class="car-item" v-for="(item,index) in good_list">
					<div class="input-block">
						<label class="input-label" :class="{active: item.is_selected}" :for="'car-checkbox-'+index" @click="select_one(index)"></label>
					</div>
					<div class="car-item-content">
						<div class="car-img">
							<img :src="item.img" />
						</div>
						<div class="car-cont">
							<h3>{{item.title}}</h3>
							<div class="cat-desc">
								<span v-for="spec in item.spec_item">{{spec}}</span>
							</div>
						</div>
						<div class="num">
							<span @click="reduce(index)">-</span>
							<span>{{item.num}}</span>
							<span @click="add(index)">+</span>
						</div>
						<div class="car-price">
							<span class="car-price">￥{{item.price}}</span>
							<span class="car-num">X{{item.num}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="car-footer">
			<div class="foot-car">
				<label for="foot-check" class="input-label" :class="{active: selected_all}" @click="slect_all"></label>
			</div>
			<div class="total-cont">
				<span>总价：{{totalPrice}}</span>
				<span>共{{totalNum}}件</span>
			</div>
			<div class="btn-box">
				<button>立即下单</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				good_list: [
					{
						title: 'Apple iPhone 6s 16GB 玫瑰金色 移动联通电信4G手机',
						img: "http://sc.tywebs.cn/public/upload/goods/2017/04-27/a767693b9a84747f25335f0e33d3d380.jpg",
						num: 2,
						price: 6070.00,
						spec_item:[
							'内存:16G',
							'网络:4G',
							'颜色:玫瑰金'
						],
						is_selected: false
					},{
						title: 'Apple iPhone 6s 32GB 玫瑰金色 移动联通电信4G手机',
						img: 'http://sc.tywebs.cn/public/upload/goods/2017/04-27/a767693b9a84747f25335f0e33d3d380.jpg',
						num: 2,
						price: 4570.00,
						spec_item:[
							'内存:32G',
							'网络:4G',
							'颜色:玫瑰金'
						],
						is_selected: true
					},{
						title: 'Apple iPhone 6s 8GB 玫瑰金色 移动联通电信4G手机',
						img: 'http://sc.tywebs.cn/public/upload/goods/2017/04-27/a767693b9a84747f25335f0e33d3d380.jpg',
						num: 2,
						price: 4870.00,
						spec_item:[
							'内存:8G',
							'网络:4G',
							'颜色:玫瑰金'
						],
						is_selected: false
					},{
						title: 'Apple iPhone 6s 128GB 玫瑰金色 移动联通电信4G手机',
						img: 'http://sc.tywebs.cn/public/upload/goods/2017/04-27/a767693b9a84747f25335f0e33d3d380.jpg',
						num: 2,
						price: 10568.00,
						spec_item:[
							'内存:128G',
							'网络:4G',
							'颜色:玫瑰金'
						],
						is_selected: true
					},
				],
				totalPrice: 0,
				totalNum: 0,
				selected_all: false
			}
		},
		mounted: function () {
			this.getTotal();
		},
		watch: {
			'good_list': {
				handler: function (val, oldVal) {
					// console.log(val)
					return val;
				},
				deep: true
			}
		},
		methods: {
			getTotal () {
				this.totalPrice = 0
				this.totalNum = 0
				for (var i = 0; i < this.good_list.length; i++) {
					var _d = this.good_list[i]
					if(_d.is_selected){
						this.totalPrice += _d['price'] * _d['num']
						this.totalNum +=_d['num']
					}
				}
			},
			select_one (index) {
				if(this.good_list[index].is_selected == true){
					this.good_list[index].is_selected = false
				}else{
					this.good_list[index].is_selected = true
				}
				this.getTotal()
			},
			slect_all () {
				if(this.selected_all){
					for (var i = 0; i < this.good_list.length; i++) {
						this.good_list[i].is_selected = false;
					}
					this.selected_all = false						
				}else{
					for (var i = 0; i < this.good_list.length; i++) {
						this.good_list[i].is_selected = true;
					}
					this.selected_all = true						
				}
				this.getTotal()
			},
			reduce (index) {
				if(this.good_list[index].num <= 1) return;
				this.good_list[index].num --
				this.getTotal()
			},
			add (index) {
				this.good_list[index].num ++
				this.getTotal()
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.header-title
		height 42px
		line-height 42px
		background #f5f5f5
		border-bottom 1px solid #ddd
	.header-title h3
		font-weight normal
		text-align center
	.car-list 
		background #f2f2f2
		margin-top 12px
		padding 8px
	.car-item
		border-bottom 1px solid #ddd
		position relative
		height 76px
		overflow hidden
	.car-checkbox
		display none
	.input-block
		width 30px
		float left
		height 55px
		line-height 55px
	.input-label
		cursor pointer  
		position absolute  
		width 18px  
		height 18px  
		top 18px  
		left 0  
		background #fff  
		border:2px solid #ccc
		border-radius 50%
	.input-label:after 
		opacity 0  
		content ''  
		position absolute  
		width 9px  
		height 5px  
		background transparent  
		top 6px  
		left 6px  
		border 2px solid #333  
		border-top none  
		border-right none  
		-webkit-transform rotate(-45deg)  
		-moz-transform rotate(-45deg)  
		-o-transform rotate(-45deg)  
		-ms-transform rotate(-45deg)  
		transform rotate(-45deg)  
	.car-img
		width 64px
		height 64px
		float left
		overflow hidden
	.car-img img
		width 100%
	.input-label.active
		background #F15A24
	.car-cont 
		margin-left 100px
	.car-cont h3
		font-weight normal
		line-height 24px
		font-size 14px
	.car-price 
		position absolute
		right 12px
		bottom 0px
		width 40px
		height 40px
		text-align right
	.car-price span
		display block
		height 24px
		line-height 24px
		width 100%
	.car-footer 
		height 60px
		background #f5f5f5
		position fixed
		bottom 0
		left 0
		right 0
	.foot-car
		width 42px
		height 60px
		float left
		margin-left 12px
		position relative
	.total-cont 
		height 60px
		line-height 60px
		font-size 16px
		float left
	.total-cont span
		display inline-block 
		margin-left 12px
	.btn-box
		float right
		height 60px
		line-height 60px
	.btn-box button
		height 100%
		width: 100px
		border none
		background #F15A24
		color #fff
		font-size 16px
	.num
		position absolute
		top 28px
		right 25px
		width 120px
	.num span
		display inline-block
		width 28px
		height 28px
		float left
		text-align center
		line-height 28px
		border 1px solid #ddd
		font-size 14px
</style>