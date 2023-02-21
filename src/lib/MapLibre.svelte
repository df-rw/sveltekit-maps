<script lang="ts">
    import maplibregl from 'maplibre-gl';

    const maplibre = (node: HTMLElement) => {
        const map = new maplibregl.Map({
            container: node,
            style: {
                version: 8,
                sources: {
                    osm:{
                        type: 'raster',
                        tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors',
                        maxzoom: 19 
                    }
                },
                layers: [
                    {
                        id: 'osm',
                        type: 'raster',
                        source: 'osm'
                    },
                ],
            },
            center: [-0.09, 51.505], // starting position [lng, lat]
            zoom: 12 // starting zoom
        });

        return {
            destroy: () => {
                if (map) {
                    map.remove();
                }
            },
        }
    };
</script>

<svelte:head>
    <link href='https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css' rel='stylesheet' />
</svelte:head>

<div id="map-maplibre" use:maplibre />

<style>
    #map-maplibre {
        height: 180px;
    }
</style>
