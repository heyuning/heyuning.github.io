import Vue from 'vue'
import Router from 'vue-router'
import index from './com/index.vue'
import no1 from './com/no1.vue'
import no2 from './com/no2.vue'
import no3 from './com/no3.vue'
import no4 from './com/no4.vue'
import no5 from './com/no5.vue'
Vue.use(Router)

export default new Router({
	routes:[
	{path:'/',name:'首页',component:index},
	{path:'/no1',name:'分类',component:no1},
	{path:'/no2',name:'排行',component:no2},
	{path:'/no3',name:'女生频道',component:no3},
	{path:'/no4',name:'男生频道',component:no4},
	{path:'/no5',name:'书架',component:no5}
	]
})
