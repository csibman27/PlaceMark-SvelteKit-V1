<script>
    import {LeafletMap} from '../services/leaflet-map.js';
    import {getContext, onMount} from "svelte";

    const stationService = getContext("PlacemarkService");

    const mapConfig = {
        location: {lat: 52.160858, lng: -7.152420},
        zoom: 8,
        minZoom: 1,
    };
    let map = null;

    onMount(async () => {
        map = new LeafletMap("station-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('Stations');
        map.showLayerControl();

        const stationList = await stationService.getAllStations();
        stationList.forEach(station => {
            addStationMarker(station);
        });
    });

    export function addStationMarker(station) {
        map.addMarker({lat: station.lat, lng: station.lng}, station.title);
        //map.moveTo(11, {lat: station.lat, lng: station.lng});
    }
</script>

<div class="box" id="station-map" style="height:800px"></div>