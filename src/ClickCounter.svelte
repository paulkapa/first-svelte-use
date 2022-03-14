<script>
    import { onDestroy } from 'svelte';
    import { counter } from './stores';

    let count = {
        value: 0,
        isSingular: false,
        isCountable: true,
    };
    const unsubscribe = counter.subscribe((value) => {
        count.value = value;
    });

    $: count.isSingular = count.value === 1 ? true : false;
    $: count.isCountable = count.value > 10 || count.value < -10 ? false : true;
    $: if (!count.isCountable) window.setTimeout(() => counter.reset(), 2000);

    $: innerHTML = `Clicked <strong>${count.value}</strong> ${count.isSingular ? 'time' : 'times'}!`;

    onDestroy(unsubscribe);
</script>

<div class="div-w-100">
    <div class="div-w-100 {count.isCountable ? '' : 'div-bg'}">
        {@html count.isCountable ? innerHTML : 'No more clicking and counting!'}
    </div>
    <div class="div-row div-w-100">
        {#if count.isCountable}
            <button on:click="{counter.increment}">+</button>
            <button on:click="{counter.decrement}">-</button>
        {/if}
        <button on:click="{counter.reset}">Reset</button>
    </div>
</div>

<style>
    button {
        width: 4em;
        height: 3em;
        background-color: aqua;
        color: black;
    }

    .div-bg {
        background-color: coral;
    }
</style>
