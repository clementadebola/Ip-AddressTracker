IP Address Tracker
Welcome to the IP Address Tracker project!

Overview
This project allows users to track the geographical information associated with an IP address. It utilizes the GeoIPify API to fetch location data based on the provided IP address.

Features
IP Address Tracking: Enter an IP address and track its geographical information.
Loader: A loading spinner is displayed during the API request to provide feedback to users.
Getting Started
Prerequisites
GeoIPify API Key: You need to sign up for a GeoIPify account and obtain an API key.
Installation
Clone the repository:

bash
Copy code
git clone [https://github.com/clementadebola/Ip-AddressTracker.git]
Navigate to the project directory:


Open index.html in your web browser.

Usage
Open index.html in your web browser.
Enter the desired IP address in the input field.
Click the "Track IP" button.
The loader will be displayed during the API request, and the result will be shown once the request is complete.
Troubleshooting
Difficulties Encountered
Fetching IP Data: Making asynchronous API requests can be challenging. Ensure that the fetch operation is handled properly to avoid errors.

Loader Implementation: Displaying and hiding the loader at the right moments might require careful handling of asynchronous events.

Fetching Location from Map: Integrating the map to display the geographical location of the IP address might require additional considerations. Ensure that the map is initialized correctly, and the fetched data is properly mapped to the map elements.

Potential Solutions
Promises and Async/Await: Use Promises and Async/Await to handle asynchronous operations more efficiently.

Event Handling: Ensure that the loader is displayed before the API request and hidden after the request is complete. Utilize event listeners effectively.

Map Integration: Review the map integration logic, ensuring that the map is initialized correctly, and the fetched data is properly processed for display.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

