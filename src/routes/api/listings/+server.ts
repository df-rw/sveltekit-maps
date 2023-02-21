import type { RequestHandler } from './$types';
import pkg from 'maplibre-gl';
const { LngLat } = pkg;

interface MapBoundsInfo {
	centre: {
		lng: number;
		lat: number;
	};
	bounds: {
		_sw: {
			lng: number;
			lat: number;
		};
		_ne: {
			lng: number;
			lat: number;
		};
	};
}

export const POST: RequestHandler = async ({ request, locals }) => {
	try {
		const payload: MapBoundsInfo = await request.json();

		const ne = new LngLat(payload.bounds._ne.lng, payload.bounds._ne.lat);
		const radius = ne.distanceTo(new LngLat(payload.centre.lng, payload.centre.lat));

		const apiPayload = {
			size: 200,
			include: ['address', 'price', 'typeCode'],
			location: {
				lat: payload.centre.lat,
				lon: payload.centre.lng,
				distance: `${radius.toFixed(1)}m`,
			},
		};

		const response = await locals.rwapi.getListings(apiPayload);
		const listings = response.results;

		return new Response(JSON.stringify(listings));
	} catch (e) {
		const error = e instanceof Error ? e.toString() : 'unknown error';

		return new Response(
			JSON.stringify({
				message: error,
			}),
			{
				status: 500,
			}
		);
	}
};
