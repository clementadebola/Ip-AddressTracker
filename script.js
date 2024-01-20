const geoipifyApiKey = "at_2sl8Au2CfNGCIVuD93dY5SkgrRC4L";

function trackIP() {
  const ipInput = document.getElementById("inInput").value;

   // Check if the input is empty
   if (!ipInput) {
    alert('Please enter an IP address.');
    return;
}

  //use the geo api
  fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_2sl8Au2CfNGCIVuD93dY5SkgrRC4L&ipAddress=8.8.8.8`
  )
    .then((response) => response.json())
    .then((data) => {
      // extract lat and long from d api ref
      const { latitude, longitude } = data.location;

      //updata the map
      updateMap(latitude, longitude);
    })
    .catch((error) => {
      console.error("error fetching IP data:", error);
    });
}



// Function to update the map with the new location
function updateMap(latitude, longitude) {
  if (!map) {
    // Initialize the map if it hasn't been initialized yet
     map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
      // Add a marker at the tracked location
      L.marker([latitude, longitude]).addTo(map);

  } else{ map.setView([latitude, longitude], 12);

    // Remove previous markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            layer.remove();
        }
    });

    // Add a marker at the new tracked location
    L.marker([latitude, longitude]).addTo(map);
  }
}

// var map = L.map("map").setView([51.505, -0.09], 13);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);
