<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const placemarkService = getContext("PlacemarkService");

    let totalByMethod = {
        labels: ["paypal", "direct"],
        datasets: [
            {
                values: [0, 0]
            }
        ]
    };

    function populateByMethod(placemarkList) {
        placemarkList.forEach(placemark => {
            if (placemark.method == "paypal") {
                totalByMethod.datasets[0].values[0] += placemark.amount
            } else if (placemark.method == "direct") {
                totalByMethod.datasets[0].values[1] += placemark.amount
            }
        });
    }

    onMount(async () => {
        let placemarkList = await placemarkService.getAllPlacemarks();
        populateByMethod(placemarkList);
    });

</script>

<h1 class="title is-4">By Method</h1>
<Chart data={totalByMethod} type="pie"/>
