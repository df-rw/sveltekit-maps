import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const defaultHandle: Handle = ({ event, resolve }) => {
    return resolve(event);
};

export const handle: Handle = sequence(defaultHandle);
