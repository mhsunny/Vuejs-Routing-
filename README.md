# Single page App Vue.js

> Single page App: Routing is one of those methods. It allows the user to switch between pages without refreshing the page. This is what makes navigation easy and really nice in  web applications.  

 <ul class="learning-lession">

      <li> Setting up Routes </li>
      <li> Router Links </li>
      <li> Route Parameters </li>
      <li> Watching the $route Object </li>
      <li> More on Router Links </li>
      <li> Programmatically Redirecting User </li>
      <li> Hash vs History Mode </li>

    </ul>

## Build Setup

<code>

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


</code>


<code>


<template>
  <div class="main-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
       <li><router-link :to="{name: 'About'}">About</router-link></li>
       <li><router-link :to="{name: 'Contact'}">Contact</router-link></li>
    </ul>

    <h2>User Profiles</h2>

    <ul>
      <li v-for ="(id, index) in userIds" :key="index">

        <router-link :to="{name: 'ViewProfile', params:{user_id: id}}">
          <span>Profile {{id}}</span>

        </router-link>
      </li>
    </ul>

    <h2>Navigation Control</h2>
    <ul>
       <li><button @click="goBack">Go Back</button></li>
       <li><button @click="goHome">Rediect to Home</button></li>
              <li><button @click="goForward">Go Forward</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {  
      userIds : ['1', '2', '3', '4']  
    }
  },
  methods:{
    goHome(){
     this.$router.push({name:'Home'})
    },
    goBack(){
      this.$router.go(-1);
    },
    goForward(){
      this.$router.go(1);
    }
  }
}
</script>


</code>

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
"# Vuejs-Routing-" 
