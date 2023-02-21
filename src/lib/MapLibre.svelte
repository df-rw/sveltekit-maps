<script lang="ts">
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';

    onMount(() => {
        const map = new maplibregl.Map({
            container: 'map-maplibre',
            // style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
            center: [-0.09, 51.505], // starting position [lng, lat]
            zoom: 12 // starting zoom
        });
    });
</script>

<svelte:head>
    <link href='https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css' rel='stylesheet' />
</svelte:head>

<div id="map-maplibre" />

<style>
    #map-maplibre {
        height: 180px;
    }
</style>
