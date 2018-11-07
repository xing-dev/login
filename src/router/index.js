import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index},
    // {path: '/activity', name: 'activity', component: Activity,children:[
    //     {path: 'm1', name: 'm1_index', component: M1_index,children:[
    //         {path: 'activity', name: 'm1_acticity', component: M1_acticity},
    //         {path: 'download', name: 'm1_download', component: M1_download},
    //         {path: 'yuzhuce', name: 'm1_yuzhuce', component: M1_yuzhuce},
    //     ]},
    // ]},
  ],
  mode:'history'
})
