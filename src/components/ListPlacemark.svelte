<script>
    import {getContext, onMount} from "svelte";
    import Placemark from "./Placemark.svelte";

    const placemarkService = getContext("PlacemarkService");
    let placemarkList = [];

    onMount(async () => {
        placemarkList = await placemarkService.getUserPlacemarks();
    });

    export async function refreshPlacemarkList() {
        placemarkList = await placemarkService.getUserPlacemarks();
    }
</script>

{#each placemarkList as placemark }
    <Placemark placemarkid={placemark._id} title={placemark.title} on:message={refreshPlacemarkList} />
{/each}