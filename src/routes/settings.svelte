<script>
    import ColorPicker, { CircleVariant } from 'svelte-awesome-color-picker';
    import CustomInput from "$lib/ColourPicker.svelte";
    import theme from '$lib/stores/theme';
    import accent from "$lib/stores/accent";

    let newTheme = $theme;
    let hex = $accent;

    $: newTheme, theme.set(newTheme);
    $: hex, accent.set(hex);
</script>

<div class="main">
    <div>
        <div class="section">
            <label for="theme-chooser">Theme:&nbsp;</label>
            <select name="theme-chooser" id="theme-chooser" bind:value={newTheme}>
                <option id="system" value="system">System</option>
                <option id="light" value="light">Light</option>
                <option id="dark" value="dark">Dark</option>
            </select>
        </div>
        <div class="section">
            <ColorPicker bind:hex label="Accent Colour:"  components={{...CircleVariant, input: CustomInput}} />
        </div>
    </div>
</div>

<style>
    .section {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>