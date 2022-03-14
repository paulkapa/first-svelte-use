<script>
    import TableHead from './TableHead.svelte';
    import TableRow from './TableRow.svelte';

    export let labels;
    export let rows;
</script>

<table>
    <TableHead columns="{labels}" />
    <tbody>
        {#each rows as row (row.id)}
            <TableRow columns="{row}" />
        {/each}
    </tbody>
</table>

<style>
    table {
        border: 0.5em solid black;
    }
</style>
