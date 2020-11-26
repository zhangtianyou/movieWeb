import Vue from 'vue'
import Router from 'vue-router'
import Home from './layout/home'
import Index from './layout/index'
Vue.use(Router)
export default new Router({
	routes:[
		{
			path:'/',
			name:'home',
			component:Home,
			redirect:"/index",
			children:[
				{
					path:'index',
					name:'index',
					component:Index
				}
			]
		}
	]
})