<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";


    let adminList = [];
    const graphService = getContext("PlacemarkService")

    let usersCount = {
        labels: ["All Users", "Admins only"],
        datasets: [
            {
                values: [0, 0]
            }
        ]
    }

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
        usersCount.datasets[0].values[0] = userList.length;

        adminList = ["admin"];
        usersCount.datasets[0].values[1] = adminList.length;

        let analyticsPetrol = await graphService.getAnalytics();
        userData.datasets[0].values[0] = analyticsPetrol.getCheapestPetrolPrice;

        let analyticsDiesel = await graphService.getAnalytics();
        userData.datasets[0].values[1] = analyticsDiesel.getCheapestDieselPrice;


    })
</script>

<h1 class="title is-4">Fuel Prices at lowest</h1>
<Chart data={userData} type="line"/>
<h1 class="title is-4">Total Users</h1>
<Chart data={usersCount} type="pie"/>