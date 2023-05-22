<script>
    import github from "/src/assets/github.png";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Petrol Station Services Inc."} subTitle={"Login with Github"}/>
    </div>
    <div class="column">
        <WelcomeNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="depo" src="{github}" width="500">
    </div>
    <div class="column">
        <div class="box">
            <h1 class="title">Authorization <i class="fab fa-github fa-3x"></i></h1>
        </div>
    </div>
</div>