<script>
    import { createEventDispatcher, getContext } from "svelte";
    import sanitizeHtml from "sanitize-html";

    let title = "";
    let errorMessage = "";
    const placemarkService = getContext("CraftspotService");
    const dispatch = createEventDispatcher();

    async function addPlacemark() {
        const newPlacemark = {
            title: sanitizeHtml(title),
        };
        const success = await placemarkService.addPlacemark(newPlacemark)
        if(success) {
            dispatch("message", {craft: newPlacemark,})
            title = "";
        }
    };
</script>

<form on:submit|preventDefault={addPlacemark}>
    <div class="field has-background-warning-light">
        <label for="title" class="label">Placemark Name</label>
        <input bind:value={title} id="title" class="input" type="text" placeholder="Enter craft name" name="title" />
    </div>
    <button class="button is-link is-warning">Add Placemark</button>
</form>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}