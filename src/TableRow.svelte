<script>
    export let columns;
</script>

<tr>
    {#each Object.keys(columns) as column}
        <td>{columns[column]}</td>
    {/each}
</tr>

<style>
    tr td {
        border-left: 0.2em solid black;
        border-right: 0.2em solid black;
        border-bottom: 0.2em solid black;
    }
</style>
