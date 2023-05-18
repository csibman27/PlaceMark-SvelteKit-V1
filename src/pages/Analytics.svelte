<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import AnalyticsForm from "../components/AnalyticsForm.svelte";

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Placemark Analytics"} title={"Placemark Services Inc."}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <AnalyticsForm/>
    </div>
</div>