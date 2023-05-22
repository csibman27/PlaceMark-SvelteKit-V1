<script>
    import { onMount, getContext } from "svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import StationViewImageForm from "../components/StationViewImageForm.svelte";

    let station = {};
    export let params;
    const placemarkService = getContext("PlacemarkService");

    onMount(async () => {
        station = await placemarkService.getStationById(params.stationid);
    })

    async function refreshStation() {
        station = await placemarkService.getStationById(params.stationid);
    }

</script>

<MainNavigator/>
<section class="section columns is-vcentered">
    <div class="column ">
        <div class="title">{station.title}</div>
        <div class="box">
            <table class="table is-fullwidth is-striped background-is green">
                <thead>
                <tr>
                    <th>Station Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Unleaded price</th>
                    <th>Diesel price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {station.title}
                    </td>
                    <td>
                        {station.lat}
                    </td>
                    <td>
                        {station.lng}
                    </td>
                    <td>
                        {station.category}
                    </td>
                    <td>
                        {station.description}
                    </td>
                    <td>
                        {station.unleaded_price}
                    </td>
                    <td>
                        {station.diesel_price}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
<section>
    <StationViewImageForm stationid={station._id} images={station.images} on:message={refreshStation}/>
</section>


