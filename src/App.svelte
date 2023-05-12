<script>
  import {setContext} from "svelte";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import {placemarkService} from "./services/placemarkService.js";

  setContext("PlacemarkService", new placemarkService("http://localhost:3000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/report": Report,
    "/map": Map,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>