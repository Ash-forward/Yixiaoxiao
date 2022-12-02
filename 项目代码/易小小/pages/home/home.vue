<template>
		<Search ></Search>
		<Content></Content>

</template>

<script>
	//引进子组件
	import Search from './components/search.vue'
	import Content from './components/content.vue'
	
	export default {
		
		components:{
			Search,
			Content
			},
		
	}
</script>

<style scoped>

</style>
