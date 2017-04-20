<template>
	<div id="demo01">
		<div class="table">
			<ul>
				<li v-for="item in dataList"><span class="text">{{item.name}}</span><span class="slide"><div class="progrss"><i class="progrss-activ" :style="{width: item.score + '%'}"></i></div><span class="num">{{item.score}}</span></span></li>
			</ul>
			<div class="ragle">
				<div class="input-item" v-for="(item, index) in dataList">
					<label :for="'inpt'+(index+1)">
					{{item.name}}
					</label>
					<input type="range" :data-index="index" v-on:input="rangeChange" :id="'inpt'+(index+1)" :value="item.score" max="100" min="0" step="1"/>
					<span>{{item.score}}</span>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	export default{
		data () {
			return {
				dataList:[
					{
						"name": '语文',
						"score": 87
					},{
						name: '数学',
						score: 65
					},{
						name: '英语',
						score: 96
					},{
						name: '体育',
						score: 50
					}
				]
			}
		},
		created: function () {
			// console.log(this)
			// this.dataList = this.sortArray(this.dataList, 'score')
		},
		methods: {
			rangeChange: function (e) {
				var val = e.target.value;
				var index = e.target.attributes['data-index'].value
				console.log(val, index)
				this.dataList[index].score = val
				// this.dataList = this.sortArray(this.dataList, 'score')
			},
			sortArray: function (value, key) {
			  return value.sort(function (a, c) {
			    return a[key] < c[key];
			 	})
			}
		}
	}
</script>
<style>
	.table{
		height: 400px;
		width: 800px;
		margin: 100px auto;
		padding: 50px;
		background: #f5f5f5;
	}
	.table ul{
		width: 600px;
		margin: 0 auto;
	}
	.table ul li{
		height: 30px;
		line-height: 30px;
		margin-top: 30px;
		overflow: hidden;
		position: relative;
	}
	.text, .slide{
		display: inline-block;
		position: absolute;
	}
	.text{
		left: 0;
		width: 10%;
		text-align: right;
	}
	.slide{
		width: 90%;
		left: 12%;
	}
	.progrss{
		width: 80%;
		background: #dedede;
		height: 30px;
		display: inline-block;
		position: relative;
		border-radius: 8px;
	}
	.progrss-activ{
		height: 100%;
		background: #00A2E8;
		display: block;
		border-radius: 8px;
	}
	.num{
		display: inline-block;
		height: 30px;
		line-height: 30px;
		position: absolute;
		right: 0;
		top:0;
		width: 40px;
	}
	.ragle{
		margin: 50px 100px;
	}
	.input-item{
		height: 40px;
	}
	.input-item input{
		width: 80%;
		outline: none
	}
	.input-item .span{

	}
</style>