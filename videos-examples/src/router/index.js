import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Example1 from '@/components/example_1/App.vue'
import Example2 from '@/components/example_2/App.vue'
import Example3 from '@/components/example_3/App.vue'
import Example4 from '@/components/example_4/App.vue'
import Example5 from '@/components/example_5/App.vue'
import Example6 from '@/components/example_6/App.vue'
import Example7 from '@/components/example_7/App.vue'
import Example8 from '@/components/example_8/App.vue'
import Example9 from '@/components/example_9/App.vue'

Vue.use(Router)

export default new Router({
mode: 'history',
  base: __dirname,    
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/example1',
            name: 'Exampe_1',
            component: Example1
        },
        {
            path: '/example2',
            name: 'Exampe_2',
            component: Example2
        },
        {
            path: '/example3',
            name: 'Exampe_3',
            component: Example3
        },
        {
            path: '/example4',
            name: 'Exampe_4',
            component: Example4
        },
        {
            path: '/example5',
            name: 'Exampe_5',
            component: Example5
        },
        {
            path: '/example6',
            name: 'Exampe_6',
            component: Example6
        },
        {
            path: '/example7',
            name: 'Exampe_7',
            component: Example7
        },
        {
            path: '/example8',
            name: 'Exampe_8',
            component: Example8
        },
        {
            path: '/example9',
            name: 'Exampe_9',
            component: Example9
        }
    ]
})