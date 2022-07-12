<script>
    import quotes from "$lib/stores/saved.js";
    import { generateQuote } from "$lib/Quote.svelte";

    let savedQuotes = $quotes;
    let liked = $quotes.includes(generateQuote());

    function update() {
        liked = !liked

        if (liked) {
            savedQuotes.push(generateQuote());
        } else {
            savedQuotes.splice(savedQuotes.indexOf(generateQuote()));
        }
    }

    $: savedQuotes, quotes.set(savedQuotes);
</script>

<h1 class:liked={liked} on:click="{update}" class="material-symbols-rounded">star</h1>

<style>
    h1 {
        opacity: 50%;
        font-size: 2em;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none;
        cursor: pointer;
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translate(-50%, 0);      
    }

    .liked {
        opacity: 100%;
        color: #ff004c;
    }
</style>