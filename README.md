# Single page App Vue.js

> Single page App: Progressive app. Here I show how to use the routing in Vue js. You can switch the pages without refresh the page. Alos it shows how to communicate among components like from parent to child, child to partent, and child to child component.  This is the reall cool thing the basic understand the vue js  routing and navigation for a single page application.

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
 
## CODE

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
## App.vue Component template part
<pre>
<code>

<!-- Commented out before run the project -->
<!-- <template> 
<router-link to="/">Home</router-link>
<router-link :to="{name: 'About'}">About</router-link>
<router-link :to="{name: 'Contact'}">Contact</router-link>
 <p>User Profiles</p> 
   <ul>
      <li v-for ="(id, index) in userIds" :key="index">

        <router-link :to="{name: 'ViewProfile', params:{user_id: id}}">
          <span>Profile {{id}}</span>

        </router-link>
      </li>
    </ul>  

    <p>Navigation Control</p>
    <ul>
       <li><button @click="goBack">Go Back</button></li>
       <li><button @click="goHome">Rediect to Home</button></li>
              <li><button @click="goForward">Go Forward</button></li>
    </ul> 
  </div>
</template>-->
 
</code>
</pre>

## Script part
<pre>
<code>
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
</pre> 