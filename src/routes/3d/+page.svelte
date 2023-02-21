<script lang="ts">
    import MapMapLibre from './ListingsMap.svelte';

	const centre: [number, number] = [153.01775369956653, -27.469426830918984];
    const zoom = 17;
    let pitch = 45;
    let listings: { lat: number, lon: number; price: number}[];

	const click = (e: CustomEvent) => {
		console.log(e.detail);
	};

    const idle = async (e: CustomEvent) => {
        try {
            const req = await fetch('/api/listings', {
                method: 'POST',
                body: JSON.stringify({
                    centre: e.detail.centre,
                    bounds: e.detail.bounds,
                }),
            });
            if (!req.ok) {
                throw new Error(req.statusText);
            }

            listings = await req.json();

        } catch (e) {
            console.log(e instanceof Error ? e.toString() : 'unknown error');
        }
    };

</script>

<MapMapLibre height="90vh" {centre} {zoom} {pitch} {listings} on:click={click} on:idle={idle} />
