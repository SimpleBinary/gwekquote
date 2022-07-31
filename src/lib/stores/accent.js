import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = '#dea60b';
const initialValue = browser ? window.localStorage.getItem('gwekquotes-accent') ?? defaultValue : defaultValue;

export const accent = writable(initialValue);

accent.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('gwekquotes-accent', value);
    }
});

export { accent as default };