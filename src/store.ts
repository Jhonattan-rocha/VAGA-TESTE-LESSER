// store.ts

import { writable } from 'svelte/store';

export const message = writable('WellCome');
export const openModal = writable(true);
export const showCandidatePage = writable(false);
export const name = writable('');
export const email = writable('');
export const phone = writable('');