function markerCreate(research){
    
    var marker= new L.marker([research.gps_lat, research.gps_lng]).addTo(map);
    marker.bindPopup(research.name + ' : ' + research.zip_code);
 
    
}