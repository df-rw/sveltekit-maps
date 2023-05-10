# sveltekit and maps

Testing some map libraries.

-   [ ] [Leafelet](https://leafletjs.com)
-   [ ] [OpenLayers](https://openlayers.org)
-   [ ] [MapLibre](https://maplibre.org)
-   [ ] [Mapbox](https://www.mapbox.com)

## Gotchas

-   leaflet uses `window` without checking if it's defined; workaround is to disable SSR (see `/src/routes/+layout.svelte`).
