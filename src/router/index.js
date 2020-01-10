import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Contact from '@/components/Contact'

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
    {
      path: '/contact', 
      name: 'Contact',
      component: Contact
    },
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    },
    {
      path: '/signin', 
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup', 
      name: 'SignUp',
      component: SignUp
    }
  ]
})
