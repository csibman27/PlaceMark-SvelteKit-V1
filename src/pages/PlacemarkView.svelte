<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import ListStations from "../components/ListStations.svelte";
    import AddStation from "../components/AddStation.svelte";
    import StationsMap from "../components/StationsMap.svelte";

    export let params;
    let listStationComponent = undefined;
    let stationMap = null;

    async function stationAdded(event) {
        stationMap.addStationMarker(event.detail.station);
        await listStationComponent.refreshStationList();
    }

    async function updateList(event) {
        await listStationComponent.refreshSttaionList();
    }

</script>

<MainNavigator/>
<section class="section columns is vcentered">
    <div class="column has-text-centered">
        <div class="title">
            Station List
        </div>
        <ListStations on:message={updateList} bind:this={listStationComponent} placemarkId={params.id} />
        <AddStation on:message={stationAdded} placemarkId={params.id} />
    </div>
</section>
<div class="title"> Station Map
    <StationsMap on:message={stationAdded} bind:this={stationMap} placemarkId={params.id}/>
</div>