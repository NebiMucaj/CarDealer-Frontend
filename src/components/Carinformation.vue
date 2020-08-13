<template>
   <div id="contentcard" class="card w-100 ">

    
     <div id='carheader' class="card-header p-3 mb-2 bg-secondary text-white" >
   <h4 class="card-title">{{carinformation.title}}</h4>
   <p >{{carinformation.form}}</p>
  </div> 
   <div class="conatiner">
    <div class="row ">
     
        <div id="carouselExampleIndicators" class="col-6 carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img v-bind:src="imgsrc[0]['1']" class="d-block w-100" alt="...">
              </div>
              <div v-for = "(item, index) in this.imgsrc" :key="index" class="carousel-item ">
                <img v-bind:src="Object.values(item)[0]" class="d-block w-100" alt="...">
              </div>
              
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
       
       <div class="col-5 " id="datacard"  >
        
       <h2><span class="badge badge-success"> € {{carinformation.price}}</span></h2>
       <hr>
       
     
     
       
       
       <div class="row">
        
        <div class="col-4">

         <h4> {{carinformation.kilometers}} km</h4>
          <p class="text-muted"> {{carinformation.state}}</p>
         <hr>

        </div>
        <div class="col-4">
          <h4>06/2018</h4> 
          <p class="text-muted">{{carinformation.holder}}.Fahrzeughalter</p>
          <hr>

         </div>
         <div class="col-4">

          <h4> 140 kW </h4>
          <p class="text-muted"> {{carinformation.transmission}},{{carinformation.engine}}</p>
          <hr>

         </div>

      </div>
      <div class="row">
      <span id="badge" class="col-12">
       <span v-for="extra in carinformation.extras" :key="extra" class="badge badge-pill badge-secondary badgeitem"><h6>{{extra}}</h6></span>
       <hr>
      
      
      </span>

      
    
      </div>
      <div class="row">
      <div class=" col-12 card ">
      
       <span> <b>{{carseller.city}}</b>, {{carseller.role}}</span>
         <div class="row justify-content-between">
        <div col-4 align-self-end>
          {{carseller.name}}
        </div>
        <div col-4 align-self-end>
          ★★★★☆
        </div>
        <div col-  align-self-start>
          <img class="w-60" v-bind:src="carseller.imgsrc">
        </div>

         </div>
         <div class="row">
        <button type="button" class="col-6 btn btn-outline-danger"><a href="#contact">E-mail senden</a></button>
        <button type="button" class="col-6 btn btn-outline-danger">{{carseller.tel}}</button>

         </div>
         <div class="row">
          <button type="button" class=" col-12 btn btn-outline-dark">Zur Kaufanfrage</button>

        </div>
        </div>
      

        
      </div>
    
      </div>
      </div>
       </div>
 

       <div class="card-footer text-muted">
       
      </div>
      
    </div>
</template>

<script>



export default {
  name: 'Carinformation',
   components: {
    
    
   
  },
  props: {
      carinformation:Object,
      carseller:Object,
      imgsrc:Array
   
  },
  data: function(){
    return {
      
    }
  },
  
  
  

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
item img {
    width: 100%;
    height: auto
  }
  
  
  
  #datacard{
      margin-left: 40px;
  }

.badge{
  margin: 5px;
}
#badge{
  margin-top: 12px;
}
#dcontentcard{
  height: 650px;
  border-radius: 15px;
  padding: 5px;
}
#carheader{
  height: 80px;
  margin-bottom: 10px;
  background-color: whitesmoke;
 border-top-left-radius: 4px;
border-top-right-radius: 4px;
margin-top: 0px;
}
.badge{

  transition: transform .2s;
}
.badge:hover{
transform: scale(1.05);
}
a { color: inherit; } 
a:hover{
  color:inherit;
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='dark' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='dark' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}
</style>
