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
    const placemarkService = getContext("PlacemarkService");
    const dispatch = createEventDispatcher();

    async function addStation() {
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
        const success = await placemarkService.addStation(newStation.placemarkid,newStation)
        if (success) {
            dispatch("message", {spot: newStation})
            title = "";
            lat = "";
            lng = "";
            category = "";
            description = "";
            unleaded_price = "";
            diesel_price = "";
        }
    }
</script>

<form on:submit|preventDefault={addStation}>
    <label for="title" class="label">Enter Station Details:</label>
    <div class="field is-horizontal has-background-warning-light">
        <div class="field-body">
            <div class="field">
                <label for="title" class="label">title</label>
                <input bind:value={title} class="input" type="text" maxlength="20" placeholder="Enter Title Name" name="title" />
            </div>
            <div class="field">
                <label for="lat" class="label">Latitude</label>
                <input bind:value={lat} class="input" type="number" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" placeholder="Enter Latitude" name="lat" />
            </div>
            <div class="field">
                <label for="lng" class="label">Longitude</label>
                <input bind:value={lng} class="input" type="number" step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" placeholder="Enter Longitude" name="lng" />
            </div>
            <div class="field">
                <label for="unleaded_price" class="label">Unleaded Price</label>
                <input bind:value={unleaded_price} class="input" type="number" step="0.01" min="0" placeholder="Enter Unleaded Price" name="unleaded_price" />
            </div>
            <div class="field">
                <label for="diesel_price" class="label">Diesel Price</label>
                <input bind:value={diesel_price} class="input" type="number" step="0.01" min="0" placeholder="Enter Diesel Price" name="diesel_price" />
            </div>
            <div class="field">
                <label for="category" class="label">Category</label>
                <input bind:value={category} class="input" placeholder="Enter Category name" type="text" maxlength="40" name="category" />
                </div>
            </div>
            <div class="field">
                <label for="description" class="label">Description</label>
                <div class="control">
                    <textarea bind:value={description} class="textarea is-input has-fixed-size" placeholder="Description" type="text" maxlength="280" pattern="[A-Za-z\\s]+{20}" name="description"></textarea>
                </div>
            </div>
        </div>
    <button class="button is-warning">Add Spot</button>
</form>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}