<template>
   <div id="app">
     <nav class=" col-12 navbar fixed-top navbar-light bg-dark ">
        <a class="navbar-brand text-white" href="#">
          
          CarDealer
        </a>
      </nav>
      <div class="d-flex justify-content-center">
     <router-view/>
      </div>
     

       <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      
    </div>
  </footer>
   </div>
  
</template>

<script>







export default {
  name: 'App',
  components: {
    
    
   
  },
 
}
</script>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  color: #2c3e50;
  margin: 0px;
  top:0px;
  left: 0px;
  width: 100%;
  
    font-family: 'Poppins', sans-serif;
    background: #fafafa;


  

}
#sticky-footer {
  flex-shrink: none;
}


</style>
