<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>
					Welcome to PizzaOrdering!
				</h1>
				<h2>
					Make your choice!
				</h2>
				<button @click="goToMenu" class="btn btn-success">Order Something</button>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		methods:{
			goToMenu(){
				//跳转到上一次浏览的页面
				//this.$router.go(-1)
				//跳转指定页面
				//this.$router.replace('./menu')
				//跳转到指定路由名字下
				//this.$router.replace({name:'menulink'})
				//通过push跳转,也可使用路由名字进行跳转
				this.$router.push('/menu')
			}
		}
	}

</script>
<style>
#home{
	background: url('../assets/1084389.jpg');
	height: 85vh;
	padding: 10%;
}
h1,h2{
	margin: 6%;
}
.background{
	background:#eee;
	opacity: 0.8;
	max-width: 70vw;
	margin: 0 auto;
	padding: 20px 0;
}
	
</style>