
var index={template:'#index'}
var guanyu={template:'#guanyu'}
var chanpin={template:'#chanpin'}
var yanfa={template:'#yanfa'}
var texiao={template:'#texiao'}
var zixun={template:'#zixun'}
var lianxi={template:'#lianxi'}
var type_routers = {
    template:'#type_routers'
}
var routes=[
    {
        path:'/',
        name:'index',
        component:index
    },
    {
        path:'/guanyu',
        name:'guanyu',
        component:guanyu,
        redirect: '/guanyu/no1/企业理念',
        children:[
            {path:'no1/:type',name:'guanyu_no1',component:type_routers},
         ]
    },
    {
        path:'/chanpin',
        name:'chanpin',
        component:chanpin,
    },
    {
        path:'/yanfa',
        name:'yanfa',
        component:yanfa,
        redirect: '/yanfa/no1/研发团队',
        children:[
            {path:'no1/:type',name:'yanfa_no1',component:type_routers},
         ]
    },
    {
        path:'/texiao',
        name:'texiao',
        component:texiao,
        redirect: '/texiao/no1/特效药原理',
        children:[
            {path:'no1/:type',name:'texiao_no1',component:type_routers},
         ]
    },
    {
        path:'/zixun',
        name:'zixun',
        component:zixun,
        
    },
    {
        path:'/lianxi',
        name:'lianxi',
        component:lianxi,
    },
]
var router=new VueRouter({
    routes,
})
new Vue({
    el:'#box',
    router,
    watch: {
        '$route.path'(a,b){
            console.log(a,b)
        }
    },
})