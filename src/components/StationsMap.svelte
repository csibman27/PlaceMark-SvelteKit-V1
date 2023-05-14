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
        const stations = await PlacemarkService.getAllStations();

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        map.addLayerGroup('Stations');
        map.showLayerControl();

        const station = await stationService.getStation();
        stations.forEach(station => {
            addStationMarker(station);
        });
    });

    export function addStationMarker(station) {
        const stationStr = `${station.candidate.firstName} ${station.candidate.lastName} €${station.amount.toString()}`;
        map.addMarker({lat: station.lat, lng: station.lng}, stationStr, "Placemarks");
        map.moveTo(11, {lat: station.lat, lng: station.lng});
    }
</script>

<div class="box" id="station-map" style="height:800px"></div>