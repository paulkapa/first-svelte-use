<script>
    import { onDestroy } from 'svelte';
    import Slot from './Slot.svelte';
    import SayHello from './SayHello.svelte';
    import ClickCounter from './ClickCounter.svelte';
    import SpreadValues from './SpreadValues.svelte';

    export let title;
    export let href;

    onDestroy(() => {
        localStorage.removeItem('spreadThings');
    });
</script>

<main>
    <h1>{title}!</h1>
    <p>Visit the <a href="{href}">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<section>
    <h1>Receive your greetings!</h1>
    <Slot>
        <SayHello />
    </Slot>
</section>

<section>
    <h1>Slot with no component!</h1>
    <Slot />
</section>

<section>
    <h1>Click Counter!</h1>
    <Slot>
        <ClickCounter />
    </Slot>
</section>

<section>
    <h1>Spread Values!</h1>
    <Slot>
        <SpreadValues />
    </Slot>
</section>

<section>
    <footer>
        <p class="text-end">
            Copyright &copy; 2022<br />
            Paul Capatina-Voila
        </p>
    </footer>
</section>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    main h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    section h1 {
        color: #0044ff;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 500;
    }
</style>
