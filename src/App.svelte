<script>

  import { setContext } from "svelte";
  import Main from "./pages/Main.svelte";
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import { PlacemarkService } from "./services/placemark-service";


  //setContext("PlacemarkService", new PlacemarkService("http://localhost:4000"));
  setContext("PlacemarkService", new PlacemarkService("https://placemark-stations2.onrender.com"));
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