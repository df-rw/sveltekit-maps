import { env } from '$env/dynamic/private';
import dataClient from '@raywhite/data-client';

export const rwapi = dataClient(fetch, console, env.RW_API_ENDPOINT, env.RW_API_KEY);
