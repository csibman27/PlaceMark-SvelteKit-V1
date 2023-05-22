<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import { createEventDispatcher, getContext, onDestroy, onMount } from "svelte";
    import { push, pop } from "svelte-spa-router";
    import TitleBar from "../components/TitleBar.svelte";

    let station = {};
    let errorMessage = "";
    export let params;
    const placemarkService = getContext("PlacemarkService");
    const dispatch = createEventDispatcher();

    onMount(async () => {
        station = await placemarkService.getStationById(params.stationid);
    });

    async function updateStation() {
        const success = await placemarkService.updateStation(params.placemarkid, params.stationid, station)
        if (success) {
            dispatch("message", {station: station})
            pop();
        }
    }

</script>

<MainNavigator />

<form on:submit|preventDefault={updateStation}>
    <div class="column is-two-thirds">
        <TitleBar title={"Edit current Station Details:"}/>
    </div>
    <div class="field">
        <div class="field-body">
            <div class="field">
                <label for="title" class="label">Title</label>
                <input bind:value={station.title} class="input" id="title" type="text" name="placeName" />
            </div>
            <div class="field">
                <label for="lat" class="label">Latitude</label>
                <input bind:value={station.lat} class="input" id="lat" type="number" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" name="lat"/>
            </div>
            <div class="field">
                <label for="lng" class="label">Longitude</label>
                <input bind:value={station.lng} class="input" id="lng" type="number" step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" name="lng"/>
            </div>
            <div class="field">
                <label for="category" class="label">Category</label>
                <div class="control">
                    <input bind:value={station.category} class="input" id="category" type="text" name="category">
                </div>
            </div>
            <div class="field">
                <label for="description" class="label">Description</label>
                <div class="control">
                    <input bind:value={station.description} class="input" id="description" type="text" name="description">
                </div>
            </div>
            <div class="field">
                <label for="unleaded_price" class="label">Unleaded Price</label>
                <input bind:value={station.unleaded_price} id="unleaded_price" class="input" type="number" placeholder="Enter Unleaded Price" name="unleaded_price" />
            </div>
            <div class="field">
                <label for="diesel_price" class="label">Diesel Price</label>
                <input bind:value={station.diesel_price} id="diesel_price" class="input" type="number" placeholder="Enter Diesel Price" name="diesel_price" />
            </div>
        </div>
    </div>
    <button class="button is-link">Update Station</button>
</form>