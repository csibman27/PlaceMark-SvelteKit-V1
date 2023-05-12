<script>
    import depo from "/src/assets/depo.jpg";
    import DashboardForm from "../components/DashboardForm.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Please make a Donation"} title={"Donation Services Inc."}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="depo" src={depo} width="500"/>
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Welcome to Dashboard</h1>
        <DashboardForm/>
    </div>
</div>
