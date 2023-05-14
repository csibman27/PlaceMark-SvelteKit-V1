<script>
    import ListPlacemark from "../components/ListPlacemark.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import AddPlacemark from "../components/AddPlacemark.svelte";
    import TitleBar from "../components/TitleBar.svelte";

    let listPlacemarkComponent = undefined;

    async function placemarkAdded(e) {
        console.log(listPlacemarkComponent);
        console.log(e);
        await listPlacemarkComponent.refreshPlacemarkList();
    }
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Petrol Station Services Inc."} />
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>


<section class="section">
    <ListPlacemark bind:this={listPlacemarkComponent}/>
    <AddPlacemark on:message={placemarkAdded}/>
</section>
