<script>
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    import {PlacemarkService} from "../services/placemark-service";

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

        const stations = await stationService.getAllStations();
        stations.forEach(place => {
            addStationMarker(place);
        });
    });

    export function addStationMarker(place) {
        const stationStr = `${place.candidate.firstName} ${place.candidate.lastName} €${place.amount.toString()}`;
        map.addMarker({lat: place.lat, lng: place.lng}, stationStr, "Placemarks");
        map.moveTo(11, {lat: place.lat, lng: place.lng});
    }
</script>

<div class="box" id="station-map" style="height:800px"></div>