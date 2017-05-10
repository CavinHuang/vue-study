<template>
	<div id="demo5">
		<page :pageTotal="total" :curr="currPage" v-on:pageChange="pageChange"></page>
	</div>
</template>
<script type="text/javascript">
	import page from '../../components/Page/index.vue'
	export default {
		data () {
			return {
				total: 15,
				currPage: 2
			}
		},
		methods: {
			pageChange (index, item) {
				console.info('触发',index, item)
			}
		},
		components: {
			page
		}
	}
</script>