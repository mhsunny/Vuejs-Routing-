<template>
  <div id="app"> 
   
    <Navbar />
    
    <router-view/>


 <ul class="learning-lession">

      <li> Setting up Routes </li>
      <li> Router Links </li>
      <li> Route Parameters </li>
      <li> Watching the $route Object </li>
      <li> More on Router Links </li>
      <li> Programmatically Redirecting User </li>
      <li> Hash vs History Mode </li>

    </ul>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.learning-lession{
  position: absolute;
  left: 0; 
  top: 40%;
    background: aliceblue;
        padding: 10px 30px;
         width: 200px;
    
}
.learning-lession li{
  text-align: left;
}
@media screen and (max-width:768px){
  .learning-lession{
      position: relative;
      margin: 0 auto;
     
      
  }
  .learning-lession li{
  text-align: center;
}
}
</style>
