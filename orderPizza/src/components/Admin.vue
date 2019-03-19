<template>
	<h1>admin</h1>
</template>
<script>
	export default{
		data(){
			return {
				name:"medassssss"
			}
		},
		beforeRouteEnter(to,from,next) {
			//在此函数执行时，还不能调用data里的数据，但是可以通过在next使用回调函数异步的使用数据
			next(vm => {
				alert("Hello  " + vm.name);
			})
		}
		
	}

</script>
<style>
	
</style>