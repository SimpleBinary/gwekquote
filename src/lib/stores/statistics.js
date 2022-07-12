import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = {
    list: [],
    timeStamps: [],
    maxStreak: 0,
    timesOpened: 0
};

const initialValue = browser ? JSON.parse(window.localStorage.getItem('gwekquotes-stats')) ?? defaultValue : defaultValue;

export const statistics = writable(initialValue);

statistics.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('gwekquotes-stats', JSON.stringify(value));
    }
});

export { statistics as default };