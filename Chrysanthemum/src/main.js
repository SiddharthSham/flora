import App from './App.svelte';
import '../node_modules/medium-editor/dist/css/medium-editor.min.css'
import '../node_modules/medium-editor/dist/css/themes/beagle.min.css'
import '../node_modules/bulma/css/bulma.min.css'

const app = new App({
	target: document.body
});

window.app = app;

export default app;