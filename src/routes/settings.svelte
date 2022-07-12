<script>
    import theme from '$lib/stores/theme';

    let newTheme = $theme;

    $: newTheme, theme.set(newTheme);
</script>

<div class="main">
    <label for="theme-chooser">Theme:&nbsp;</label>
    <select name="theme-chooser" id="theme-chooser" bind:value={newTheme}>
        <option id="system" value="system">System</option>
        <option id="light" value="light">Light</option>
        <option id="dark" value="dark">Dark</option>
    </select>
</div>