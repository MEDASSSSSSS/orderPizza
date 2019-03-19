import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode:'history',//在地址中去除#号
	scrollBehavior(to, from, savedPosition){//设置路由滚动行为
		// return { x:0,y:100}
		// return {selector:'.btn'}
		if(savedPosition){
			return savedPosition
		}else{
			return { x:0,y:0}
		}
	}
})

//全局守卫,to进入到某路由，from从某路由离开，next传入的方法
// router.beforeEach((to,from,next) => {
// 	//引入vuex后可以通过store.gettes.isLogin === false 来判断
// 	if(to.path == '/login' || to.path == '/register'){
// 		next();
// 	}else{
// 		alert("Please login first!")
// 		next('/login');
// 	}
// } 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
