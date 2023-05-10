<script lang="ts">
    import maplibregl from 'maplibre-gl';
    import { createEventDispatcher } from 'svelte';

    export let height = '180px';
    export let centre: [number, number] = [-0.09, 51.505];
    export let zoom = 12;
    export let pitch = 0;

    const dispatchEvent = createEventDispatcher();

    const maplibre = (node: HTMLElement, p: number) => {
        const map = new maplibregl.Map({
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
            pitch: p,
        });

        map.addControl(
            new maplibregl.NavigationControl({
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
    <link href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css" rel="stylesheet" />
</svelte:head>

<div id="map-maplibre" use:maplibre={pitch} style="height: {height}">
    <slot />
</div>
