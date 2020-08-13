<template>
<div>
<div v-if="datasize>0">
 <a v-bind:href="'http://localhost:8080/car/id/'+car._id" class="card carcard" v-for="(car,index) in carData" :key="index" >
           
            <div class="row ">
            
              <div class="col-4">
                  <img v-bind:src="car.imgsrc[0]['1']" class="w-100">
                </div>
                <div class="col-8 px-3">
                  <div class="card-block px-3">
                    <h5 class="card-title">{{car.carinformation.title}} </h5>
                   <h3><span class="badge badge-success">€ {{car.carinformation.price}}</span></h3>
                  <div class="row">
                    <div class="col-3">
      
                     {{car.carinformation.kilometers}} km
                     <hr>
      
                    </div>
                    <div class="col-3">
      
                      {{car.carinformation.registration}}
                      <hr>
       
                     </div>
                     <div class="col-6">
      
                      {{car.carinformation.power}} PS
                      <hr>
       
                     </div>
      
                  </div>
                  <div class="row">
                    <div class="col-3">
      
                     {{car.carinformation.state}}
                     <hr>
      
                    </div>
                    <div class="col-6">
      
                     {{car.carinformation.holder}}.Fahrzeughalter
                      <hr>
       
                     </div>
                     <div class="col-3">
      
                      {{car.carinformation.transmission}}
                      <hr>
       
                     </div>
      
                  </div>
                  <div class="row">
                    <div class="col-2">
      
                     {{car.carinformation.engine}}
                     <hr>
      
                    </div>
                    <div class="col-5">
      
                      {{car.umwelt.kombi}}l/100 km (komb)²
                      <hr>
       
                     </div>
                     <div class="col-5">
      
                      {{car.carinformation.co2Emission}}g CO2/km (komb)²
                      <hr>
       
                     </div>
      
                  </div>
                  </div>
                </div>
                
              
      
              </div>
              <div class="row">
                <div class="col-12">
                <hr>
                </div>
                 
              </div>
              <div class="row">
              <div class="col-8">
                <p>{{car.seller[0].name}}<br>
                {{car.seller[0].city}}</p>
              </div>
              <div class="col-4">
                <a v-bind:href="car.seller[0].link">+Weitere Fahrzeuge anzeigen</a>
              </div>
      
      
              </div>

              
            </a>
   
            
</div>

<div v-else class="w-100" >
<div class="alert alert-danger" role="alert" >
          <h2><b> Leider keine Treffer!</b></h2>
         </div>
</div> 


</div>
</template>

<script>

export default {
  name: 'Carlist',
  props: { 
    data:Array,
    criteria:String
 },
 watch:{
    criteria: function (val) {
      (this.sort(val))
    },
    data:function(newval){
      this.datasize=newval.length
    
  
    }
   
 },computed:{
   carData:function(){
     let newCarList=this.data.filter(x=>x.imgsrc.length!=0)
     console.log(newCarList)
     return newCarList
   }
 },
 methods:{
   converToPs: function(a){
     return a* 1,35962
   },
   sort: function(criteria){
      let newcarlist=[]
    
    switch(criteria){
   case '0':{ newcarlist=this.carlist
              break;
      
         }
   case '1': {
     
     newcarlist= this.data.sort(function(a,b){return  a.carinformation.price-b.carinformation.price});
     
     break;
     
     
    }
    case '2':{
      
     newcarlist= this.data.sort(function(a,b){return  b.carinformation.price-a.carinformation.price});
     
     break;
    }
    case "3":{
       newcarlist= this.carlist.sort(function(a,b){return  a.carinformation.kilometers-b.carinformation.kilometers});
      break;
    }
    case "4":{
       newcarlist= this.data.sort(function(a,b){return  b.carinformation.kilometers-a.carinformation.kilometers});
      break;
    }
    case "5":{
       newcarlist= this.data.sort(function(a,b){return  a.carinformation.power-b.carinformation.power});
      break;
    }
    case "6":{
       newcarlist= this.data.sort(function(a,b){return  b.carinformation.power-a.carinformation.power});
      break;
    }
    case "7":{
       newcarlist= this.data.sort(function(a,b){return  new Date(a.carinformation.registration)-new Date(b.carinformation.registration)});
      break;
    }
    case "8":{
       newcarlist= this.data.sort(function(a,b){return  new Date(b.carinformation.registration)-new Date(a.carinformation.registration)});
      break;
    }
    case "9":{
       newcarlist= this.data.sort(function(a,b){return  new Date(b.carinformation.createDate)-new Date(a.carinformation.createDate)});
      break;
    }
    default:break;


    }
     this.carlist=newcarlist


   }
 },
 data:function(){
return{
 carlist:this.data,
 datasize:this.data.length
}
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carcard{
    padding: 15px 0px 0px 15px;
  
    border-radius: 8px;
    margin-bottom: 20px;
    transition: transform .2s;
}
.carcard:hover{

    background-color: whitesmoke;
    border-color: red;
    box-shadow: 10px 10px 15px silver;
    transform: scale(1.05);
}

</style>
