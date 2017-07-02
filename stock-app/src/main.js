// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import {routes} from './routes';
import store from './store/store'
import VueResource from 'vue-resource';

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root= 'https://vuejs-stock-trader-cb140.firebaseio.com/'

Vue.filter('currency',(value)=>{
  return '$'+value.toLocaleString();
})
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
