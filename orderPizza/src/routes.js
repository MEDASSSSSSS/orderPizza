import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import About from './components/about/About.vue'
import Admin from './components/Admin.vue'
//二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import Guide from './components/about/Guide.vue'

Vue.use(VueRouter)

export const routes = [
	{path:'/',name:"homelink",components:{
		default: Home,
		'deliveryLink':Delivery,
		'historyLink':History}},
	{path:'/menu',name:"menulink",components:{default:Menu,'guideLink':Guide}},
	{path:'/login',name:"loginlink",component:Login},
	{path:'/register',name:"registerlink",component:Register},
	{path:'/about',
	 name:"aboutlink",
	 redirect:'/about/contact',//此时相当于用redirect来设置默认展示页
	 component:About,
	 children:[{path:'/about/contact', name:"contactLink",component:Contact},
	 {path:'/about/delivery', name:"deliveryLink",component:Delivery},
	 {path:'/about/history', name:"historyLink",component:History},
	 {path:'/about/guide', name:"guideLink",component:Guide},
	 ]
	},
	{path:'/admin',name:"adminlink",component:Admin},
	{path:'*',redirect:'/'},//当用户路径输入不匹配以上设置，自动跳转为该行所设置的页面
]