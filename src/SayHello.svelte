<script>
    let name = {
        default: 'Visitor',
        value: '',
    };
</script>

<div>
    <h2>Welcome, {name.value ? name.value : name.default}!</h2>
    <label>
        Your name please:
        <input type="text" bind:value="{name.value}" maxlength="20" placeholder="{name.default}" />
    </label>
</div>
