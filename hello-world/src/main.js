import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import First from './experiments/first/App.vue';
import Second from './experiments/second/App.vue';

Vue.config.productionTip = false

export const bus = new Vue();

Vue.use(vueResource);
Vue.use(VueRouter);

// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString().slice(2, 8);
//   }
// })

// Vue.directive('theme', {
//   bind(el, binding, vnode) {
//     if(binding.value == 'wide') {
//       el.style.maxWidth = "1200px"
//     }
//     else if (binding.value == 'narrow'){
//       el.style.maxWidth = "560px";
//     }
//     if (binding.arg == 'column'){
//       el.style.background = "#ddd";
//       el.style.padding = '20px';
//     }
//   }
// })

// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// })

Vue.filter('snippet', function(value){
  return value.slice(0,100) + "..."
})
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: First}, 
    {path: '/second', component: Second}, 
  ]
});
/* eslint-disable no-new */
new Vue({router, template: `
    <div id="app">
      <ul>
        <li><router-link to="/">First</router-link></li>
        <li><router-link to="/second">Second</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `}).$mount('#app')

// new Vue({
//   el:'#app',
//   router,
//   render: h => h(app)
// })