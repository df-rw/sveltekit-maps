// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		rwapi: import('@raywhite/data-client/src/client').DataClient;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare module '@raywhite/data-client';
