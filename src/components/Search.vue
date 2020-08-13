<template>
 
  <div id="container" class="container">
    
    <div id="content" class="row">
   <div class="col-3">
     <CarFilter v-on:filterrequest="setquery" v-bind:query="query" />
   </div>
   <div class="col-9"> 
     <div class="row">
 <div id="inputSort" class=" col-12 input-group mb-3 ">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Sortieren Nach</label>
          </div>
          <select v-model="sortcriteria" class="custom-select" id="inputGroupSelect01" >
            <option value="0" selected >Beste Ergebnisse</option>
            <option value="1">Preis aufsteigend</option>
            <option value="2">Preis absteigend</option>
            <option value="3">Kilometerstand aufsteigend</option>
            <option value="4">Kilometerstand absteigend</option>
            <option value="5">Leistung aufsteigend</option>
            <option value="6">Leistung absteigend</option>
            <option value="7">Erstzulasssung aufsteigend</option>
            <option value="8">Erstzulassung absteigend</option>
          <option value="9">Neuste Angebote zuerst</option>
            
          </select>
       

      </div>
     </div>
    <div class="row"> 
   <Carlist  v-bind:data="carlist" v-bind:criteria="sortcriteria"/>
   </div>
  
   </div>
   
  
  </div>
  
  {{carlist}}
  </div>
</template>

<script>
import CarFilter from "./CarFilter"
import Carlist from "./Carlist"
let databib=require('/home/nebi/webtech/cardealer/src/assets/data.js')


export default {
  name: 'Search',
   components: {
    
    'CarFilter':CarFilter,
    'Carlist':Carlist
   
  },
  props: {
   
  },
  data: function(){
    return {
      sortcriteria:null,
      carlist:databib.data,
      query:this.$route.query,
      cardata:null,
      loaded:false
    }
  },
  created: function () {
    this.getdata(this.$route.query)

  },
  methods:{

    setquery: function(event){
     this.query=event
    },
    getdata:function(newvalue){
    fetch('http://localhost:5000/car/search?kilometersfirst='+newvalue.kilometersfirst+'&pricefirst='+newvalue.priceFirst+'&pricesecond='+newvalue.priceSecond+'&brand='+newvalue.brand+'&form='+newvalue.form+'&model='+newvalue.modell+'&kilometerssecond='+newvalue.kilometerssecond+'&registrationsecond='+newvalue.registartionSecond+'&registrationfirst='+newvalue.registartionFirst)
    .then((res)=> res.json())
    .then((data)=> {
      this.carlist=data;
      this.loaded=true
      console.log(newvalue)
      console.log(data)
      
    })
    .catch((err)=> console.log(err))

    }
   
  },
  watch:{
     query: function(newvalue){

       this.getdata(newvalue);
     }


   } 
  
  
  

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{

  width: 100%;
  margin:0px;
  
}
#content{
  margin-top: 80px;
}
#paginitaionNav{

    position: relative;
    
    left:250px;
    margin-top: 50px;
}
option:hover{

  background-color: red !important
}

</style>
