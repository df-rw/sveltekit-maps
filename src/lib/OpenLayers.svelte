<script lang="ts">
    import { onMount } from 'svelte';
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    import { useGeographic } from 'ol/proj';

    import 'ol/ol.css';

    onMount(() => {
        useGeographic();

        const map = new Map({
            view: new View({
                center: [ -0.09, 51.505 ],
                zoom: 13,
            }),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: 'map-openlayers',
        });
    });
</script>

<div id="map-openlayers" />

<style>
    #map-openlayers {
        height: 180px;
        width: 100%;
    }
</style>
