<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    const placemarkService = getContext("PlacemarkService");

    let totalByCandidate = {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    }

    function populateByCandidate(placemarkList, candidates) {
        totalByCandidate.labels = [];
        candidates.forEach(candidate => {
            totalByCandidate.labels.push(`${candidate.lastName}, ${candidate.firstName}`)
            totalByCandidate.datasets[0].values.push(0);
        })
        candidates.forEach((candidate, i) => {
            placemarkList.forEach(donation => {
                if (donation.candidate._id == candidate._id) {
                    totalByCandidate.datasets[0].values[i] += donation.amount;
                }
            });
        });
    }

    onMount(async () => {
        let placemarkList = await placemarkService.getUserPlacemarks();
        let candidates = await placemarkService.getAllUsers()
        populateByCandidate(placemarkList, candidates);
    });

    export async function refreshChart() {
        let placemarkList = await placemarkService.getUserPlacemarks();
        let candidates = await placemarkService.getAllUsers()
        populateByCandidate(placemarkList, candidates);
    }
</script>

<h1 class="title is-4">By Candidate</h1>
<Chart data={totalByCandidate} type="bar"/>