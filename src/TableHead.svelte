<script>
    export let columns;
</script>

<thead>
    <tr>
        {#each columns as column}
            <th>{column}</th>
        {/each}
    </tr>
</thead>

<style>
    thead th {
        border-left: 0.2em solid black;
        border-right: 0.2em solid black;
        border-bottom: 0.2em solid black;
    }
</style>
