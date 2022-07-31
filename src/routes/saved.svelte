<script>
    import quotes from "$lib/stores/saved";
    import accent from "$lib/stores/accent"
</script>

<div class="content">
    <div>
        {#each $quotes as quote}
            <div class="quote">
                <h1><span class="quotation" style="color: {$accent}">❝</span>{quote}<span class="quotation quotation-right" style="color: {$accent}">❞</span></h1>
            </div>
        {/each} 
    </div>
</div>



<style>
	.quotation {
		margin-right: 0.5em;
        font-style: normal !important;
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
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>