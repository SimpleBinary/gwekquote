<script>export let button;
export let color;
export let label;
/* svelte-ignore unused-export-let */
export let isOpen;
</script>

<button bind:this={button}>
	{label}
	<div style="background-color: {color.hex};" />
	
</button>
<input type="hidden" value={color.hex} />

<style>
	div {
		width: 1em;
		height: 1em;
		border-radius: 3px;
		pointer-events: none;
	}
	button {
		background-color: inherit;
		color: inherit;
		font-size: 24px;
		display: flex;
		align-items: center;
		gap: 10px;
		border: none;
		cursor: pointer;
	}
</style>
