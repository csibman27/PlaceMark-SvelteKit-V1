<script>
    import signuptips from "/src/assets/sign-up-tip.jpg";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import SignupForm from "../components/SignupForm.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Sign up or Log in"} title={"Petrol Station Services Inc."}/>
    </div>
    <div class="column">
        <WelcomeNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column">
        <div class="box">
            <h1 class="title">Sign up <i class="fas fa-user-alt"></i></h1>
            <SignupForm/>
        </div>
    </div>
    <div class="column has-text-centered">
        <img alt="signuptips" src="{signuptips}" width="450">
    </div>
</div>
