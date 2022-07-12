<script>
	import { page } from '$app/stores';
</script>

<div class="header">
    <h1 class="heading"><b>Gwek</b>Quote</h1>
    <div class="nav">
        <a class:active={$page.url.pathname === '/'} class="first" href="/">Home</a>
        <a class:active={$page.url.pathname === '/statistics'} href="/statistics" sveltekit:prefetch>Statistics</a>
		<a class:active={$page.url.pathname === '/saved'} href="/saved" sveltekit:prefetch>Saved</a>
        <a class:active={$page.url.pathname === '/settings'} class="last" href="/settings" sveltekit:prefetch>Settings</a>
    </div>
</div>

<style>
	.header {
		height: 56px;
		width: 100%;
		position: fixed;
		display: flex;
		padding: 0;
		margin: 0;
		justify-content: space-evenly;
		align-items: center;
	}

	.heading {
		font-size: 1.5rem;
	}

	.heading b {
		color: #ff004c;
		font-weight: 500;
	}

	.nav a {
		color: inherit;
		padding: 2px 10px;
		border-right: 1px solid;
		text-decoration: none;
	}

	.nav .first {
		padding-left: 0;
	}

	.nav .last {
		padding-right: 0;
		border-right: none!important;
	}

	.nav .active {
		font-style: italic;
	}
</style>