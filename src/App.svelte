<script>

  import {setContext} from "svelte";
  import Main from "./pages/Main.svelte";
  import Router from "svelte-spa-router";


  let routes = {
    "/": Main,
    

    "/main": Main,
    "/logout": Main,


  }
</script>

<div class="container">
  <Router {routes}/>
</div>