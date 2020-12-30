function updateMap(gps_lat,gps_lng,zoom){
    map = L.map('carte').setView([gps_lat,gps_lng],zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}



function ajaxGet(url, callback) {									// Création d'une requête HTTP
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);								// Appelle la fonction callback en lui passant la réponse de la requête
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}
// function markerCreate(){
//     ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=49d6a17ecb92c37d94454a69aaf7a39a79143522", function (reponse) {
 
//          // Transforme la réponse en tableau d'objets JavaScript
//          var stations = JSON.parse(reponse);
//          var markers = new L.MarkerClusterGroup();
 
//          var station = 
 
//          stations.forEach(function(stations){
//              console.log(stations)
 
//              var marker= new L.marker([stations.position.lat, stations.position.lng]).addTo(map);
//              marker.bindPopup(stations.name);
 
 
//              markers.addLayer(marker);
//              // add more markers here...
//          });
 
 
//          map.addLayer(markers);      
 
//      }); 
//  }