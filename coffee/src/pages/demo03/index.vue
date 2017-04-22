<template>
	<div id="demo03">
		<div class="header">
			<h1>第一个组件：下拉框组件</h1>
		</div>
		<div class="content">
			
			<div class="component">
				<Selected :optionData="optionData" v-on:selectItem="selectItem"></Selected>
			</div>
		</div>
	</div>
</template>
<script>
import Selected from '../../components/Select/select.vue'
export default{
	data () {
		return {
			optionData: [{
				value: 1,
				text: '牛奶'
			},{
				value: 2,
				text: '面包'
			},{
				value: 3,
				text: '美女'
			}],
		}
	},
	methods: {
		selectItem: function (data) {
			console.log(data)
		}
	},
	components: {
		Selected
	}
}
</script>
<style lang="stylus" scoped>
	.header
		width 100%
		height 42px
		line-height 42px
		text-align center
		background #f2f2f2
	& h1
		font-size 18px
		font-weight 600
	.content
		width 800px
		margin 20px auto 0 auto
		height 500px
		background #f5f5f5
		padding 8px
	& .component
		width 600px
		height 300px
		margin 100px auto
		background #fff
		padding 20px
	
	
	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	
</style>