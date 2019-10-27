<script context="module">
	import {
		getPost
	} from '../../store.js'
	export async function preload({
		params,
		query
	}) {
		const post = await getPost(params.slug)
		return {
			post: post
		};
	}
</script>

<script>
	export let post;
	import {
		onMount
	} from 'svelte';
	import Rellax from 'rellax';

	onMount(() => {
		const rellax = new Rellax('.rellax');
	})
</script>

<style>
	.padder {
		padding-top: 1rem;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class='content padder container'>
	<h1 class="is-size-1 rellax" data-rellax-speed="1">
		{post.title}
	</h1>
	{#if post.img}
		<img src={post.img} alt="cover">
	{/if}
	{@html post.html}
</div>