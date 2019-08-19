import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Test',
            component: Test
        }
    ]
})
