import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { rwapi } from '$lib/rwapi';

const defaultHandle: Handle = ({ event, resolve }) => {
	event.locals.rwapi = rwapi;

	return resolve(event);
};

export const handle: Handle = sequence(defaultHandle);
