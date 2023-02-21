<script lang="ts">
    import { onMount } from 'svelte';
    import L from 'leaflet';

    let map;

    onMount(() => {
        map = L.map('map', {
            center: [ 51.505, -0.09 ],
            zoom: 13,
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    });

</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>
</svelte:head>

<div id="map"></div>

<style>
    #map {
        height: 180px;
    }
</style>
