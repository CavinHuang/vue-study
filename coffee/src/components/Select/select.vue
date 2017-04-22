<template>
	<div class="select-component">
		<div class="select-input">
			<input type="text" placeholder="请选择" readonly="readonly" v-model="selected.text" autocomplete="off" class="el-input__inner" @click="dropDown">
			<div class="icon">
				<div class="icon-warrp" :class="{roate: classRoate}">
					<span class="select-icon"></span>
				</div>
			</div>
		</div>
		<div class="select-options" :class="{show: classShow}">
			<ul>
				<li class="select-options-item" v-for="(item, index) in optionData" :class="{selected: classSelected == index}"  @click="selectItem(index)">{{item.text}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				classShow: false,
				classRoate: false,
				selected: {
					value: '',
					text: ''
				},
				classSelected: -1,
			}
		},
		props:['optionData'],
		methods: {
			dropDown () {
				if(this.classShow){
					this.classShow = false
					this.classRoate = false
				}else{
					this.classShow = true
					this.classRoate = true
				}
			},
			selectItem (index) {
				this.selected = this.optionData[index]
				this.classSelected = index
				this.classShow = false
				this.classRoate = false
				this.$emit('selectItem', this.optionData[index]);
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.select-component
		width 240px
		
	& .select-input
		position relative
		font-size 14px
		display inline-block
		width 100%
		cursor pointer
		
	& .el-input__inner
		appearance none
		background-color #fff
		background-image none
		border-radius 4px
		border 1px solid #bfcbd9
		box-sizing border-box
		color #1f2d3d
		display block
		font-size inherit
		height 36px
		line-height 1
		outline none
		padding 3px 10px
		transition border-color .2s cubic-bezier(.645,.045,.355,1)
		width 100%
		cursor pointer
	.el-input__inner:hover
		border: 1px solid #999
	.icon
		position absolute
		right 8px
		top 6px
		width 24px
		height 24px
		line-height 24px
		overflow hidden
	.icon-warrp
		width 100%
		height 100%
		position relative
		transition transform .2s cubic-bezier(.645,.045,.355,1)

	.select-icon
		position absolute
		right 50%
		top 50%
		margin-right -8px
		margin-top -4px
		width 0
		height 0
		border-width 8px 8px 0
		border-style solid
		border-color #bfcbd9 transparent transparent
	.roate 
		transform rotate(180deg)
	.select-options
		width 224px
		background #fff
		border 1px solid #bfcbd9
		margin-top 8px
		padding 8px		
		opacity 0
	& ul
		list-style: none;
		padding: 6px 0;
		margin: 0;
		box-sizing: border-box;
	.select-options-item
		font-size 14px
		padding 8px 10px
		position relative
		white-space nowrap
		overflow hidden
		text-overflow ellipsis
		color #48576a
		height 36px
		line-height 1.5
		box-sizing border-box
		cursor pointer
		
	.select-options-item.selected
		color #fff
		background-color #20a0ff
	.show
		animation 0.3s fadeInShow
		animation-fill-mode: forwards;
	
	@keyframes fadeInShow 
		0%
			opacity 0
			transform translateY(-5px)
		100%
			opacity 1
			transform translateY(0)
</style>