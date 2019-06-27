import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'


// import store from '../store'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            props: true,
        }
    ]
})