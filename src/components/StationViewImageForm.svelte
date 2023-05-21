<script>
    import {createEventDispatcher} from "svelte";
    import UploadImage from "./UploadImage.svelte";


    const dispatch = createEventDispatcher();
    export let stationid;

    async function refresh() {
        dispatch("message");
    }
</script>

<section class="section">
    <div class="card-content">
        <h1 class="title">Image box</h1>
    </div>
</section>
<section>
    <div class="card-content">
        <UploadImage stationid={stationid} on:message={refresh}/>
    </div>
</section>




