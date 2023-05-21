<script>
    import { Chart, LineSeries } from "svelte-lightweight-charts";
    import {getContext, onMount} from "svelte";


    const graphService = getContext("PlacemarkService")


    let userData = {
        labels: ["Petrol", "Diesel"],
        datasets: [
            {
                values: [0, 0]
            }
        ],
    }

    onMount(async () => {
        let userList = await graphService.getAllUsers();
        userData.datasets[0].values[0] = userList.length;

    })
</script>

<h1 class="title is-4">Fuel Prices at lowest</h1>
<Chart data={userData} type="line"/>

