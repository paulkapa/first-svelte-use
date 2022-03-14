import App from './App.svelte'

// @ts-ignore
const app = new App( {
    target: document.body,
    props: {
        title: 'First Svelte Use',
        href: 'https://svelte.dev/tutorial'
    }
} )

export default app
