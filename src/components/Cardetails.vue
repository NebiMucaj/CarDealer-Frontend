<template>
    <div id="detailsCard" class=" card w-100">
     <div  class="conatiner ">
       <div class="row">
         <div class="col-12">
        <nav class=" navbar navbar-expand-xl navbar-light bg-light">
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div id="top-navigation" class="navbar-nav"></div>
            <a class="nav-item nav-link" href="#carinformation">Fahrzeugdetails</a>
            <a class="nav-item nav-link" href="#">Ausstattung</a>
            <a class="nav-item nav-link" href="#discription">Beschreibung</a>
            <a class="nav-item nav-link" href="#contact">Kontakt</a>
            
          </div>
          <button type="button" class="btn btn-outline-danger float-right">Angebot beanstanden</button>
        </nav>
      </div>
    </div>
    <h3 class="mt-3">Fahrzeugdetails</h3>
    <div id="carinformation" class="row">
    
      <div class="col-6">
    <h5>Zustand</h5>
    <table  class="table table-hover borderless ">
     
      <tbody>
        <tr>
          
         
          <td>Zustand</td>
          <td>Gebraucht</td>
        </tr>
        <tr>
         <td>Fahrzeughalter</td>
          <td>1</td>
        </tr>
        <tr>
          <td>HU Prüfung</td>
           <td>06/2021</td>
         </tr>
         <tr>
          <td>Garantie</td>
           <td>✓</td>
         </tr>
         <tr>
          <td>Scheckheftgepflegt</td>
           <td>✓</td>
         </tr>
         <tr>
         <td>Nichtraucherfahrzeug</td>
           <td>✓</td>
         </tr>
       
      </tbody>
    </table>
    <h5 class="mt-4">Antrieb</h5>
    <table  class="table table-hover borderless">
     
      <tbody>
        <tr>
          
         
          <td>Getriebeart</td>
          <td>Automatik</td>
        </tr>
        <tr>
         <td>Hubraum</td>
          <td>1.984 cm³</td>
        </tr>
        <tr>
          <td>Zylinder</td>
           <td>4</td>
         </tr>
         <tr>
          <td>Leergewicht</td>
           <td>1.601 kg</td>
         </tr>
         <tr>
          <td>Antriebsart</td>
           <td>Front</td>
         </tr>
         
       
      </tbody>
    </table>
    <h5 class="mt-4">Zustand</h5>
    <table  class="table  table-hover borderless">
     
      <tbody>
        <tr>
          
         
          <td>Umwelt</td>
          <td>Kraftstoff</td>
        </tr>
        <tr>
         <td>Kraftstoffverbrauch</td>
          <td> <table id="tableConsumption" class="table borderless">
            <tr>
              <td>6 l/100km(kombi)</td>
                 
            </tr>
            
            <tr>
              <td>7,8 l/100km(innerort)</td>
                 
            </tr>
            <tr>
              <td>4,9 l/100km(außerort)</td>
                 
            </tr>
          </table>

          </td>
        </tr>
        <tr>
          <td>CO2-Emission</td>
           <td>135 gCo2/km(komb)</td>
         </tr>
         <tr>
          <td>Schadstoffklasse</td>
           <td>Euro 6</td>
         </tr>
         <tr>
          <td>Feinstaubplakete</td>
           <td>4(Grün)</td>
         </tr>
         
       
      </tbody>
    </table>


    </div>
    <div class="col-6">
      <h5>Zustand</h5>
    <table  class="table table-hover borderless ">
     
      <tbody>
        <tr>
          
         
          <td>Marke</td>
          <td>Volkswagen</td>
        </tr>
        <tr>
         <td>Modell</td>
          <td>Arteon</td>
        </tr>
        <tr>
          <td>Angebotsnummer</td>
           <td>0248919812</td>
         </tr>
         <tr>
          <td>Erstzulassung</td>
           <td>2018</td>
         </tr>
         <tr>
          <td>Außenfarbe</td>
           <td>Rot</td>
         </tr>
         <tr>
         <td>Lackierung</td>
           <td>Metallic</td>
         </tr>
         <tr>
          <td>Farbe laut Hersteller</td>
          <td>romance red</td>
        </tr>
        <tr>
         <td>Innenausstattung</td>
          <td>Teilleder,Schwarz</td>
        </tr>
        <tr>
          <td>Karosserieform</td>
           <td>Coupe</td>
         </tr>
         <tr>
          <td>Anzahl der Türen</td>
           <td>5</td>
         </tr>
         <tr>
          <td>Sitzplätze</td>
           <td>5</td>
         </tr>
         <tr>
         <td>Schlüsselnummer</td>
           <td>0603/CDI</td>
         </tr>
        
        <tr>
        <td>Länderversion</td>
          <td>Deutsche Ausführung</td>
        </tr>
       
      </tbody>
    </table>
    <div class="mt-4 d-flex justify-content-center">
    <div class="card " style="width: 50%;">
     <div class="card-title">

     <h5><b> CO2-Effizienz</b></h5>
     </div>
     <div class="card-body">
       <div class="card-text">

        <b>Auf der Grundlage der gemessenen CO2-Emissionen unter Berücksichtigung der Masse des Fahrzeugs ermittelt.</b>
       </div>
       <hr>
       <img style="width: 250px;" clas ="card-img" src="https://www.autoscout24.de/assets/classified-detail/images/detail-page/116044bcf0c9e39130aa24689db51664-envkvB.svg"> 
     </div>
      
      
  </div>
    </div>



    </div>
    
      </div>
      <hr>
      <div class="row">
<div class="col-12">

  <div id="discription" class="card text-white bg-danger mb-3" style="max-width: auto;">
    <div class="card-header">Beschreibung</div>
    <div class="card-body">
      <h5 class="card-title">Media:</h5>
      <p class="card-text">Navigation Discover Pro, 3D-Kartendarstellung, DVD-Laufwerk, Festplatten-Navigation, Splitscreen-Funktion, SD-Kartenschacht, Touchscreen-Display, Radio Composition Media, Audiosystem MP3-fähig, externer Audioeingang (AUX), iPod®/iPhone®/Android Schnittstelle, USB-Schnittstelle/Anschluss, Bluetooth Schnittstelle, Freisprecheinrichtung, Sprachsteuerung-/Bedienung, Telefonvorbereitung mit Bluetooth, Induktionsladeschale für Smartphone / Wireless Charging, CD-Player</p>
    <h5 class="card-title">Komfort:</h5>
      <p class="card-text">Head-Up Display, Keyless Access / Keyless Drive, LED Scheinwerfer, Standheizung mit Fernbedienung, Active Info Display, Adaptives Lichtsystem/-verteilung, dynamisches Kurvenlicht, Kompass in Kombiinstrument, Spiegel elektrisch klappbar, Standlüftung, Telematik/Notrufsystem (Vorbereitung), 12,3 Zoll TFT Bildschirm für Instrumente, 230V Steckdose, Abbiegelicht, Außenspiegel mit Beifahrerspiegelabsenkung, elektrische Parkbremse, Innen-/Aussenspiegel automatisch abblendend, LED (Teil)-Rückleuchten, LED Tagfahrlicht, Multifunktionsanzeige Premium, Allwetter-/Schlechtwetterlicht, Ausstiegs-/Einstiegsleuchten, Komfortblinker (1xAntippen = 3xBlinken), Scheinwerferreinigungsanlage (SRA), Service-Intervall-Anzeige, Blinkleuchten seitlich in die Außenspiegel integriert, Umgebungs-/Umfeldausleuchtung, Aktivsitz/Massagesitz für Fahrer, Lendenwirbelstütze mit Massagefunktion, Lordose / Lendenwirbelstütze, coming home / leaving home, LED (Teil-) Blinker, Climatronic, elektr. Spiegel beheizt, ISOFIX Kindersitzbefestigung, Zentralverriegelung mit Fernbedienung, (3-Zonen Klimaautomatik), 4xSitzheizung, 12V Steckdose, Colorglas, Easy Open, Pollenfilter, Sportsitz(e).</p>
    </div>
  </div>
</div>

      </div>
      <hr>
     <div id="contact" class="row">
       <div class="col-5">


       
       </div>
       <div class="col-6 ">
        <h4>Händler kontaktieren</h4>
        <a name="contactform">
        <form  class="mt-5">
          
          <div class="form-group">
            <label for="inputName">Ihr Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="z.B. Max Mustermann">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Ihre Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="z.B max@mustermann.de">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="inputTelefon">Ihre Telefonnummer</label>
            <input type="tel" class="form-control" id="inputTelefon"  placeholder="z.B 0178 05479647">
        </div>
        <div class="form-group">
          <label for="inputmessage">Ihre Nachricht:</label>
          <textarea class="form-control" rows="8" id="inputmessage" placeholder="Guten Tag,

Ich interessiere mich für Ihr Fahrzeug. Kontaktieren Sie mich bitte.
          
 Mit freundlichen Grüßen"></textarea>
        </div>         
          <div class="form-group form-check mt-5">
            <input type="checkbox" class="form-check-input" id="inputAgb">
            <label class="form-check-label" for="inputAgb"><p class="text-muted">Ich stimme der Verarbeitung meiner Daten, wie in der Einwilligungserklärung von CarDealer beschrieben , zu. Ich kann diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p></label>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="inputcopy">
            <label class="form-check-label" for="inputcopy"><p class="text-muted">Kopie an mich senden</p></label>
          </div>
          <button type="submit" class="btn btn-outline-danger float-right"><h5>E-mail senden</h5></button>
        </form>
        </a>
       </div>
     </div>
     

     </div> 

    </div>
</template>

<script>



export default {
  name: 'Caridetails',
   components: {
    
    
   
  },
  props: {
      
   
  },
  data: function(){
    return {
      
    }
  },
  
  
  

  
}
</script>


<style scoped>
#detailsCard{
 
  padding: 5px;
 margin-top: 15px;
 height: auto;
 border-radius: 8px;
 

}
#carinformation{
margin-top: 30px;

}
.borderless td, .borderless th {
  border: none;
 
}
.borderless{
  border-collapse: separate;
  border-spacing: 5px;
 
}
.borderless td{
  padding: 4px;
  
}

#tableConsumption td{
  padding: 3px;
}

#pagecontent{
  margin-bottom: 30px;
 
}


</style>
