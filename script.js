    function toggleNav() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('mobile-open');
    }

    document.querySelector('.btn-call').addEventListener('click', function (e) {
        e.preventDefault();
            window.location.href = "tel:1234567890";
        }
    );

    document.addEventListener("DOMContentLoaded", () => {
        // Create map centered on Akron
        const map = L.map('service-map').setView([41.0814, -81.5190], 11);

        // Add map tiles (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Add a marker for Akron
        L.marker([41.0814, -81.5190]).addTo(map)
        .bindPopup("Akron, OH — Primary Service Area")
        .openPopup();

        // Add a service radius (example: 20 miles)
        L.circle([41.0814, -81.5190], {
        radius: 32000, // meters (20 miles)
        color: "#00c2ff",
        fillColor: "#00c2ff",
        fillOpacity: 0.15
        }).addTo(map);
        }
    );
