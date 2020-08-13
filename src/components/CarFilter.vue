<template>
  <div id="box" class="card">
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h5>Basisdaten</h5>
            </div>
<form action="/" >
            <div class="form-group">
              <h5><label for="inputBrand">Marke</label></h5>
              <select v-model="brand"  class="form-control" id="inputBrand">
                 <option value="" >Alle</option>
                <option v-for="(item,index) in brandlist" :key="index">{{item}}</option>
                
              </select>
              <hr>
            </div>
            <div class="form-group">
              <h5><label for="inputModell">Modell</label></h5>
              <select v-model="modell" class="form-control" id="inputModell">
               <option value="" selected="selected">Alle</option>
               <option v-for="(item,index) in modellist" :key="index">{{item}}</option>
                
              </select>
              <hr>
            </div>
            <div class="form-group">
              <h5><label for="inputKarosserie">Karosserieform</label></h5>
              
              <select v-model="form" class="form-control" id="inputKarosserie">
                <option value="" selected="selected">Alle</option>
                <option v-for="(item,index) in formlist" :key="index">{{item}}</option>
              </select>
              <hr>
            </div>
          
              <h5><label >Erstzulassung</label></h5>
              <div class="form-group">
            <label for="start">von:</label>
             <input v-model="registartionFirst" type="date" id="start"  value="2000-07" />
              <div>
              <label for="end">bis:</label>
             <input v-model="registartionSecond" type="date" id="end" />
              </div>
              
            </div>
              
           
            <hr>
            <div class="form-inline">
              <h5><label >Verkaufspreis</label></h5>
              <div class="form-group">
            
              <select v-model="priceFirst" class="form-control" id="inputKarosserie">
               <option value="" selected="selected">0</option>
                <option v-for="(item,index) in pricelist" :key="index">{{item}}</option>
                
              </select>
              <select v-model="priceSecond" class="form-control" id="inputKarosserie">
                 <option value="" selected="selected">-</option>
                <option v-for="(item,index) in pricelist" :key="index">{{item}}</option>
              </select>
             
              </div>
            </div>  
           
            <hr>
            
            <div class="form-inline">
              <h5><label >Kilometer</label></h5>
              <div class="form-group">
            
              <select v-model="kilometersfirst" class="form-control" id="inputKarosserie">
                  <option value="" selected="selected">0</option>
                  <option v-for="(item,index) in kilometerlist" :key="index">{{item}}</option>
              </select>
              <select v-model="kilometerssecond" class="form-control" id="inputKarosserie">
                 <option value="" selected="selected">-</option>
                 <option v-for="(item,index) in kilometerlist" :key="index">{{item}}</option>
              </select>
             
              </div>
              </div>
            
            
            <button  v-on:click="$emit('filterrequest', bindrequest())" type="button" class="btn btn-secondary btn-lg float-right mt-4">Suche</button>
             </form>
            
        </nav>

      
    
    </div>
   
  
</template>

<script>
export default {
  name: 'CarFilter',
  props: {
   query:Object
  },
  data: function(){

    return {

      brand: this.query.brand,
      modell:this.query.modell,
      form:this.query.form,
      registartionFirst:this.query.registartionFirst,
      registartionSecond:this.query.registartionSecond,
      priceFirst:this.query.priceFirst,
      priceSecond:this.query.priceSecond,
      kilometersfirst:this.query.kilometersfirst,
      kilometerssecond:this.query.kilometerssecond,
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
    
    this.getmodel(this.brand)
    this.getform(this.form)

  },
  methods:{
    bindrequest: function(){

    return {brand:this.brand,
            modell:this.modell,
            form:this.form,
            registartionFirst:this.registartionFirst,
            registartionSecond:this.registartionSecond,
            priceFirst:this.priceFirst,
            priceSecond:this.priceSecond,
            kilometersfirst:this.kilometersfirst,
            kilometerssecond:this.kilometerssecond
            
            
            
            
            }    },
     getmodel:function(newval){
     fetch('http://localhost:5000/car/model/'+newval)
    .then((res)=> res.json())
    .then((data)=> {
       let datalist= data.map((x)=>Object.values(x))
      let newdatalist= datalist.map(x=>Object.values(x[0]))
      let modellist= newdatalist.map(x=>x[0])
     
      this.modellist=(new Set(modellist));
      
      
      }    )   

  },

  getform: function(){


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
  },
  watch:{

    brand:function(newval){
       if(newval===""){
      this.modellist=[];
      this.formlist=[]

       }
       else{this.getmodel(newval)
       this.getform()
       }
    }
  }
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#sidebar .sidebar-header {
    padding: 20px;
    background: white;
    box-shadow: 2px 2px 2px silver;
    margin-bottom: 10px;

}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: black;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: white;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: black;
    background:white;
}
#box{
    border-radius: 8px;
    padding: 25px;
}

</style>
