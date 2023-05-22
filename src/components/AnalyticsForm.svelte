<script>
    import { getContext, onMount } from "svelte";

    const analyticsService = getContext("PlacemarkService");

    export let users = [];
    let placemarks = [];
    let stations = [];
    let analytics = [];

    onMount(async () => {
        stations = await analyticsService.getAllStations();
        placemarks = await analyticsService.getAllPlacemarks();
        analytics = await analyticsService.getAnalytics();
        users = await analyticsService.getAllUsers();
    });

</script>

<div class="row align-items-start">
    <h2 class="title">
        Analytics
    </h2>
    <table class="table is-fullwidth">
        <thead>
        <tr>
            <th>Item</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                Users
            </td>
            <td>
                {users.length}
            </td>
        </tr>
        <tr>
            <td>
                Placemarks
            </td>
            <td>
                {placemarks.length}
            </td>
        </tr>
        <tr>
            <td>
                Stations
            </td>
            <td>
                {stations.length}
            </td>
        </tr>
        <tr>
            <td>
                Lowest Petrol Price
            </td>
            <td>
                {analytics.getCheapestPetrolPrice}
            </td>
        </tr>
        <tr>
            <td>
                Lowest Diesel Price
            </td>
            <td>
                {analytics.getCheapestDieselPrice}
            </td>
        </tr>
        </tbody>
    </table>
</div>