<template>
  <div class="main-nav">
     
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" :href="{name: 'Home'}"><router-link to="{name: 'Home'}">Single Page App</router-link></a>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link :to="{name: 'Home'}">Home</router-link> </li>
      <li><router-link :to="{name: 'About'}">About</router-link> </li>
       <li><router-link :to="{name: 'Contact'}">Contact</router-link> </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><span class="glyphicon glyphicon-user"></span> <router-link :to="{name: 'SignIn'}">Sign Up</router-link></li>
      <li><span class="glyphicon glyphicon-log-in"></span> <router-link :to="{name: 'SignUp'}">Sign In</router-link></li>
    </ul>
  </div>
</nav> 
  <h4>User profile  and pass parameter routing</h4>

  <ul class="userp">
    <li v-for ="(id, index) in userIds" :key="index">

      <router-link :to="{name: 'ViewProfile', params:{user_id: id}}">
        <span>Profile {{id}}</span>
      </router-link>
    </li>
  </ul>

  <h4>Navigation Control</h4>
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
  color: #fff;
}
a.router-link-exact-active{
  color: #41b883;
}
.userp a{
  color: #41b883;
}
</style>
