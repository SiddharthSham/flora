<script>
	import { posts } from '../../store.js'
	import { onMount} from 'svelte';
	import Rellax from 'rellax';

	onMount(() => {
		const rellax = new Rellax('.rellax');
	})

</script>

<style>
h1 {
	margin-bottom: 4rem;
}

.pad-top {
	padding-top: 3.5rem;
}

</style>

<svelte:head>
	<title>Blog &#128221;</title>
</svelte:head>

<div class="container pad-top">

<h1 class="is-size-1 rellax" data-rellax-speed="3">My posts &#128221;</h1>

{#await posts}
	<p>Fetching some awesome content for you...</p>
{:then posts}
	{#each posts as post}
		<a class="box" rel='prefetch' href='blog/{post.slug}'>
			<h3 class="is-size-3">{post.title}</h3>
		</a>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

</div>