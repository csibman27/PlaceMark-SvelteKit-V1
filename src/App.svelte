<script>

  import { setContext } from "svelte";
  import Main from "./pages/Main.svelte";
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import { PlacemarkService } from "./services/placemark-service";
  import Map from "./pages/Map.svelte";
  import PlacemarkView from "./pages/PlacemarkView.svelte";
  import Charts from "./pages/Charts.svelte";
  import StationView from "./pages/StationView.svelte";
  import Analytics from "./pages/Analytics.svelte";
  import User from "./pages/User.svelte";
  import EditStation from "./pages/EditStation.svelte";
  import Github from "./pages/Github.svelte";



  //setContext("PlacemarkService", new PlacemarkService("http://localhost:4000"));
  setContext("PlacemarkService", new PlacemarkService("https://placemark-stations2.onrender.com"));
  //setContext("PlacemarkService", new PlacemarkService("http://localhost:3000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/dashboard": Dashboard,
    "/main": Main,
    "/logout": Main,
    "/map": Map,
    "/placemark/:id": PlacemarkView,
    "/charts": Charts,
    "/station/:stationid": StationView,
    "/analytics": Analytics,
    "/user": User,
    "/placemark/:placemarkidid/station/:stationid": EditStation,
    "/github": Github



  }
</script>

<div class="container">
  <Router {routes}/>
</div>