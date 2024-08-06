

maptilersdk.config.apiKey ="lxdxKZxtrHzEAaxAUH7n"
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: "streets",
  center:[18,70], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// Set optionsf
const marker = new maptilersdk.Marker({color : 'red'})
  .setLngLat([17,90])
  .setPopup(new maptilersdk.Popup().setHTML("<p>Exact location will be provided after booking</p>"))
  .addTo(map);

