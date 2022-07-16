<script context="module">
	import quotes from "$lib/quotes.json"

	export function getDate() {
		let time = new Date();
		time.setUTCHours(0, 0, 0, 0);

		return time.valueOf();
	}

	export function generateQuote() {
		let seed = getDate();

		let index = Math.sin(seed++) * 10000;
		index -= Math.floor(index);
		index = Math.floor(index * quotes.length);

		return quotes[index];
	}

	let content = generateQuote();
</script>

<h1 class="quotation">❝</h1>
<h1>{content}</h1>
<h1 class="quotation quotation-right">❞</h1>

<style>
	.quotation {
		margin-right: 0.5em;
		font-style: normal !important;
		color: #dea60b;
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
</style>