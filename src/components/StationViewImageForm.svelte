<script>
    import {createEventDispatcher} from "svelte";
    import UploadImage from "./UploadImage.svelte";
    import DeleteImage from "./DeleteImage.svelte";
    import Gallery from 'svelte-image-gallery'


    const dispatch = createEventDispatcher();
    export let stationid;
    export let images =[];

    async function refresh() {
        dispatch("message");
    }
</script>

<section class="section">
    <div class="card-content">
        <div class="field">
        <h1 class="title" on:message={refresh} >Image box </h1>
        </div>
        {#each images as image}
            <div class="column">
                <DeleteImage image={image} stationid={stationid} on:message={refresh} />
            </div>
        {/each}
    </div>
</section>
<section>
    <div class="card-content">
        <UploadImage stationid={stationid} on:message={refresh}/>
    </div>
    <div class="field">
        <Gallery>
            {#each images as image }
                <img src={image.img} alt="" on:message={refresh}>
            {/each}
        </Gallery>
    </div>
</section>




