<script>
    import { Chart, LineSeries } from "svelte-lightweight-charts";
    import {getContext, onMount} from "svelte";

    const graphService = getContext("PlacemarkService")


    const data = [
        { time: '2019-04-11', value: 80.01, high: 2.12 },
        { time: '2019-04-12', value: 96.63, high: 2.24 },
        { time: '2019-04-13', value: 76.64, high: 2.23 },
        { time: '2019-04-14', value: 81.89, high: 2.20 },
        { time: '2019-04-15', value: 74.43, high: 2.19 },
        { time: '2019-04-16', value: 80.01, high: 2.20 },
        { time: '2019-04-17', value: 96.63, high: 2.21 },
        { time: '2019-04-18', value: 76.64, high: 2.09 },
        { time: '2019-04-19', value: 81.89, high: 2.17 },
        { time: '2019-04-20', value: 74.43, high: 2.11 },
    ];

    onMount(async () => {
        let placemarkList = await graphService.getAllPlacemarks();
        //data.time[0].value[0] = placemarkList;

    })

</script>
<h1 class="title is-4">Fuel Prices Indicator</h1>
<Chart width={450} height={500}>
    <LineSeries data={data}/>
</Chart>
