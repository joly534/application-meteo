// creation de l'emplacement pour la carte
document.getElementById('weathermap').innerHTML = "<div id='carte'></div>";

// coordonnées gps et zoom par défaut
var gps_lat = 48.862725;
var gps_lng = 2.287592;
var zoom = 5;

// on affiche la map avec les coordonnées par défaut
updateMap(gps_lat,gps_lng,zoom);


// fonction de recherche de ville
function searchCity() {

    // on recupère la valeur saisie dans le input texte
    var saisieBrute= document.getElementById('ville').value;

    // on transforme la saisie en chaine de caractère
    var saisie = saisieBrute.toString();
    var alerte = document.getElementById('alerte');

    ajaxGet("json/cities.json", function (reponse) { 

        // on transforme la réponse en tableau d'objets JavaScript
        var city = JSON.parse(reponse);

        // on percours le tableau
        for (var i=0;i<city.length;i++) {

            // on verifie la saisie
            if ( saisie != "" ) {

                // on rajoute une majuscule au début de la saisie pour que ça colle avec les noms de ville du fichier JSON
                var saisieTraite = saisie[0].toUpperCase() + saisie.substring(1);

                // si la ville est trouvée dans le JSON
                if (saisieTraite === city[i].name) {
                    
                    // on réaligne la map avec les coordonées de cette ville
                    document.getElementById('weathermap').innerHTML = "<div id='carte'></div>";
                    updateMap(city[i].gps_lat,city[i].gps_lng,12);

                    alerte.innerHTML = "";

                    //on créé un marker avec les coordonées de cette ville
                    markerCreate(city[i]);                    

                }
                
            } else {

                alerte.innerHTML = "Veuillez entrer le nom d'une ville.";

            }

        }

    }); 

}