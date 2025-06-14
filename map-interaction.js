import { getPointsOfInterest, setupPoints } from './points-of-interest.js';

document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.querySelector('.map-container'); 
    mapContainer.style.width = "100%";     
    mapContainer.style.overflow = 'auto';
    const mapImage = document.getElementById('main-map');   
    const infoPanel = document.getElementById('info-panel');
    const closeButton = document.querySelector('#close-panel');
    let currently; let selectedPoint = null;

    closeButton.addEventListener('click', function() {
        infoPanel.classList.remove('active');
        if (selectedPoint) {
            document.querySelector(`.point-of-interest[data-id="${selectedPoint}"]`).style.backgroundColor = 'rgba(255, 255, 0, 0.7)';
            selectedPoint = null;
        }
    });

    function search() {
        const searchButton = document.createElement('button');
        searchButton.innerHTML = '🔍';
        searchButton.style.position = 'fixed';
        searchButton.style.top = '20px';
        searchButton.style.right = '20px';
        searchButton.style.width = '50px';
        searchButton.style.height = '50px';
        searchButton.style.borderRadius = '50%';
        searchButton.style.background = 'rgba(255, 255, 0, 0.8)';
        searchButton.style.border = 'none';
        searchButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        searchButton.style.fontSize = '24px';
        searchButton.style.cursor = 'pointer';
        searchButton.style.zIndex = '1000';
        searchButton.style.transition = 'transform 0.3s';
        document.body.appendChild(searchButton);

        const searchPanel = document.createElement('div');
        searchPanel.style.position = 'fixed';
        searchPanel.style.top = '80px';
        searchPanel.style.right = '20px';
        searchPanel.style.background = 'white';
        searchPanel.style.padding = '15px';
        searchPanel.style.borderRadius = '10px';
        searchPanel.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        searchPanel.style.zIndex = '1000';
        searchPanel.style.maxWidth = '300px';
        searchPanel.style.display = 'none';
        searchPanel.style.overflow = 'hidden';
        document.body.appendChild(searchPanel);

        const searchInput = document.createElement('input');
        searchInput.type = 'search';  
        searchInput.placeholder = 'Buscar punto de interés...';
        searchPanel.appendChild(searchInput);

        const resultsContainer = document.createElement('div');
        resultsContainer.style.maxHeight = '200px';
        resultsContainer.style.overflowY = 'auto';
        resultsContainer.style.marginTop = '10px';
        searchPanel.appendChild(resultsContainer);

        let isOpen = false;
        searchButton.addEventListener('click', function() {
            isOpen = !isOpen;
            if (isOpen) {
                searchPanel.style.display = 'block';
                searchButton.style.transform = 'rotate(90deg)';
            } else {                   
                searchPanel.style.display = 'none';
                searchButton.style.transform = 'rotate(0)';
            }
        });

        searchInput.addEventListener('input', function(e) {
            const searchTerm = this.value.toLowerCase();
            const pointsOfInterest = getPointsOfInterest();
            let searchResults = pointsOfInterest.filter(
                point => point.title.toLowerCase().includes(searchTerm)
            );

            resultsContainer.innerHTML = '';
            if (searchTerm === '') return;

            if (searchResults.length === 0) {
                const noResultsDiv = document.createElement('div');
                noResultsDiv.className = 'no-results';
                noResultsDiv.innerHTML = '<p>No se encontraron resultados</p>';
                resultsContainer.appendChild(noResultsDiv);
            } else {
                searchResults.forEach(point => {
                    const item = document.createElement('div');
                    item.className = 'search-item';
                    item.textContent = point.title;
                    item.addEventListener('click', function() {
                        document.getElementById('poi-title').textContent = point.title;
                        document.getElementById('poi-description').textContent = point.description;
                        infoPanel.classList.add('active');
                        searchPanel.style.display = 'none';
                        searchInput.value = '';

                        window.setTimeout(() => {
                            if (selectedPoint) {
                                document.querySelector(`.point-of-interest[data-id="${selectedPoint}"]`).style.backgroundColor = 'rgba(255, 255,0,0.7)'
                            }

                            const poiElement = document.querySelector(`.point-of-interest[data-id="${point.id}"]`);
                            poiElement.style.transform = 'scale(1.5)';
                            poiElement.style.backgroundColor = 'salmon';

                            const mapRect = mapContainer.getBoundingClientRect();
                            const pointRect = poiElement.getBoundingClientRect();

                            mapContainer.scrollTo({
                                left: pointRect.left - mapRect.width/2,
                                top: pointRect.top - mapRect.height/2,
                                behavior: 'smooth'
                            });

                            animatorColor(poiElement);

                            selectedPoint = point.id;
                        }, 0);
                    });
                    resultsContainer.appendChild(item);
                });
            }
        });

        const metaViewport = document.createElement("meta");
        metaViewport.name = "viewport";
        metaViewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes, shrink-to-fit=no';
        document.head.appendChild(metaViewport);

        mapImage.addEventListener('touchstart', (e) => {
            if(e.target === mapImage) {
                e.stopPropagation();
            }
        }, { passive: false });

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            searchButton.style.width = "60px";
            searchButton.style.height = "60px";
            searchButton.style.fontSize = "30px";
        }
    }

    function animatorColor(element) {
        element.animate([
            { transform: 'scale(1.1)' },
            { transform: 'scale(1.2)' }
        ], {
            duration: 300,
            easing: 'cubic-bezier(0.4, 0, 0.58, 1)',
            iterations: 1
        });

        element.addEventListener('animationend', function() {
            element.style.transform = 'scale(1)';
        }, { once: true });
    }

    search();
    setupPoints(mapContainer, infoPanel, mapImage);

    // GPS Integration
    function initGPS() {
        // Create GPS button
        const gpsButton = document.createElement('button');
        gpsButton.innerHTML = '📍';
        gpsButton.style.position = 'fixed';
        gpsButton.style.top = '100px';
        gpsButton.style.right = '20px';
        gpsButton.style.width = '50px';
        gpsButton.style.height = '50px';
        gpsButton.style.borderRadius = '50%';
        gpsButton.style.transition = 'all 0.3s';
        gpsButton.style.cursor = 'pointer';
        gpsButton.style.zIndex = '1000';
        gpsButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        document.body.appendChild(gpsButton);

        // GPS Panel
        const gPanel = document.createElement('div');
        gPanel.style.position = 'fixed';
        gPanel.style.top = '150px';
        gPanel.style.right = '20px';
        gPanel.style.background = 'white';
        gPanel.style.padding = '15px';
        gPanel.style.borderRadius = '10px';
        gPanel.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        gPanel.style.zIndex = '1000';
        gPanel.style.maxWidth = '300px';
        gPanel.style.display = 'none';
        gPanel.style.overflow = 'hidden';
        document.body.appendChild(gPanel);

        gPanel.innerHTML = `
            <h3>GPS Mode</h3>
            <p>Connect with naviga app to see your position on map</p>
            <button id="connectApp">Connect to Naviga</button>
        `;

        const connectButton = document.getElementById('connectApp');

        // Toggle GPS panel
        let isGpsOpen = false;
        gpsButton.addEventListener('click', function() {
            isGpsOpen = !isGpsOpen;
            if (isGpsOpen) {
                gPanel.style.display = 'block';
                gpsButton.style.transform = 'rotate(90deg)';
            } else {
                gPanel.style.display = 'none';
                gpsButton.style.transform = 'rotate(0)';
            }
        });

        // Connect to navigation apps
        connectButton.addEventListener('click', async function() {
            try {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const latitude = pos.coords.latitude;
                    const longitude = pos.coords.longitude;
                    gPanel.innerHTML = `
                        <h3>Current Position</h3>
                        <p>Pos: ${latitude}, ${longitude}</p>
                        <a href="https://maps.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" target="_blank">Open in Maps</a>
                    `;
                }, (err) => {
                    gPanel.innerHTML = `<p style="color: red">GPS error: ${err.message}</p>`;
                });
            } catch (err) {
                gPanel.innerHTML = `<p style="color: red">${err.message}</p>`;
            }
        });
    }

    initGPS();

    // Add Compass Button
    function initCompass() {
        const compassButton = document.createElement('button');
        compassButton.innerHTML = '🧭';
        compassButton.className = 'compass-button';
        document.body.appendChild(compassButton);

        const compassPanel = document.createElement('div');
        compassPanel.className = 'compass-panel';
        compassPanel.innerHTML = `
            <div class="compass-container">
                <div class="compass">
                    <div class="compass-arrow"></div>
                </div>
                <div class="compass-degree">0°</div>
                <button id="calibrate-btn">Calibrar</button>
            </div>
        `;
        compassPanel.style.display = 'none';
        document.body.appendChild(compassPanel);

        let isCompassOpen = false;
        compassButton.addEventListener('click', function() {
            isCompassOpen = !isCompassOpen;
            if (isCompassOpen) {
                compassPanel.style.display = 'block';
                startCompass();
            } else {
                compassPanel.style.display = 'none';
                stopCompass();
            }
        });

        function startCompass() {
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', handleOrientation);
                document.getElementById('calibrate-btn').addEventListener('click', () => {
                    alert('Gire el dispositivo en forma de 8 para calibrar');
                });
            } else {
                compassPanel.innerHTML = '<p>Su dispositivo no soporta la brújula</p>';
            }
        }

        function stopCompass() {
            window.removeEventListener('deviceorientation', handleOrientation);
        }

        function handleOrientation(event) {
            const absolute = event.absolute;
            const alpha = event.alpha; 
            const compass = document.querySelector('.compass-arrow');
            const degreeDisplay = document.querySelector('.compass-degree');

            if (alpha !== null) {
                if (selectedPoint) {
                    const pointsOfInterest = getPointsOfInterest();
                    const point = pointsOfInterest.find(p => p.id === selectedPoint);
                    const pointElement = document.querySelector(`.point-of-interest[data-id="${selectedPoint}"]`);
                    const rect = pointElement.getBoundingClientRect();
                    const mapRect = mapContainer.getBoundingClientRect();
                    const pointRect = pointElement.getBoundingClientRect();

                    const dx = pointRect.left + pointRect.width/2 - mapRect.left - mapRect.width / 2;
                    const dy = pointRect.top + pointRect.height / 2 - mapRect.top - mapRect.height / 2;
                    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                    const adjustedAngle = (alpha - angle) % 360;
                    compass.style.transform = `rotate(${adjustedAngle}deg)`;
                    degreeDisplay.textContent = `${Math.round(adjustedAngle)}`;
                } else {
                    compass.style.transform = `rotate(${alpha}deg)`;
                    degreeDisplay.textContent = `${Math.round(alpha)}°`;
                }
            }
        }
    }

    initCompass();

    function initGPSCompass() {
        const gpsCompassButton = document.createElement('button');
        gpsCompassButton.innerHTML = '🌍';
        gpsCompassButton.className = 'compass-button';
        gpsCompassButton.style.bottom = '160px';
        document.body.appendChild(gpsCompassButton);

        gpsCompassButton.addEventListener('click', async function() {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                
                const { latitude, longitude } = position.coords;
                alert(`Your position: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
                
                // Show direction to selected point if any
                if (selectedPoint) {
                    const points = getPointsOfInterest();
                    const point = points.find(p => p.id === selectedPoint);
                    // This is a simplified example - in real app you would calculate bearing
                    const bearing = calculateBearing(latitude, longitude, point.x/100, point.y/100);
                    
                    const compassArrow = document.createElement('div');
                    compassArrow.style.width = '100%';
                    compassArrow.style.height = '2px';
                    compassArrow.style.backgroundColor = 'red';
                    compassArrow.style.position = 'fixed';
                    compassArrow.style.top = '50%';
                    compassArrow.style.left = '50%';
                    compassArrow.style.transformOrigin = 'left center';
                    compassArrow.style.transform = `rotate(${bearing}deg)`;
                    document.body.appendChild(compassArrow);
                    
                    setTimeout(() => {
                        document.body.removeChild(compassArrow);
                    }, 5000);
                }
            } catch (err) {
                alert('GPS error: ' + err.message);
            }
        });
    }

    function calculateBearing(lat1, lon1, lat2, lon2) {
        // Simplified bearing calculation - for real app use proper formula
        return Math.random() * 360;
    }

    initGPSCompass();

    for (const container of document.querySelectorAll('.point-of-interest')) {
        container.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'red';
        });
        container.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(255, 255, 0, 0.7)';
        });
    }
});