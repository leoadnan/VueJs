import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Example1 from '@/components/example_1/App.vue'
import Example2 from '@/components/example_2/App.vue'
import Example3 from '@/components/example_3/App.vue'
import Example4 from '@/components/example_4/App.vue'
import Example5 from '@/components/example_5/App.vue'
import Example6 from '@/components/example_6/App.vue'
import Example7 from '@/components/example_7/App.vue'
import Example8 from '@/components/example_8/App.vue'

// import Example9 from '@/components/example_9/App.vue' import User from
// '@/components/example_9/user/User.vue' import UserStart from
// '@/components/example_9/user/UserStart.vue' import UserDetail from
// '@/components/example_9/user/UserDetail.vue' import UserEdit from
// '@/components/example_9/user/UserEdit.vue'
import Home from '@/components/example_9/Home.vue'
import Header from '@/components/example_9/Header.vue'

import Example10 from '@/components/example_10/App.vue'
import Example11 from '@/components/example_11/App.vue'

const Example9 = resolve => {
   require.ensure(['../components/example_9/App.vue'], () => {
      resolve(require('../components/example_9/App.vue'));
   }, 'user');
};
const User = resolve => {
   require.ensure(['../components/example_9/user/User.vue'], () => {
      resolve(require('../components/example_9/user/User.vue'));
   }, 'user');
};
const UserStart = resolve => {
   require.ensure(['../components/example_9/user/UserStart.vue'], () => {
      resolve(require('../components/example_9/user/UserStart.vue'));
   }, 'user');
};
const UserDetail = resolve => {
   require.ensure(['../components/example_9/user/UserDetail.vue'], () => {
      resolve(require('../components/example_9/user/UserDetail.vue'));
   }, 'user');
};
const UserEdit = resolve => {
   require.ensure(['../components/example_9/user/UserEdit.vue'], () => {
      resolve(require('../components/example_9/user/UserEdit.vue'));
   }, 'user');
};

Vue.use(VueRouter)

const router = new VueRouter({
   mode: 'history',
   base: __dirname,
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition;
      }
      if (to.hash) {
         return {selector: to.hash};
      }
      return {x: 0, y: 0}
   },
   routes: [
      {path: '/', name: 'Hello', component: Hello}, 
      {path: '/example1', name: 'Exampe_1', component: Example1}, 
      {path: '/example2', name: 'Exampe_2', component: Example2}, 
      {path: '/example3', name: 'Exampe_3', component: Example3}, 
      {path: '/example4', name: 'Exampe_4', component: Example4}, 
      {path: '/example5', name: 'Exampe_5', component: Example5}, 
      {path: '/example6', name: 'Exampe_6', component: Example6}, 
      {path: '/example7', name: 'Exampe_7', component: Example7}, 
      {path: '/example8', name: 'Exampe_8', component: Example8}, 
      {path: '/example10', name: 'Exampe_10', component: Example10}, 
      {path: '/example11', name: 'Exampe_11', component: Example11}, 
      {  
         path: '/example9', name: 'Exampe_9',
         components: {
            default: Example9, 'routing_example9_top': Header
         }
      }, 
      {  
         path: '/home', name: 'home',
         components: {
            default: Home, 'routing_example9_top': Header
         }
      }, 
      {  
         path: '/user',
         components: {
            default: User, 'routing_example9_bottom': Header
         },
         children: [
            {path: '', component: UserStart}, 
            {
               path: ':id', 
               component: UserDetail,
               beforeEnter: (to, from, next) => {
                  console.log('inside route setup')
                  next();
               }
            }, 
            {
               path: ':id/edit',
               component: UserEdit,
               name: "userEdit"
            }
         ]
      }, 
      {path: '/redirect',redirect: {name: 'Exampe_9'}}, 
      {path: '*', redirect: '/example9'}
   ]
});

router.beforeEach((to, from, next) => {
   console.log("global beforeEach")
   next();
});

export default router;