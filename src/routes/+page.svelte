<script lang="ts">
    import type { PageData } from './$types';

	import MapLeaflet from '$lib/Leaflet.svelte';
	import MapOpenLayers from '$lib/OpenLayers.svelte';
	import MapMapLibre from '$lib/MapLibre.svelte';
    import Mapbox from '$lib/Mapbox.svelte';

    export let data: PageData;
</script>

<p>Leaflet</p>
<MapLeaflet />

<p>OpenLayers</p>
<MapOpenLayers />

<p>MapLibre</p>
<MapMapLibre />

<p>Mapbox</p>
<Mapbox MAPBOX_ACCESS_TOKEN={data.MAPBOX_ACCESS_TOKEN} />
