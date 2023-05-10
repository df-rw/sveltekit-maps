<script lang="ts">
    import mapboxgl from 'mapbox-gl';
    import { createEventDispatcher } from 'svelte';

    export let height = '180px';
    export let centre: [number, number] = [-0.09, 51.505];
    export let zoom = 12;
    export let pitch = 0;
    export let MAPBOX_ACCESS_TOKEN: string;

    const dispatchEvent = createEventDispatcher();

    const mapbox = (node: HTMLElement, pitch: number) => {
        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container: node,
            style: {
                version: 8,
                sources: {
                    osm: {
                        type: 'raster',
                        tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors',
                        maxzoom: 19,
                    },
                },
                layers: [
                    {
                        id: 'osm',
                        type: 'raster',
                        source: 'osm',
                    },
                ],
            },
            center: centre,
            zoom,
            pitch,
        });

        map.addControl(
            new mapboxgl.NavigationControl({
                visualizePitch: true,
                showZoom: true,
                showCompass: true,
            })
        );

        map.on('click', (e) => {
            dispatchEvent('click', e.lngLat);
        });

        map.on('idle', () => {
            dispatchEvent('idle', map.getBounds());
        });

        return {
            update: (p: number) => {
                if (map) {
                    map.setPitch(p);
                }
            },
            destroy: () => {
                if (map) {
                    map.remove();
                }
            },
        };
    };
</script>

<svelte:head>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<div id="map-mapbox" use:mapbox={pitch} style="height: {height}">
    <slot />
</div>
