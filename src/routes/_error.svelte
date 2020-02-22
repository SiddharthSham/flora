<script>
	export let status;
	export let error;

	import { onMount} from 'svelte';
	import Rellax from 'rellax';

	onMount(() => {
		const rellax = new Rellax('.rellax');
	})

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
img {
	padding: 10%;	 
}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="container is-fluid has-text-centered">
	<h1 class="is-size-1">Oh no, it's an {status} &#128148;</h1>
	<p class="content">Looks like the path you wished to tread was {error.message}</p>
	<img src="error.png" class="rellax" alt="error">
</div>


{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
