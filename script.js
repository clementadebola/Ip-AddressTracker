const geoipifyApiKey = 'at_2sl8Au2CfNGCIVuD93dY5SkgrRC4L';

function trackIP(){
    const ipInput = document.getElementById('inInput').value;

    //use the geo api
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_2sl8Au2CfNGCIVuD93dY5SkgrRC4L&ipAddress=8.8.8.8`).then(response => response.json())
    .then(data => {

       // extract lat and long from d api ref
       const {latitude, longitude } = data.location;

       //updata the map
       updataMap(latitude, longitude);
    })
    .catch(error => {
        console.error('error fetching IP data:', error);
    });
}

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


