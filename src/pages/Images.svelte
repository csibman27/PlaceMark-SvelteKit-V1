<script>

    import ImageForm from "../components/ImageForm.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";

</script>

<div className="columns is-vcentered">
    <div className="column is-two-thirds">
        <TitleBar subTitle={"Placemark Images"} title={"Placemark Services Inc."}/>
    </div>
    <div className="column">
        <MainNavigator/>
    </div>
</div>


<div class="columns">
    <div class="column has-text-centered">
        <ImageForm/>
    </div>
</div>