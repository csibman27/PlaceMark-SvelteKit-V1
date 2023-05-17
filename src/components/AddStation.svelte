<script>
    import { createEventDispatcher, getContext } from "svelte";
    import sanitizeHtml from "sanitize-html";


    let title = "";
    let lat = "";
    let lng = "";
    let category = "";
    let description = "";
    let unleaded_price = "";
    let diesel_price = "";
    let errorMessage = "";

    export let placemarkId;
    const p1 = getContext("PlacemarkService");
    const dispatch = createEventDispatcher();

    async function addStations() {
        const newStation = {
            placemarkid: sanitizeHtml(placemarkId),
            title: sanitizeHtml(title),
            lat: sanitizeHtml(lat),
            lng: sanitizeHtml(lng),
            category: sanitizeHtml(category),
            description: sanitizeHtml(description),
            unleaded_price: sanitizeHtml(unleaded_price),
            diesel_price: sanitizeHtml(diesel_price),
        };
        const success = await p1.addStation(newStation.placemarkid,newStation)
        console.log("Adding function: ",success)
        if (success) {
            dispatch("message", {station: newStation,})
            title = "";
            lat = "";
            lng = "";
            category = "";
            description = "";
            unleaded_price = "";
            diesel_price = "";
        }
        else{
            alert("Cant add a station please fill ou all required fields")
        }
    }
</script>

<form on:submit|preventDefault={addStations}>
    <label class="label">Enter Station Details:</label>
    <div class="field is-horizontal has-background-warning-light">
        <div class="field-body">
            <div class="field">
                <label class="label">Station name</label>
                <input bind:value={title} class="input" type="text" maxlength="20" placeholder="Enter Station Name" name="title" />
            </div>
            <div class="field">
                <label for="title" class="label">Latitude</label>
                <input bind:value={lat} id="title" class="input" type="number" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" placeholder="Enter Latitude" name="lat" />
            </div>
            <div class="field">
                <label for="lng" class="label">Longitude</label>
                <input bind:value={lng} id="lng" class="input" type="number" step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" placeholder="Enter Longitude" name="lng" />
            </div>
            <div class="field">
                <label for="category" class="label">Category</label>
                <input bind:value={category} id="category" class="input" placeholder="Enter Category name" type="text" name="category" />
                </div>
            </div>
            <div class="field">
                <label for="description" class="label">Description</label>
                <input bind:value={description} id="description" class="input" placeholder="Description" type="text" name="description" />
            </div>
            <div class="field">
                <label for="unleaded_price" class="label">Unleaded Price</label>
                <input bind:value={unleaded_price} id="unleaded_price" class="input" type="number" placeholder="Enter Unleaded Price" name="unleaded_price" />
            </div>
            <div class="field">
                <label for="diesel_price" class="label">Diesel Price</label>
                <input bind:value={diesel_price} id="diesel_price" class="input" type="number" placeholder="Enter Diesel Price" name="diesel_price" />
           </div>
        </div>
    <button class="button is-warning">Add Station</button>
</form>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}