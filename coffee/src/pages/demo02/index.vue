<template>
	<div id="demo02">
		<div class="header">
			<h1>Vue js TodoList Demo</h1>
		</div>
		<div class="work-block">
			<div class="input-block">
				<input type="text" class="inpt" placeholder="输入任务（可以直接回车或者点击按钮）" v-model="msg" @keyup.enter="addItem"/>
				<input type="button" class="inpt-btn" value="添加任务" v-on:click="addItem"/>
			</div>
			<div class="todo-list">
				<div class="empty" v-show="dataList.length == 0">还没有计划，赶快添加吧！</div>
				<ul>
					<li class="todo-item" v-for="(item, index) in dataList">
						<div class="todo-text">
							<span class="test-item">{{item.title}}</span>
							<span class="test-text">{{item.status|setStatusAttr}}</span>
							<span class="test-time" v-show="item.time != ''">完成时间:{{item.time|setTimeAttr}}</span>
						</div>

						<div class="todo-btn">
							<span class="btn complate" @click="complate(index)">{{btn(item.status)}}</span>
							<span class="btn fail" @click="fail(index)">放弃</span>
							<span class="btn fail" @click="deleteItem(index)">删除</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				dataList: [
					{
						title: '完成VueJs学习',
						status: 1,
						time: ''
					},
					{
						title: '完成Es6学习',
						status: 2,
						time: ''
					},
					{
						title: '完成VueJs TodoList Demo',
						status: 3,
						time: ''
					}
				],
				msg: ''
			}
		},
		filters: {
			setStatusAttr: function (value){
				// console.log(value)
				var arr = {"1": "正在进行中", "2": "已经完成","3": "放弃了"};
				return arr[value];
			},
			setTimeAttr (value) {
				if(value == '') return '';
				var date = new Date(value);
				return date.getFullYear()+'/'+(date.getMonth()+1)+ '/' + date.getDate()+' '+ date.getHours() + ":" + date.getMinutes() + ':' + date.getSeconds();
			}
		},
		methods: {
			addItem(){
				if(this.msg == '') alert('任务为空，我无能为力啊-_-');
				var temp_item = {
					title: this.msg,
					status: 1,
					time:''
				};
				this.dataList.unshift(temp_item)
				this.msg = ''
			},
			complate(index){
				this.dataList[index].time = this.dataList[index].status == 1 ? new Date().getTime() : '';
				this.dataList[index].status = this.dataList[index].status == 3 ? 1 : 2;
			},
			fail(index){
				this.dataList[index].status = 3;
			},
			deleteItem(index){
				this.dataList.splice(index, 1);
			},
			btn(status){
				// console.log(status)
				var status_arr = ['','完成','关闭','启用'];
				return status_arr[status];
			}
		}
	}
</script>
<style scoped>
	.header{
		width: 100%;
		height: 45px;
		text-align: center;
		line-height: 45px;
		background: #f5f5f5;
	}
	.work-block{
		width: 800px;
		margin: 20px auto 0 auto;
		border: 1px solid #ddd;
		background: #f2f2f2;
		border-radius:5px;
		padding: 12px;
	}
	.input-block{
		height: 60px;
		padding-left: 20px;
	}
	.inpt{
		width: 500px;
		height:34px;
		line-height: 34px;
		border:1px solid #ddd;
		padding: 0 8px;
		outline: none;
	}
	.inpt-btn{
		width: 80px;
		line-height: 34px;
		height: 34px;
		margin-left:20px;
		border:1px solid #ddd;
		background: #41B883;
		color:#fff;
		border-radius: 5px;
		outline: none;
	}
	.todo-list{
		background: #fff;
		padding:8px;
	}
	.todo-item{
		height:56px;
		border:1px solid #ddd;
		margin-top: 12px;
		border-radius: 25px;
		padding-left: 20px; 
		position: relative;
	}
	.test-item{
		height:32px;
		line-height: 32px;
		font-size: 16px; 
		display: inline-block;
	}
	.test-text{
		position: absolute;
		bottom:8px;
		left:28px;
		color:#999;
	}
	.test-time{
		position: absolute;
		left:50%;
		bottom:8px;
		color: #27A3FB;
	}
	.todo-btn{
		position: absolute;
		right:20px;
		top: 16px;
	}
	.btn{
		display: inline-block;
		padding: 4px 12px;
		margin-left:12px;
		border-radius: 4px;
		color:#fff;
		cursor: pointer;
	}
	.complate{
		background: #41B883;
	}
	.fail{
		background: #FF7F5F;
	}
</style>