import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
//import About from '@/components/Contact'
import ViewProfile from '@/components/ViewProfile'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    // {
    //   path: '/contact', 
    //   name: 'Contact',
    //   component: Contact
    // },
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    }
  ]
})
