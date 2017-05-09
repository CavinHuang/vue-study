<template>
	<div id="demo5">
		<div class="page-box" id="layui-laypage-6">
			<a href="javascript:;" class="layui-laypage-prev" data-page="1" v-if="hasPre" @click="goPre()">上一页</a>
			<a href="javascript:;" class="laypage_first" data-page="1" title="首页" v-if="hasHome" @click="goPage(1)">首页</a>
			<span v-if="hasFirstDot">…</span>
			<a href="javascript:;" v-for="(item, index) in pageData" :data-page="item" :class="{'page-curr': item == currPage}" @click="changePage(index)">{{item}}</a>
			<span v-if="hasLastDot">…</span>
			<a href="javascript:;" class="page-last" title="尾页" data-page="100" v-if="hasLast" @click="goPage(100)">末页</a>
			<a href="javascript:;" class="page-next" data-page="2" v-if="hasNext" @click="goNext()">下一页</a>
			<span class="page-total">
				到第
				<input type="number" min="1" onkeyup="this.value=this.value.replace(/\D/, '');" v-model="toPage" class="layui-laypage-skip">
				页
				<button type="button" class="layui-laypage-btn" @click="goPage(toPage)">确定</button>
			</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				pageData: [1,2,3,4,5],
				currPage: 1,
				hasPre: false,
				hasNext: true,
				hasHome: false,
				hasLast: true,
				hasFirstDot: false,
				hasLastDot: true,
				pageTotal: 100,
				prifix: 2,
				toPage: 1,
			}
		},
		methods: {
			changePage (index) {
				this.currPage = this.pageData[index]
				this.toPage = this.pageData[index]
				this.checkSpan(index)
				if(this.currPage >= 5){
					this.pageData = this.createData(this.currPage)
				}else{
					this.pageData = [1,2,3,4,5]
				}
			},
			goPre () {
				var key = this.getKeyFromArr(this.pageData, this.currPage)
				this.changePage(key*1 -1)
			},
			goNext () {
				var key = this.getKeyFromArr(this.pageData, this.currPage)
				this.changePage(key*1 + 1)
			},
			goPage (page) {
				var key = this.getKeyFromArr(this.pageData, page)
				if(key !== -1){
					this.changePage(key)
				}else{
					//没有
					if(page > this.pageTotal) return;
					this.currPage = page
					this.toPage = page
					this.pageData = this.createData(page * 1)
					var index = this.getKeyFromArr(this.pageData, this.currPage)
					this.checkSpan(index)
				}
			},
			checkSpan(index){
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
				console.log(page)
				if(page - this.prifix <= 0){
					for (var i = 0; i < 5; i++) {
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
				var ix = this.prifix;
				if(page -1 <= 0 || page+1 >= this.pageTotal) return this.pageData;
				for(var i=this.prifix; i > 0; i--){
					var temp = page - ix
					left.push(temp)
					ix --
				}
				left[this.prifix] = page
				var idx = 1;
				for(var j=this.prifix; j < this.prifix + this.prifix; j++){
					var temp_right = page + idx
					right.push(temp_right)
					idx ++
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