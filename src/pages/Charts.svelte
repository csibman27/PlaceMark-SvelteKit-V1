<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart1Form from "../components/Chart2Form.svelte";
    import Chart2Form from "../components/Chart1Form.svelte";

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
        <Chart1Form/>
    </div>
    <div class="column has-text-centered">
        <Chart2Form/>
    </div>
</div>