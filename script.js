const ipInfoToken = "7b9aac4c123c80";

async function getInput() {
  const ipInput = document.getElementById("inInput").value;

  // Check if the input is empty
  if (!ipInput) {
    alert("Please enter an IP address.");
    return;
  }
  await renderMap(ipInput);
}

const getLocation = async (ip) => {
  try {
    const response = await fetch(`https://ipinfo.io/${ip}?token=${ipInfoToken}`);
    const data = await response.json();
    if(!data.loc && data.error){
      alert(data.error.message)
    }
    const [lat, long] = data?.loc.split(",");
    return { latitude: lat, longitude: long };
  } catch (err) {
    console.error(err);
  }
};

// Function to update the map with the new location
function updateMap({ latitude, longitude }) {
  var map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map)
  .bindPopup('current user location')
  .openPopup();
  }

const renderMap = async (ipAddress) => {
  const location = await getLocation(ipAddress);
  updateMap(location); 
};

