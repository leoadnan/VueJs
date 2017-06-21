import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

//Vue.http.options.root='https://vuejs-http-67dbc.firebaseio.com'

Vue.http.interceptors.push((request,next)=> {
  console.log(request);
  if(request.method == 'POST') {
    // request.method='PUT'
  }
  next(response => {
    // response.json = () => {return {messages: response.body}}
  });
})

export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasChanged',age);
    }
  }
})

Vue.directive('highlight',{
  bind(el,binding,vnode){
    //el.style.backgroundColor=binding.value;
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(()=>{
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }
      else {
        el.style.color = binding.value;
      }
    },delay)
  }
});

// Vue.mixin({
//   created() {
//     console.log('Global Mixin - Created Hook');
//   }
// });
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
