<script>
    import {getContext, createEventDispatcher} from "svelte";

    export let title;
    export let placemarkid;
    const placemarkService = getContext("PlacemarkService");
    const dispatch = createEventDispatcher();

    async function deletePlacemark() {
        const success = await placemarkService.deletePlacemark(placemarkid);
        if(success){
            dispatch("message")
        }
    }
</script>

<div class="box box-link-hover-shadow has-background-warning-light">
    <h2 class="title">
        {title}
    </h2>
    <a href="#/craft/{placemarkid}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <button on:click={deletePlacemark} class="button">
      <span class="icon-is-small">
        <i class="fas fa-trash"></i>
      </span></button>
</div>