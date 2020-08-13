<template>
<div class="container w-100 h-100">
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a v-bind:class="classlist[0]"  data-toggle="tab" role="tab"  >Allgemeine Informationen</a>
  </li>
  <li class="nav-item">
    <a v-bind:class="classlist[1]" data-toggle="tab"  role="tab"  >Details</a>
  </li>
  <li class="nav-item">
    <a v-bind:class="classlist[2]"  data-toggle="tab"  role="tab">Beschreibung</a>
  </li>
</ul>


  

  <div v-if="currentpage%3==0" class="tab-pane fade show active h-80 border border-success " role="tabpanel" aria-labelledby="home-tab">
  <div  class="content">
      
     <div id='carheader' class="card-header p-3 mb-2 bg-success text-white" >
   <h1 class="card-title"> 
                
                <input v-model="carinformation.title" type="text"  class="form-control name" placeholder="Titel eingeben" required>
            
            </h1>
   <p ><input v-model="carinformation.form" type="text"  class="form-control name" placeholder="Karosserieform" required></p>
   
   
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
            
            <div v-if="imgsrc.length==0" class=" alert alert-danger" role="alert" style="height:50% !important;" >
              Sie haben keine Bilder ausgewählt
            </div>
             <div v-if="imgsrc.length>0">
              <div  class="carousel-item active">
                <span @click="imgsrc.splice(0,1)" class="badge badge-danger d-flex justify-content-center"><h6>Löschen</h6></span>
                <img v-bind:src="imgsrc[0][Object.keys(imgsrc[0])[0]]" class="d-block w-100" alt="...">
                
              </div>
              <div v-if="imgsrc.length>=1" >
              <div  v-for = "(item, index) in this.imgsrc" :key="index" class="carousel-item ">
                 <span @click="imgsrc.splice( index, 1 )" class="badge badge-danger d-flex justify-content-center"><h6>Löschen</h6></span>
                <img v-bind:src="Object.values(item)[0]" class="d-block w-100" alt="...">
                </div>
              </div>
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

            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button @click="addimg"  class="btn btn-outline-secondary" type="button"  >add</button>
  </div>
  <input required v-model="newimg" type="url" class="form-control" placeholder="fügen sie eine Bildadresse hinzu" aria-label="" aria-describedby="basic-addon1">
</div>
      
          </div>
       
       <div class="col-5 " id="datacard"  >
        
       <span class="badge badge-success w-100"> <input v-model="carinformation.price" type="text"  class="form-control name" placeholder="Bitte den Preis angeben(in €)"> </span>
       
       <hr>
       
     
     
       
       
       <div class="row">
        
        <div class="col-6">

         <h5> <input v-model="carinformation.kilometers" type="text"  class="form-control namedark" placeholder="gefahrene Kilometer"> </h5>
        </div>
        <div class="col-6">
          <input v-model="carinformation.state" type="text"  class="form-control namedark" placeholder="zustand">
         

        </div>
       </div>
       <div class="row">
        <div class="col-6">
          <h4><input v-model="carinformation.registration" type="text"  class="form-control namedark" placeholder="Erstzulasssung(YYYY-MM)"></h4> 
        </div>
       <div class="col-6">
        <input v-model="carinformation.holder" type="text"  class="form-control namedark" placeholder="Fahrzeughalter(Anzahl)">
       </div> 

         </div>
         <div class="row">
         <div class="col-3">

          <input v-model="carinformation.power" type="text"  class="form-control namedark" placeholder="PS"> 
         </div>
           <div class="col-3">
             <input v-model="carinformation.transmission" type="text"  class="form-control namedark" placeholder="Getriebe">
           </div>
           <div class="col-6">
             <input v-model="carinformation.engine" type="text"  class="form-control namedark" placeholder="Kraftstoff">
           </div>
         
      
          

        

      </div>
      <div class="row">
      <span id="badge" class="col-12">
      <h4> <span v-for=" extra in carinformation.extras" :key="extra" class="badge badge-pill badge-secondary badgeitem">{{extra}}
         <span @click="carinformation.extras.splice( carinformation.extras.indexOf(extra), 1 )" class="badge badge-light">x</span>
       </span> </h4>
        
       <hr>
      
      
      </span>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button @click="carinformation.extras.push(newextra)" class="btn btn-outline-secondary" type="button">add</button>
  </div>
  <input v-model="newextra" type="text" class="form-control" placeholder="fügen sie spezielle Extras hinzu" aria-label="" aria-describedby="basic-addon1">
</div>
      
    
      </div>
      
      
      </div>
      </div>
       </div>
 

       <div class="card-footer text-muted">
       
      </div>
   
  </div>
  </div>
  <div  v-if="currentpage%4===0" class="tab-pane fade show active h-75 border border-success "  role="tabpanel" aria-labelledby="profile-tab">
    <form class="content">
  <div class="row">
    <div class="col-6">
    <h5> Merkmale</h5>
      <input v-model="Merkmale.brand" type="text" class="form-control" placeholder="Automarke">
       <input v-model="Merkmale.model" type="text" class="form-control" placeholder="Modell">
     
         <input v-model="Merkmale.ausenFarbe" type="text" class="form-control" placeholder="Aussenfarbe">
          <input v-model="Merkmale.lakierung" type="text" class="form-control" placeholder="Lackierung">
           <input v-model="Merkmale.farbeLautHersteller" type="text" class="form-control" placeholder="Farbe laut Hersteller">
           <label for="door">Türen</label>
      <select v-model="Merkmale.anzahlTuren" id="dor" class="form-control">
        <option selected>4</option>
        <option>2</option>
      </select>
           <label for="seat">Sitze</label>
      <select v-model="Merkmale.anzhalSitze" id="seat" class="form-control">
        <option selected>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>

      </select>
            <input v-model="Merkmale.schlusselNumer" type="text" class="form-control" placeholder="Schlüsselnummer">
            <label for="country">Länderversion</label>
      <select v-model="Merkmale.landerVersion" id="country" class="form-control">
        <option selected>Deutsche Ausführung</option>
        <option>Amerikanische Ausführung</option>
        <option>Englische Ausführung</option>
      </select>
    </div>
       <div class="col-6">
     
      
      <label for="zustand"><h5>Zustand</h5></label>
    
       <select v-model="zustand.zustand" id="zustand" class="form-control">
        <option selected>gebraucht</option>
        <option>neu</option>
        
      </select>
  <label for="garantie">Garantie</label>
       <select v-model="zustand.garantie" id="garantie" class="form-control">
        <option value ="true" selected>ja</option>
        <option value="false">nein</option>
       </select>
      
        <input v-model="zustand.holder" type="number" class="form-control" placeholder="Anzhal der Fahrzeughalter">
      <label for="hu">HU Prüfung</label>
      <input v-model="zustand.huPrüfung" type="date" class="form-control"  id="hu">
      <label for="scheckheft">Scheckheftgepflegt</label>
       <select v-model="zustand.scheckheftGepflegt" id="scheckheft" class="form-control">
        <option value ="true" selected>ja</option>
        <option value="false">nein</option>
       </select>
        <label for="raucher">Nichtraucherfahrzeug</label>
       <select v-model="zustand.nichtRaucherfahrzeug" id="raucher" class="form-control">
        <option value ="true" selected>ja</option>
        <option value="false">nein</option>
        </select>
    </div>
  </div>
  <div class="row">
  <div class="col-6">
    <h5>Umwelt </h5>
   <label for="kraftsstoff">Kraftstoff</label>
       <select v-model="umwelt.kraftStoff" id="kraftstoff" class="form-control">
         <option selected>Super 95</option>
        <option>Benzin</option>
        <option>Gas</option>
        </select>
      <input v-model="umwelt.kombi" type="number" class="form-control" placeholder="Verbrauch(kombi)" >      
    <input v-model="umwelt.auserOrts" type="number" class="form-control" placeholder="Verbrauch(auserorts)" >      
    <input v-model="umwelt.innerOrts" type="number" class="form-control" placeholder="Verbrauch(innerorts)" >      
<label for="schadstoff">schadstoffklasse</label>
       <select v-model="umwelt.schadstoffKlasse" id="schadstoff" class="form-control">
        <option  selected>Euro 1</option>
         <option  selected>Euro 2</option>
          <option  selected>Euro 3</option>
           <option  selected>Euro 4</option>
            <option  selected>Euro 5</option>
             <option  selected>Euro 6</option>
       
       </select>
       <label for="feinstaub">Scheckheftgepflegt</label>
       <select v-model="umwelt.feinStaubPlakete" id="feinstaub" class="form-control">
        <option  selected>keine</option>
         <option  selected>2(Rot)</option>
          <option  selected>3(Gelb)</option>
           <option  selected>4(Grün)</option>
      
       </select>
  </div>
  <div class="col-6">
<h5>Antrieb</h5>
<label for="getriebe">Scheckheftgepflegt</label>
       <select v-model="antrieb.getriebeArt" id="getriebe" class="form-control">
        <option  selected>Automatik</option>
             <option  >Manuell</option>
             
      
       </select>
       <input v-model="antrieb.hubraum" type="number" class="form-control" placeholder="Hubraum(cm²)" >      
  <input v-model="antrieb.zylinder" type="number" class="form-control" placeholder="Anzahl der Zylinder" >      
<input v-model="antrieb.leerGewicht" type="number" class="form-control" placeholder="Leergewicht(Kg)" >      
<label for="antrieb">Antriebsart</label>
       <select v-model="antrieb.antriebsart" id="antrieb" class="form-control">
        <option  selected>Front</option>
             <option  >Heck</option>
              <option  >Allrad</option>
             
      
       </select>
  </div>

  
  
  </div>
</form>
  </div>
  <div v-if="currentpage%5==0" class="tab-pane fade show active h-75 border border-success "  role="tabpanel" aria-labelledby="contact-tab">
   <div class="content">
      <div id="discription" class="card text-white bg-success mb-3" style="max-width: auto;">
    <div class="card-header">Beschreibung</div>
    <div id="discriptioncontent">
    <div @click="edit(discription,index)" v-for="(discription,index) in beschreibung " :key="index" class="card-body">
      <span @click="beschreibung.splice(index,1)" class="badge badge-danger d-flex justify-content-center"><h6>Löschen</h6></span>
      <h5 class="card-title">{{Object.keys(discription)[0]}}</h5>
      <p class="card-text">{{Object.values(discription)[0]}}</p>
    </div>
    </div>
    <label for="title"><h5>Titel</h5></label>
    <input v-model="discriptionTitle" type="text" id="title" class="w-100">
    <label for="beschreibung"><h5>Beschreibung</h5></label>
    <textarea v-model="discription" id="beschreibung" rows="5" class="w-100">
    </textarea>
    <button type="button" class="btn btn-outline-success">Hinzufügen</button>
      </div>
      <button @click="newdiscription()" type="button" class="btn btn-outline-success float-right">Success</button>
    
    <input v-model="carinformation.sellerID" type="text" id="title" class="w-100" placeholder="SellerID">
     <button @click="post" type="button" class="btn btn-success float-right">Fertig</button>

   </div>
  </div>
  
  

 
<div class="row">

<!-- Tab carousel -->
<div class="col-6">

  
<button v-if="currentpage>=4 && currentpage<=5" v-on:click="decrement" class="prevtab btn btn-success">Prev</button>
</div>
<div class="col-6">
<button v-if="currentpage>=3 && currentpage<=4" v-on:click="increment" class="nexttab btn btn-success" style="float:right;">Next</button>
</div>
</div>

</div>

</template>

<script>





export default {
  
  name: 'NewCar',
   components: {

  
   
  },
  
  data: function(){
    return {
      currentpage:3,
      classlist:['nav-link disabled active ','nav-link disabled','nav-link disabled'],
      newextra:'',
      newimg:'',
      discriptionTitle:'',
      discription:'',
      index:-1,
      sellerID:"",
    
     
      carinformation: {
    "title": "Mercedes-Benz zu verkaufen",
    "form": "Limousine",
    "price":55000,
    "kilometers": 45000,
    "registration": "2017-02-18",
    "power": 230,
    "state": "gebraucht",
    "holder":2,
    "transmission":"Automatik",
    "engine": "Diesel",

    "extras":[

        "Standheizung","Abstandtempomat","Alarmanlage",
        "Einparkhilfe selbstlenkendes System","Navigationssystem",
        "Head-up Display","Massagesitz","elektrische Heckklappe"
    ],
    "sellerID": "5e7b69e5d89840403e1a8b50"
   




      },
      imgsrc:[{"1":"https://prod.pictures.autoscout24.net/listing-images/2b70dae4-86d3-4b43-a6d0-39c2a0b1d529_649d6a71-2e2d-4115-b4cb-25dcd08da7a2.jpg/640x480.jpg"},{"2":"https://prod.pictures.autoscout24.net/listing-images/2b70dae4-86d3-4b43-a6d0-39c2a0b1d529_ce53da49-a25d-4efe-9e55-b1f0f3476ca3.jpg/640x480.jpg"},{"3":"https://prod.pictures.autoscout24.net/listing-images/2b70dae4-86d3-4b43-a6d0-39c2a0b1d529_ce53da49-a25d-4efe-9e55-b1f0f3476ca3.jpg/640x480.jpg"}],
        Merkmale:{
      "brand":"Mercedes-Benz",
      "model":"S-Klasse",
      
      "ausenFarbe":"schwarz",
      "lakierung":"Metallic",
      "farbeLautHersteller":"romace red",
      "anzahlTuren":5,
      "anzhalSitze":5,
      "schlusselNumer":"0603/CDI",
      "landerVersion":"Deutsche Ausführung"
      
      
   
   },
   zustand:{
      "zustand":"gebraucht",
      "holder":1,
      "huPrüfung":"2020-05-18",
      "garantie":true,
      "scheckheftGepflegt":true,
      "nichtRaucherfahrzeug":true
  },
  umwelt:{
   "kraftStoff": "Super 95",
   
     "kombi":6,
      "innerOrts":7.8,
      "auserOrts":4.6,
    
    
   
    "schadstoffKlasse":"Euro 6" ,
    "feinStaubPlakete":"4(Grün)"


  },

  antrieb:{



    "getriebeArt":"Automatik",
    "hubraum": 1984,
    "zylinder":4,
    "leerGewicht":1601,
    "antriebsart":"Front"
  },
  beschreibung:
  [{"Media":"Navigation Discover Pro, 3D-Kartendarstellung, DVD-Laufwerk, Festplatten-Navigation, Splitscreen-Funktion, SD-Kartenschacht, Touchscreen-Display, Radio Composition Media, Audiosystem MP3-fähig, externer Audioeingang (AUX), iPod®/iPhone®/Android Schnittstelle, USB-Schnittstelle/Anschluss, Bluetooth Schnittstelle, Freisprecheinrichtung, Sprachsteuerung-/Bedienung, Telefonvorbereitung mit Bluetooth, Induktionsladeschale für Smartphone / Wireless Charging, CD-Player."},{"Komfort":" Head-Up Display, Keyless Access / Keyless Drive, LED Scheinwerfer, Standheizung mit Fernbedienung, Active Info Display, Adaptives Lichtsystem/-verteilung, dynamisches Kurvenlicht, Kompass in Kombiinstrument, Spiegel elektrisch klappbar, Standlüftung, Telematik/Notrufsystem (Vorbereitung), 12,3 Zoll TFT Bildschirm für Instrumente, 230V Steckdose, Abbiegelicht, Außenspiegel mit Beifahrerspiegelabsenkung, elektrische Parkbremse, Innen-/Aussenspiegel automatisch abblendend, LED (Teil)-Rückleuchten, LED Tagfahrlicht, Multifunktionsanzeige Premium, Allwetter-/Schlechtwetterlicht, Ausstiegs-/Einstiegsleuchten, Komfortblinker (1xAntippen = 3xBlinken), Scheinwerferreinigungsanlage (SRA), Service-Intervall-Anzeige, Blinkleuchten seitlich in die Außenspiegel integriert, Umgebungs-/Umfeldausleuchtung, Aktivsitz/Massagesitz für Fahrer, Lendenwirbelstütze mit Massagefunktion, Lordose / Lendenwirbelstütze, coming home / leaving home, LED (Teil-) Blinker, Climatronic, elektr. Spiegel beheizt, ISOFIX Kindersitzbefestigung, Zentralverriegelung mit Fernbedienung, (3-Zonen Klimaautomatik), 4xSitzheizung, 12V Steckdose, Colorglas, Easy Open, Pollenfilter, Sportsitz(e)."}]
      
      
   
   }
   
    
    

  },
 
  methods:{
  increment: function(){
    this.currentpage++
   this.classlist[this.currentpage-3]=this.classlist[this.currentpage-3]+" active"
   
  },
  decrement: function(){
    this.classlist[this.currentpage-3]='nav-link disabled'
    this.currentpage-- ;
  },
  addimg: function(){
   var newid =(this.imgsrc.length+1)
   var obj={};
   obj[newid]=this.newimg
  
    this.imgsrc.push(obj)
  },
  newdiscription:function(){
    
 if(this.index===-1){
   var obj={ };
  obj[this.discriptionTitle]=this.discription
  

  this.beschreibung.push(obj)
 }else{
    console.log('Hallo')
 this.beschreibung.splice(this.index,1)
 var obj2={};
  obj2[this.discriptionTitle]=this.discription
  
  this.beschreibung.push(obj2)
 
 this.index=-1

 }
 this.discriptionTitle=''
 this.discription=''
 
  },
  edit:function(discription,index){
    this.index=index
    this.discriptionTitle= Object.keys(discription)[0]
    this.discription=Object.values(discription)[0]
  },

  post: function(){
var postbody=JSON.stringify({carinformation:this.carinformation,zustand:this.zustand,antrieb:this.antrieb,umwelt:this.umwelt,Merkmale:this.Merkmale,beschreibung:this.beschreibung,imgsrc:this.imgsrc})
   console.log(postbody)
   fetch('http://localhost:5000/car', {
    method: 'post',
    headers:{'Content-Type': 'application/json'},
    body: postbody
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data)
   window.location.href = "http://localhost:8080/car/id/"+data._id

  });
  }


  },

  
  props: {
    
  },
  

  }
  
  
  

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  height: auto;
}
.container{
    margin-top: 80px;
    width:400px;
    height: auto;
}
.tab-pane{

   border-radius: 0px 8px 8px 8px;
   margin-top: 0px;
  
 
  
}
ul .active {
  background-color:rgb(92, 184, 92) !important;
  border:0px;
 
  
}
.name {
    background: transparent   ! important;
    border: none ;
    border-bottom: 1px solid #000000;
    outline:none;
    box-shadow:none;
    color: white !important;
    
}  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color :black !important;
  opacity: 1; /* Firefox */
}


.namedark {
    background: transparent   ! important;
    border: none ;
    border-bottom: 1px solid #000000;
    outline:none;
    box-shadow:none;
    color: black !important;
}
.content{

  height: 850px;
}
#discriptioncontent{
  overflow-y: scroll;
  height: 450px;
}


</style>
