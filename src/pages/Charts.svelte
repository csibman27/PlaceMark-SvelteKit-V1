<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart1 from "../components/Chart2.svelte";
    import Chart2 from "../components/Chart1.svelte";

    // analytics can be imported
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Placemark Charts"} title={"Placemark Services Inc."}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <Chart1/>
    </div>
    <div class="column has-text-centered">
        <Chart2/>
    </div>
</div>