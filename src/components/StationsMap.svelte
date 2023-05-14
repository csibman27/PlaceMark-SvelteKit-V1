<script>
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";

    const sttaionService = getContext("PlacemarkService");

    const mapConfig = {
        location: {lat: 52.160858, lng: -7.152420},
        zoom: 8,
        minZoom: 1,
    };
    let map = null;

    onMount(async () => {
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('Stations');
        map.showLayerControl();

        const sttaions = await sttaionService.getPlacemarks();
        sttaions.forEach(staion => {
            addStationMarker(staion);
        });
    });

    export function addStationMarker(staion) {
        const sttaionStr = `${staion.candidate.firstName} ${staion.candidate.lastName} €${staion.amount.toString()}`;
        map.addMarker({lat: staion.lat, lng: staion.lng}, sttaionStr, "Placemarks");
        map.moveTo(11, {lat: staion.lat, lng: staion.lng});
    }
</script>

<div class="box" id="staion-map" style="height:800px"></div>