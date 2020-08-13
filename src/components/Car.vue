<template>
<div class="container">
 <div class="row justify-content-center">
   <div class="col-12">
 <carinformation v-if="finished" v-bind:carinformation="this.cardata[0].carinformation" v-bind:carseller="this.cardata[0].seller[0]" v-bind:imgsrc="this.cardata[0].imgsrc" class=' mt-5'/>
 </div>
 </div>
<div class="row">
<div class="col-12">
 <cardetails/>
</div>
</div>


 </div>
  
</template>

<script>
import Carinformation from "./Carinformation.vue"
import Cardetails from "./Cardetails.vue"



export default {
  name: 'Car',
   components: {

     Carinformation: Carinformation,
     Cardetails: Cardetails
    
    
   
  },
  data: function(){
    return {
      cardata:null,
      finished:false
    }
  },
  created: function () {
    fetch('http://localhost:5000/car/id/'+this.id)
    .then((res)=> res.json())
    .then((data)=> {
      this.cardata=(data);
      this.finished=true;
    })
    .catch((err)=> console.log(err))
  },
  props: {
      id:String
   
  },
  

  }
  
  
  

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{

  margin-top: 20px;
}

</style>
