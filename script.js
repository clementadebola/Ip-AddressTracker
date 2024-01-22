const ipInfoToken = "7b9aac4c123c80";


async function getInput() {
  const ipInput = document.getElementById("inInput").value
  //
  const locationCard = document.getElementById('locationCard');
  const ipAddressSpan = document.getElementById('ipAddress');
const locationSpan = document.getElementById('location');
const ispSpan = document.getElementById('isp');
const locationDetails = document.getElementById('locationDetails');
//

  // Check if the input is empty
  if (!ipInput) {
    alert("Please enter an IP address.");
    return;
  }
    // Show the loader before making the request
    showLoader();

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

    // locationCard.innerHTML = `
    // <div class="cardContent" id="locationDetails">
    // <p>IP ADDRESS</p>
    // <h2 > ${data.ip}</h2>
    // </div>
    // <div class="cardContent">
    // <p>Location:</p>
    // <h2 >${data.location}</h2>
    // </div>
    // <div class="cardContent">
    // <p>ISP</p>
    // <p >${data.isp}</p>
    // </div>
    
    // `;

    //Update card context with location info
    ipAddressSpan.textContent = data.ip || 'N/A';
    locationSpan.textContent = data.location ? `${data.location.city}, ${data.location.region}, ${data.location.country} `: 'N/A';
    ispSpan.textContent = data.isp || 'N/A';

    //display the card
    locationCard.style.display = 'block';

    //update title
  } catch (err) {
    console.error(err);
  }  finally {
    // Hide the loader after the request is complete
    hideLoader();
}
};
// Function to show the loader
function showLoader() {
  document.getElementById('loader').style.display = 'block';
}

// Function to hide the loader
function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}

// Example usage:
showLoader(); // Call this before starting the IP address tracking operation
// ... Your IP address tracking logic ...
hideLoader(); // Call this when the operation is complete


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

// card display ip address info
