<template>
  <div class="view-profile">
    <h1>User Profile of {{ userId}}</h1>
   
  </div> 
</template>

<script>
export default {
  name: 'ViewProfile',
  data () {
    return {
      userId : this.$route.params.user_id
  
  
    }
  },
  methods:{
    updateId(){
      this.userId=  this.$route.params.user_id
    }
  },
  watch:{
    $route: 'updateId'
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 
</style>
