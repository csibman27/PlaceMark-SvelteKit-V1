<script>
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    import {PlacemarkService} from "../services/placemark-service";

    const stationService = getContext("PlacemarkService");
    let stationList = [];
    export let placemarkId;

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

        stationList = await stationService.getStationByPlacemarkId(placemarkId);
        stationList.forEach(station => {
            addStationMarker(station);
        });
    });

    export function addStationMarker(station) {
        map.addMarker({lat: station.lat, lng: station.lng}, station.title);
    }
</script>

<div class="box" id="station-map" style="height:800px"></div>