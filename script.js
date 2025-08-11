const getLocation = document.getElementById('getLocation');

getLocation.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                document.getElementById('location').textContent =
                    `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
            },
            error => {
                console.error("Location access denied:", error);
            }
        );
    } else {
        alert("Geolocation not supported.");
    }
});