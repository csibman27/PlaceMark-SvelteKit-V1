<script>
    import { createEventDispatcher, getContext } from "svelte";
    import sanitizeHtml from "sanitize-html";

    const placemarkService = getContext("PlacemarkService");
    const dispatch = createEventDispatcher();

    let errorMessage = "";
    let title = "";

    async function addPlacemark() {
        const newPlacemark = {
            title: sanitizeHtml(title),
        };
        const success = await placemarkService.addPlacemark(newPlacemark);
        console.log(success)
        if(success) {
            dispatch("message", {title: newPlacemark,})
            title = "";
        }
    };
</script>

<form on:submit|preventDefault={addPlacemark}>
    <div class="field">
        <label for="title" class="label">Placemark Name</label>
        <input bind:value={title} id="title" class="input" type="text" placeholder="Enter placemark name" name="title" />
    </div>
    <button class="btn btn-large btn-primary">Add Placemark</button>
</form>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}