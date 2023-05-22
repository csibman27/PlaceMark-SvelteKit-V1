<script>
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";


  let adminList = [];
  const graphService = getContext("PlacemarkService")

  let userData = {
    labels: ["Placemarks", "Stations"],
    datasets: [
      {
        values: [0, 0]
      }
    ],
  }

  onMount(async () => {
    let analyticsPlacemark = await graphService.getAllPlacemarks();
    userData.datasets[0].values[0] = analyticsPlacemark.length;

    let analyticsStations = await graphService.getAllStations();
    userData.datasets[0].values[1] = analyticsStations.length;


  })
</script>

<h1 class="title is-4">Fuel Prices at lowest</h1>
<Chart data={userData} type="bar"/>


