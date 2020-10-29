<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDumnWNd_agiv26Iqhe4ABcCMNFfyG6LbI&callback=initMap&libraries=&v=weekly" defer></script>
<div class="mapa">
  <h1>COMO CHEGAR</h1>
  <form name="form">
    <input type="text" id="end" class="form-control" placeholder="Endereço de origem">
    <input type="button" class="btn btn-primary" onclick="Enviar();" value="Verificar rota" />
    <input type="button" class="btn btn-primary" onclick="Geo();" value="Pegar localização atual" />
  </form>
  <div id="map"></div>
</div>
