<script>

  import {setContext} from "svelte";
  import Main from "./pages/Main.svelte";
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Dashboard from "./pages/Dashboard.svelte";


  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/dashboard": Dashboard,
    "/logout": Main,


  }
</script>

<div class="container">
  <Router {routes}/>
</div>