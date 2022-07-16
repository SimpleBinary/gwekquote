<script>
	import Header from '$lib/Header.svelte';
	import theme from '$lib/stores/theme';
	import { getDate, generateQuote } from "$lib/Quote.svelte";
	import statistics from "$lib/stores/statistics.js";
	import '../app.css';

    let currentStats = $statistics;

    $: currentStats, statistics.set(currentStats);

	if (!currentStats.list.includes(generateQuote())) {
		currentStats.list.push(generateQuote())
	}

	if (!currentStats.timeStamps.includes(getDate())) {
		currentStats.timeStamps.push(getDate())
	}

	currentStats.timesOpened += 1
</script>


<body class="theme-{$theme}">
	<div>
		<main>
			<Header theme={$theme} />
			<slot />
		</main>
	</div>
</body>


<style>
	main {
		width: 100%;
		height: 100vh;
		padding: 0;
		margin: 0;
	}

	body {
		background-color: #ffffff;
		color: #0d1117;
	}

	.theme-dark {
		background-color: #0d1117;
		color: #ffffff;
	}

	@media (prefers-color-scheme: dark) {
		.theme-system {
			background-color: #0d1117;
			color: #ffffff;
		}
	}
</style>
