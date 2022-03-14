<script>
</script>

<span>
    <slot><em class="slot-error">No content available here...</em></slot>
</span>

<style>
    :root {
        --warning: rgba(255, 255, 0, 1);
        --error: rgba(255, 0, 0, 1);
    }

    @keyframes error {
        0% {
            background-color: var(--warning);
        }
        20% {
            background-color: var(--error);
        }
        100% {
            background-color: var(--warning);
        }
    }

    .slot-error {
        padding: 1em;
        border-radius: 0.5em;
        animation: error 500ms ease-in-out 100ms 1 alternate-reverse forwards;
    }
</style>
