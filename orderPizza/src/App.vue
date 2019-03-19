<template>
  <div id="app">
    <div class="container">
      <Heador></Heador>
    </div>
    <div class="container">
      <router-view>
      </router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="deliveryLink"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="historyLink"></router-view>
        </div>
        <div class="col-sm-12 col-md-6">
          <router-view name="guideLink"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heador from './components/Header'
export default {
 
  components:{
    Heador,
  },
  created(){
    //fetch
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(result =>{
      console.log(result)
    }).catch(console.log('err'))

  }
  
}
</script>

<style>

</style>
