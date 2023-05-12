<script>

  import {setContext} from "svelte";
  import Main from "./pages/Main.svelte";
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte"


  let routes = {
    "/": Main,
    "/login": Login,

    "/main": Main,
    "/logout": Main,


  }
</script>

<div class="container">
  <Router {routes}/>
</div>