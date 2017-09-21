import Vue from 'vue'
import Router from 'vue-router'
import setTitle from '@/utils/setWechatTitle.js'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      meta:{
        title: '首页'
      },
      component: resolve => require(['@/components/home'], resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      meta:{
        title: '详情页'
      },
      component: resolve => require(['@/components/detail'], resolve)
    },
    {
      path: '/list',
      name: 'list',
      meta:{
        title: '列表页'
      },
      component: resolve => require(['@/components/list'], resolve)
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
router.afterEach((route) => {
  console.log(route)
  let title = route.meta.title;
  setTitle.setWechatTitle(title)
})
export default router;