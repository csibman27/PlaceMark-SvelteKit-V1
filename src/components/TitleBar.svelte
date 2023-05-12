<script>
    import depo from "/src/assets/depo.jpg";
    export let title = "";
    export let subTitle = "";
</script>

<div class="box has-text-centered columns m-4">
    <div class="column">
        <a href="/#/" class="column">
            <img src="{depo}" width="60" alt="img"/>
        </a>
    </div>
    <div class="column">
        <div class="title is-5"> {title} </div>
        <div class="subtitle is-5"> {subTitle} </div>
    </div>
    <div class="column">
        <i class="fas fa-gas-pump fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" pos="bottom" uk-tooltip></i>
        <div class="is-size-7">Placemark-Hapi 0.1</div>
    </div>
</div>
