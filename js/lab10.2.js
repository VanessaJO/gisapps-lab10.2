document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([40.38, -105.5], 10);

    L.tileLayer("https://api.mapbox.com/styles/v1/obrienvj/cje8xohxa0w7m2snvxttrbvtg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2JyaWVudmoiLCJhIjoiY2luamF3OXJsMHhpNHVhbTMxaWJmbG55aSJ9.2sAApb2KZsd3TA427yg4vQ",
                {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);

    function showLatLng(e) {
        document.getElementById("whereIsThis").innerText = (e.latlng.lat).toFixed(5) + " | " + (e.latlng.lng).toFixed(5);
    }
    map.on('mousemove', showLatLng);

    document.getElementById("goToFRCCBoulder").onclick = function(){
        map.setView([40.1386, -105.12793], 16);
    };

    document.getElementById("goToRMNP").onclick = function(){
        map.setView([40.4, -105.8], 12);
    };

    // a button click for my new Indian Peaks Lake...
    document.getElementById("goToCraterLake").onclick = function(){
        map.setView([40.07617, -105.66489], 17);
    };

    function onMapClick(e) {
        var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent("<center><img src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center><h4>" + e.latlng.lat + " | " + e.latlng.lng + "</h4>")
        .openOn(map);
    }
    map.on('click', onMapClick);

    var lakesGeoJSON = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "stroke": "#555555",
                    "stroke-width": 2,
                    "stroke-opacity": 1,
                    "fill": "#555555",
                    "fill-opacity": 0.5,
                    "name": "Crater Lake"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -105.66138625144958,
                                40.077340790436075
                            ],
                            [
                                -105.66154718399048,
                                40.07724227698047
                            ],
                            [
                                -105.66184759140015,
                                40.077045249641735
                            ],
                            [
                                -105.66222310066223,
                                40.076979573735464
                            ],
                            [
                                -105.66269516944885,
                                40.07708629705099
                            ],
                            [
                                -105.6630277633667,
                                40.07730795263336
                            ],
                            [
                                -105.66362857818604,
                                40.07717660126423
                            ],
                            [
                                -105.66460490226746,
                                40.07678254563665
                            ],
                            [
                                -105.66519498825073,
                                40.0763638590338
                            ],
                            [
                                -105.66612839698792,
                                40.0757563484052
                            ],
                            [
                                -105.66669702529907,
                                40.075452591058564
                            ],
                            [
                                -105.66680431365967,
                                40.07487791129092
                            ],
                            [
                                -105.66621422767639,
                                40.07393378400187
                            ],
                            [
                                -105.66550612449646,
                                40.07392557414195
                            ],
                            [
                                -105.66447615623474,
                                40.07436890516115
                            ],
                            [
                                -105.66352128982544,
                                40.07465624779881
                            ],
                            [
                                -105.66299557685852,
                                40.07508315462177
                            ],
                            [
                                -105.66189050674438,
                                40.075444381381736
                            ],
                            [
                                -105.66164374351501,
                                40.07569067125589
                            ],
                            [
                                -105.66181540489197,
                                40.0761914579197
                            ],
                            [
                                -105.66182613372803,
                                40.076716869477
                            ],
                            [
                                -105.66120386123657,
                                40.07728332427095
                            ],
                            [
                                -105.66118240356445,
                                40.07739825655267
                            ],
                            [
                                -105.66138625144958,
                                40.077340790436075
                            ]
                        ]
                    ]
                }
            }
        ]
    } // no semicolon needed here yo!

    L.geoJSON(lakesGeoJSON).addTo(map);

});