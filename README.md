# Single page App Vue.js

> Single page App: Progressive app. Single page App: Learning purpose only.Using Vue routing which allows to switch the pages without refresh the page. Alos it shows how to communicate among components like from parent to child, child to partent, and child to child component.  This is the reall cool thing the basic understand the vue js  routing and navigation for a single page application.

<pre>
<code>
- Setting up Routes  
- Router Links  
- Route Parameters  
- Watching the $route Object  
- More on Router Links  
- Programmatically Redirecting User  
- Hash vs History Mode  
- Navbar   
</code>
</pre>
 
## CODE App.vue component
-- This comnonent has three parts, template (html part), script and style. 
<pre>
<code> 
  import Vue from 'vue'
  import Router from 'vue-router'
  import Home from '@/components/Home'
  import About from '@/components/About'
  import About from '@/components/Contact'
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
</code>
</pre>  
