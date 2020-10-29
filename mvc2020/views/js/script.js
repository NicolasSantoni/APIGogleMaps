var URL_BASE="http://127.0.0.1/cimol/coordenacao";

$(document).ready(function(){

    $("#user-show").click(
        function(){
            if($("#user-info").hasClass('hide')){
                $("#user-info").removeClass('hide');
                $("#user-info").addClass('show');
            }else{
                $("#user-info").removeClass('show');
                $("#user-info").addClass('hide');
            }
        }
    );


});

let map;
let lati;
let longi;
function Enviar() {
  var origem = document.getElementById('end').value;
  origem = origem.replace(" ", "+");
  origem = origem.replace(", ", "+");
  origem = origem.replace(",", "+");
  origem = origem.replace("++", "+");
  xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let dadosJSON=this.responseText;
            dadosJSON=JSON.parse(dadosJSON);
            var directionsDisplay = new google.maps.DirectionsRenderer;
            var directionsService = new google.maps.DirectionsService;
            map = new google.maps.Map(document.getElementById("map"), {
              center: { lat: -29.64773, lng: -50.785691 },
              zoom: 13,
            });
            directionsDisplay.setMap(map);
            calculateAndDisplayRoute(directionsService, directionsDisplay);
            var noPoi = [{
              featureType: "poi",
              stylers: [{ visibility: "off" }]
            }];
            map.setOptions({styles: noPoi});
            function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                directionsService.route({
                  origin: {lat: dadosJSON.results[0].geometry.location.lat, lng: dadosJSON.results[0].geometry.location.lng},
                  destination: { lat: -29.64773, lng: -50.785691 },
                  travelMode: google.maps.DirectionsTravelMode.DRIVING
                },
                function(response, status) {
                  directionsDisplay.setOptions({ preserveViewport: true });
                  directionsDisplay.setDirections(response);
              });

          }
        };

    }

    xhttp.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address="+origem+"&key=AIzaSyDumnWNd_agiv26Iqhe4ABcCMNFfyG6LbI", true);
    xhttp.send();
}
function Geo() {
  if (navigator.geolocation) {
    xhttp=new XMLHttpRequest();
      xhttp.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
              let dadosJSON=this.responseText;
              dadosJSON=JSON.parse(dadosJSON);
              var directionsDisplay = new google.maps.DirectionsRenderer;
              var directionsService = new google.maps.DirectionsService;
              map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: dadosJSON.results[0].geometry.location.lat, lng: dadosJSON.results[0].geometry.location.lng },
                zoom: 13,
              });
              directionsDisplay.setMap(map);
              calculateAndDisplayRoute(directionsService, directionsDisplay);
              var noPoi = [{
                featureType: "poi",
                stylers: [{ visibility: "off" }]
              }];
              map.setOptions({styles: noPoi});
              function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                console.log(navigator.geolocation.getCurrentPosition(sus));
                function sus(pos) {
                  directionsService.route({
                    origin: {lat: pos.coords.latitude, lng: pos.coords.longitude},
                    destination: {lat: dadosJSON.results[0].geometry.location.lat, lng: dadosJSON.results[0].geometry.location.lng},
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                  },
                  function(response, status) {
                    directionsDisplay.setOptions({ preserveViewport: true });
                    directionsDisplay.setDirections(response);
                });
                }

            }
          };

      }

      xhttp.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address=Rua+Guilherme+Lahm+1778+Centro+Taquara+RS&key=AIzaSyDumnWNd_agiv26Iqhe4ABcCMNFfyG6LbI", true);
      xhttp.send();
  }
  else {
    alert("Seu navegador não suporta este recurso!");
  }
}
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -29.64773, lng: -50.785691 },
    zoom: 16,
  });
}
