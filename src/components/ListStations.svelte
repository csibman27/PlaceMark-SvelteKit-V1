<script>
    import { getContext, onMount, createEventDispatcher } from "svelte";

    const placemarkService = getContext("PlacemarkService");
    const dispatch = createEventDispatcher();
    let stationList = [];
    export let placemarkId;

    onMount(async () => {
        stationList = await placemarkService.getStationByPlacemarkId(placemarkId);
    });

    export async function refreshStationList() {
        stationList = await placemarkService.getStationByPlacemarkId(placemarkId);
    }

    async function deleteStation(stationid) {
        const success = await placemarkService.deleteStation(stationid);
        if(success) {
            dispatch("message")
        }
    }

</script>

<table class="table is-fullwidth is-striped has-background-warning-light">
    <thead>
    <tr>
        <th>Station Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Category</th>
        <th>Description</th>
        <th>Unleaded price</th>
        <th>Diesel price</th>
        <th>View Station Details</th>
        <th>Edit Station</th>
        <th>Delete Station</th>
    </tr>
    </thead>
    <tbody>
    {#each stationList as station}
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
            <td>
                <a href="#/station/{station._id}" class="button">
            <span class="icon is-small">
              <i class="fas fa-folder-open"></i>
            </span>
                </a>
            </td>
            <td>
                <a href="#/placemark/{station.craftid}/station/{station._id}" class="button">
                    <i class="fas fa-pen"></i>
                </a>
            </td>
            <td>
                <button on:click={() => { deleteStation(station._id) }} class="button">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    {/each}
    </tbody>
</table>