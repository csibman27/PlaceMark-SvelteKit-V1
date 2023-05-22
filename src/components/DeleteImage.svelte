<script>
  import {getContext, createEventDispatcher} from "svelte";

  export let image;
  export let stationid;
  let station;

  const imageService = getContext("PlacemarkService");
  const dispatch = createEventDispatcher();

  export async function deleteImage() {
    const success = await imageService.deleteImage(stationid, image.imgid)
    if (success) {
      dispatch("message", {})
    }
  }

</script>

<div class="container">
  <figure class="image">
    <img src={image.img}>
    <button class="button is-danger" on:click={deleteImage}>Delete Image</button>
  </figure>
</div>







