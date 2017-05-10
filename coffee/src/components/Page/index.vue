<template>
	<div class="page-box">
		<a href="javascript:;" :data-page="currPage - 1" v-if="hasPre" @click="goPre()">上一页</a>
		<a href="javascript:;" data-page="1" title="首页" v-if="hasHome" @click="goPage(1)">首页</a>
		<span v-if="hasFirstDot">…</span>
		<a href="javascript:;" v-for="(item, index) in pageData" :data-page="item" :class="{'page-curr': item == currPage}" @click="changePage(index, item)">{{item}}</a>
		<span v-if="hasLastDot">…</span>
		<a href="javascript:;" class="page-last" title="尾页" :data-page="pageTotal" v-if="hasLast" @click="goPage(pageTotal)">末页</a>
		<a href="javascript:;" class="page-next" :data-page="currPage+1" v-if="hasNext" @click="goNext()">下一页</a>
		<span class="page-total">
			到第
			<input type="number" min="1" v-model="toPage">
			页
			<button type="button" @click="goPage(toPage)">确定</button>
		</span>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				pageData: [],
				currPage: 1,
				hasPre: false,
				hasNext: true,
				hasHome: false,
				hasLast: true,
				hasFirstDot: false,
				hasLastDot: true,
				// pageTotal: 50,
				prifix: 2,
				toPage: 1,
			}
		},
		props: ['pageTotal', 'curr'],
		created: function () {
			this.pageData = this.createData(1)
			this.checkSpan()
			this.currPage = this.curr;
		},
		methods: {
			changePage (index, item) {
				this.currPage = this.pageData[index]
				this.toPage = this.pageData[index]
				this.checkSpan(index)
				this.pageData = this.createData(this.currPage)
				this.$emit('pageChange', index, item);
			},
			goPre () {
				var key = this.getKeyFromArr(this.pageData, this.currPage)
				this.changePage(key*1 -1, this.currPage)
			},
			goNext () {
				var key = this.getKeyFromArr(this.pageData, this.currPage)
				this.changePage(key*1 + 1, this.currPage)
			},
			goPage (page) {
				var key = this.getKeyFromArr(this.pageData, page)
				if(key !== -1){
					this.changePage(key, page)
				}else{
					//没有
					if(page > this.pageTotal) return;
					this.currPage = page
					this.toPage = page
					this.pageData = this.createData(page * 1)
					this.checkSpan()
					var key = this.getKeyFromArr(this.pageData, this.currPage)
					this.$emit('pageChange', key, page);
				}
			},
			checkSpan(){
				if(this.currPage >= 2){
					this.hasPre = true
				}else{
					this.hasPre = false
				}
				if(this.currPage >= 5){
					this.hasHome = true
					this.hasFirstDot = true
				}else{
					this.hasHome = false
					this.hasFirstDot = false
				}
				if(this.currPage >= this.pageTotal - this.prifix){
					this.hasLast = false
					this.hasLastDot = false
				}else{
					this.hasLast = true
					this.hasLastDot = true
				}
				if(this.currPage <= this.pageTotal - 1){
					this.hasNext = true
				}else{
					this.hasNext = false
				}
			},

			createData (page) {
				var data = [];
				//两种极端
				// if(page -1 < 0 || page+1 > this.pageTotal) return this.pageData;
				if(page - this.prifix <= 0 && this.pageTotal < 5){
					for (var i = 0; i < this.pageTotal; i++) {
						data.push(i + 1)
					}
					return data;
				}

				if(page + this.prifix >= this.pageTotal){
					for (var i = this.pageTotal; i > this.pageTotal - 5; i--) {
						data.push(i)
					}
					return data.reverse();
				}

				var left = [],right = [];
				var ix = 1;
				
				if(page < 5){
					for(var i=1; i < page; i++){
						var temp = page - ix
						if(temp <= 0) break;
						left.push(temp)
						ix ++
					}
				}else{
					for(var i=page-2; i < page; i++){
						var temp = page - ix
						if(temp <= 0) break;
						left.push(temp)
						ix ++
					}
				}
				left.reverse()
				left.push(page)
				if(page < 5){
					var idx = 1;
					for(var j=page; j < 5; j++){
						var temp_right = page + idx
						right.push(temp_right)
						idx ++
					}
				}else{
					var idx = 1;
					for(var j=page; j < page + this.prifix; j++){
						var temp_right = page + idx
						right.push(temp_right)
						idx ++
					}
				}

				left.push.apply(left,right); //合并数组
				return left;
			},
			getKeyFromArr (arr, val) {
				var key = -1;
				for(var k in arr){
					if(arr[k] == val){
						key = k 
					}
				}
				return key
			}
		}
	}
</script>
<style>
	.page-box{
		-webkit-box-sizing: content-box!important;
	    -moz-box-sizing: content-box!important;
	    box-sizing: content-box!important;
	    display: inline-block;
	    vertical-align: middle;
	    margin: 10px 0;
	    font-size: 0;
	}
	.page-box span,.page-box a{
		display: inline-block;
	    vertical-align: middle;
	    padding: 0 15px;
	    border: 1px solid #e2e2e2;
	    height: 28px;
	    line-height: 28px;
	    margin: 0 -1px 5px 0;
	    background-color: #fff;
	    color: #333;
	    font-size: 12px;
		color: #999;
    	font-weight: 700;
	}
	.page-box .page-curr{
	    background-color: #009688;
	    color: #fff;
    	font-weight: 400;
    	text-align: center;
    	font-style: normal;
	}
	.page-box>:first-child, .page-box>:first-child em {
    	border-radius: 2px 0 0 2px;
	}
	.page-box .page-total {
	    height: 30px;
	    line-height: 30px;
	    margin-left: 1px;
	    border: none;
	    font-weight: 400;
	}
	.page-box input,.page-box button {
		height: 30px;
	    line-height: 30px;
	    border: 1px solid #e2e2e2;
	    border-radius: 2px;
	    vertical-align: top;
	    background-color: #fff;
	    box-sizing: border-box!important;
	    width: 50px;
	    margin: 0 5px;
	    text-align: center;
	}
</style>