import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = 'system';
const initialValue = browser ? window.localStorage.getItem('gwekquotes-theme') ?? defaultValue : defaultValue;

export const theme = writable(initialValue);

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('gwekquotes-theme', value);
    }
});

export { theme as default };