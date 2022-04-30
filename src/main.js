import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Cidade de Refúgio'
	}
});

export default app;