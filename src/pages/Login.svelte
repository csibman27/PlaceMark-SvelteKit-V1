<script>
    import depo from "/src/assets/depo.jpg";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import LoginForm from "../components/LoginForm.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Petrol Station Services Inc."} subTitle={"Sign up or Log in"}/>
    </div>
    <div class="column">
        <WelcomeNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="depo" src="{depo}" width="500">
    </div>
    <div class="column">
        <div class="box">
            <h1 class="title">Login <i class="fas fa-oil-can"></i></h1>
            <LoginForm/>
        </div>
    </div>
</div>