<script>
    import depo from "/src/assets/depo.jpg";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import {getContext} from "svelte";

    const placemarkService = getContext("PlacemarkService");
    placemarkService.logout();
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Petrol Station Services Inc."} subTitle={"Please Sign up or Log in"}/>
    </div>
    <div class="column">
        <WelcomeNavigator/>
    </div>
</div>

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <img width="500" src="{depo}" alt="depo">
    </div>
    <div class="column">
        <h1 class="title">Mark your favorite Station</h1>
        <p>Find your favorite station and mark it on the map.</p>
    </div>
</div>