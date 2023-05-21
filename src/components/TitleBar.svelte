<script>
    import depo from "/src/assets/depo.png";
    import {user} from "../stores.js"
    export let title = "";
    export let subTitle = "";
</script>

<div class="box has-text-centered columns m-4">
    <div class="column">
        <img src="{depo}" width="60" alt="img"/>
    </div>
    <div class="column">
        <div class="title is-5"> {title} </div>
        <div class="subtitle is-5"> {subTitle} </div>
    </div>
    <div class="column">
        <i class="fas fa-gas-pump fa-3x" style="color:rgb(95, 96, 173)" title="Welcome Bar" pos="bottom" uk-tooltip></i>
        {#if $user.email}
            <div class="is-size-7">Logged in as {$user.email} </div>
        {:else}
            <div class="is-size-7">Placemark-Svelte 0.4</div>
        {/if}
    </div>
</div>
