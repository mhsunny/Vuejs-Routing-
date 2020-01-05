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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 
.main-nav ul li{
  list-style-type: none;
  display: inline-block;
  padding: .5rem;
  margin: .5rem;
}
a{
  color: blue;
}
a.router-link-exact-active{
  color: purple;
}
</style>
