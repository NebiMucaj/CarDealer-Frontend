<template>


<div id="content">


        
         <img id ="car" src="../assets/picture/car-png.png">
        
        
         <form id="searchForm" class=".bg-primary " action="/search#" method="GET"> 
           <div class="row">
             <div class="col-6">
           <div class="form-group">
              <h5><label for="inputBrand">Marke</label></h5>
              <select v-model="brand"  class="form-control input-sm" id="inputBrand" name="brand">
                 <option value='' >Alle</option>
                <option v-for="(item,index) in brandlist" :key="index">{{item}}</option>
                
              </select>
              
            </div>
             </div>
             <div class="col-6">
            <div class="form-group">
              <h5><label for="inputModell">Modell</label></h5>
              <select  class="form-control input-sm" id="inputModell" name="modell">
                  <option value='' >Alle</option>
               <option v-for="(item,index) in modellist" :key="index">{{item}}</option>
                
              </select>
            
            </div>
            </div>
            
           </div>
           <hr>

           <div class="row">
           <div class="col-6">
            <div class="form-group">
              <h5><label for="inputKarosserie">Karosserieform</label></h5>
              <select  class="form-control input-sm" id="inputKarosserie" name="form">
                 <option value='' >Alle</option>
                 <option v-for="(item,index) in formlist" :key="index">{{item}}</option>
              </select>
              
            </div>
           </div>
           <div class="col-6">
          
              <h5><label >Erstzulassung</label></h5>
               <div class="form-inline">
              <div class="form-group">
            <label for="start">von:</label>
              <input  type="date" id="start"   name="registartionFirst" />
              <label for="end">bis:</label>
             <input  type="date" id="end" name="registartionSecond" />
              </div>
              </div>
            </div>
           </div>
           <hr>
              
           <div class="row">
            <div class="col-6">
           
            <h5><label >Verkaufspreis</label></h5>
            <div class="form-inline">
              
              <div class="form-group">
            
              <select  class="form-control" id="inputKarosserie" name="priceFirst" value="">
              <option value="" selected="selected">0</option>
                <option v-for="(item,index) in pricelist" :key="index">{{item}}</option>
                
              </select>
              <select  class="form-control" id="inputKarosserie" name="priceSecond" value="">
              <option value="" selected="selected"></option>
                <option v-for="(item,index) in pricelist" :key="index">{{item}}</option>
              </select>
             
              </div>
            </div>  
            </div>
           
            <div class="col-6">
            <h5><label >Kilometer</label></h5>
            <div class="form-inline">
              
              <div class="form-group ">
            
              <select class="form-control" id="inputKarosserie" name="kilometersfirst">
                  <option value="" selected="selected">0</option>
                  <option v-for="(item,index) in kilometerlist" :key="index">{{item}}</option>
              </select>
              <select  class="form-control" id="inputKarosserie" name="kilometerssecond">
                <option value="" selected="selected"></option>
                 <option v-for="(item,index) in kilometerlist" :key="index">{{item}}</option>
              </select>
              </div>
              </div>
              </div>
           </div>
              <hr>
            
            
                <button type="submit" class="btn btn-secondary btn-lg float-right"> Suche</button>
           
     </form>    
    
    
    </div>



  
</template>

<script>




export default {
  name: 'Home',
   components: {


    
   
  },
  data: function(){
  

    return {
        brand:'',
      brandlist:[],
      modellist:[],
      formlist:[],
      pricelist:[500,1000,1500,2000,2500,3000,4000,5000,6000,7000,8000,9000,10000,12500,15000,17500,20000,25000,30000,40000,50000,75000,100000],
      kilometerlist:[2500,5000,10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,125000,150000,175000,200000]

    }
  },
  
  created:function(){
    fetch('http://localhost:5000/car/brand')
    .then((res)=> res.json())
    .then((data)=> {
      
      let datalist= data.map((x)=>Object.values(x))
      let newdatalist= datalist.map(x=>Object.values(x[0]))
      let brandlist= newdatalist.map(x=>x[0])
      this.brandlist=(new Set(brandlist));


      
    })
    .catch((err)=> console.log(err))
    

  },
  watch:{

    brand:function(newval){
       fetch('http://localhost:5000/car/model/'+newval)
    .then((res)=> res.json())
    .then((data)=> {
       let datalist= data.map((x)=>Object.values(x))
      let newdatalist= datalist.map(x=>Object.values(x[0]))
      let modellist= newdatalist.map(x=>x[0])
     
      this.modellist=(new Set(modellist));
      


      
    })
    .catch((err)=> console.log(err))

       fetch('http://localhost:5000/car/form/')
    .then((res)=> res.json())
    .then((data)=> {
       let datalist= data.map((x)=>Object.values(x))
      let newdatalist= datalist.map(x=>Object.values(x[0]))
      let formlist= newdatalist.map(x=>x[0])
     
      this.formlist=(new Set(formlist));
      


      
    })
    .catch((err)=> console.log(err))

    }
  }

  

  }
  
  
  

  

</script>


<style scoped>
body{
width: 100%;
widows: auto;



}
#car{
    width: 600px;
    animation-name: animation;
    animation-duration: 3s;
    position: relative;
    top:600px;
    left:650px
    

    
    
      
}

    
    

@keyframes animation {
    0% {
        
        top:600px;
        left:1500px;
        width: 400px;
    }    
    100% {
        
        top:600px;
        left:650px;
        width: 600px;
      }

      
  }
  #searchForm{
  width: 975px;
  border: solid black;
  opacity: 0.9;
  background-color:whitesmoke;
  position: fixed;
  top:90px;
  left:50px;

  
  border-radius: 12px;
  animation-name:animationSearchForm;
  animation-duration: 3s;
  padding: 5px;
  
  
  
  

  }

  @keyframes  animationSearchForm{

    0% {
        
        top:90px;
        left:0px;
        
    }    
    100% {
        
        top:90px;
        left:50px;
        
      }
  }
  #formgruopOne{
 margin-left: 6px;

 
      }

#content{
  
background: url(../assets/picture/road.jpeg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
width: 100%;
height: 900px;
}
input{
  background-color: white;
}




</style>
