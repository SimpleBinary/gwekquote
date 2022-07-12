import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = [];

const initialValue = browser ? JSON.parse(window.localStorage.getItem('gwekquotes-saved')) ?? defaultValue : defaultValue;

export const quotes = writable(initialValue);

quotes.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('gwekquotes-saved', JSON.stringify(value));
    }
});

export { quotes as default };