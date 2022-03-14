<script>
    import { fade } from 'svelte/transition';
    let things = [
        {
            id: 0,
            category: 'Important Things',
            items: [
                {
                    label: 'Food',
                    agree: false,
                },
                {
                    label: 'Water',
                    agree: false,
                },
            ],
            new_bind: '',
        },
        {
            id: 1,
            category: 'Unimportant Things',
            items: [
                {
                    label: 'Instagram',
                    agree: false,
                },
                {
                    label: 'Facebook',
                    agree: false,
                },
            ],
            new_bind: '',
        },
        {
            id: 2,
            category: 'Cats',
            items: [
                {
                    label: 'Brown Cat',
                    agree: false,
                },
                {
                    label: 'Small Cat',
                    agree: false,
                },
                {
                    label: 'Neon Cat',
                    agree: false,
                },
            ],
            new_bind: '',
        },
        {
            id: 3,
            category: 'Smart Things',
            items: [
                {
                    label: 'Learning',
                    agree: false,
                },
                {
                    label: 'Experiencing',
                    agree: false,
                },
            ],
            new_bind: '',
        },
        {
            id: 4,
            category: 'Other',
            items: [
                {
                    label: 'The Sun',
                    agree: false,
                },
                {
                    label: 'UNICODE',
                    agree: false,
                },
            ],
            new_bind: '',
        },
    ];

    function bindValue(id) {
        things.at(id).items.push({ label: things.at(id).new_bind, agree: false });
        things.at(id).new_bind = '';
        things = things;
    }

    function deleteBind(id, i) {
        things.at(id).items.splice(i, 1);
        things = things;
    }

    let idColor = '#d8bfd8';
    let categoryColor = '#80ff00';
    let itemColor = '#add8e6';

    $: cssVarStyles = `--id:${idColor};--category:${categoryColor};--item:${itemColor}`;
</script>

<div style="{cssVarStyles}">
    <p>Here are some notes spread in rows:</p>
    <legend>
        <div class="div-row div-w-100 div-m-1vh">
            <div class="div-table div-bg-id">
                ID
                <input type="color" bind:value="{idColor}" />
            </div>
            <div class="div-table div-bg-category">
                Category
                <input type="color" bind:value="{categoryColor}" />
            </div>
            <div class="div-table div-bg-item">
                Items...
                <input type="color" bind:value="{itemColor}" />
            </div>
        </div>
    </legend>
    <div class="div-w-100 div-m-1h">
        {#each things as thing (thing.id)}
            <div class="div-table div-w-100">
                <div class="div-row div-table div-w-100 div-m-1vh border-0">
                    <div class="div-table div-bg-id">{thing.id + 1}</div>
                    <div class="div-table div-bg-category">{thing.category}</div>
                </div>
                <div class="div-row-wrap div-table div-w-100 border-0">
                    {#if thing.items.length != 0}
                        {#each thing.items as bind, i (i)}
                            <div transition:fade class="div-row-wrap div-table div-bg-item">
                                <div class="div-table">
                                    <div class="label-text div-table {bind.agree ? 'div-bg-agreed' : ''}">
                                        {bind.label}
                                    </div>
                                    <div class="agree-checkbox div-table {bind.agree ? 'div-bg-agreed' : ''}">
                                        <div class="div-table">
                                            <label for="checkbox">
                                                {@html `Fits in <strong>${thing.category}?</strong>`}
                                            </label>
                                        </div>
                                        <div class="div-table">
                                            <input id="checkbox" type="checkbox" bind:checked="{bind.agree}" />
                                        </div>
                                    </div>
                                    <div class="div-table border-0" on:click="{deleteBind(thing.id, i)}">
                                        <em class="fa-solid fa-circle-minus fa-2x"></em>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    {/if}
                </div>
                <div class="div-table div-w-100 div-m-1vh">
                    <div class="div-table border-0">
                        <input bind:value="{thing.new_bind}" placeholder="Bind New" maxlength="20" />
                    </div>
                    <div class="div-table border-0" on:click="{bindValue(thing.id)}">
                        <em class="fa-solid fa-circle-plus fa-2x"></em>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .div-bg-id {
        background-color: var(--id);
    }

    .div-bg-category {
        background-color: var(--category);
    }

    .div-bg-item {
        background-color: var(--item);
    }

    .div-bg-agreed {
        background-color: greenyellow;
    }

    .agree-checkbox {
        display: none;
        position: absolute;
        z-index: 100;
    }

    .label-text:hover + .agree-checkbox,
    .agree-checkbox:hover {
        display: inherit;
    }
</style>
