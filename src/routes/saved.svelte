<script>
    import quotes from "$lib/stores/saved.js";
</script>

<div class="content">
    <div>
        {#each $quotes as quote}
            <div class="quote">
                <h1><span class="quotation">❝</span>{quote}<span class="quotation quotation-right">❞</span></h1>
            </div>
        {/each} 
    </div>
</div>



<style>
	.quotation {
		margin-right: 0.5em;
		color: #ff004c;
	}

	.quotation-right {
		margin-right: 0;
		margin-left: 0.5em;
	}

	h1 {
		font-size: 1.8em;
		text-align: center;
		font-style: italic;
	}

    .content {
        width: 100%;
        height: 100vh;
        padding: 5em;
        margin: 0;
    }

    .quote {
        margin-top: 2em;
    }
</style>