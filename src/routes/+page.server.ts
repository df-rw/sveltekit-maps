import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    return {
        MAPBOX_ACCESS_TOKEN: env.MAPBOX_ACCESS_TOKEN,
    };
};
