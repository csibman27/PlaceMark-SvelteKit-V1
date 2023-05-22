<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import StationsMap from "../components/StationsMap.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Map of Station Locations"} title={"Hello."}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<StationsMap/>