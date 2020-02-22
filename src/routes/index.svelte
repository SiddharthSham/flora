<style>
	.title {
		font-size: 8rem;
	}

	.subtitle {
		padding-top: 1rem;
	}

	img {
		height: 75vh;
		width: auto;
		position: absolute;
	}

	.vert-item {
		height: 65vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>

<script>
	import {
		onMount
	} from 'svelte';
	import Rellax from 'rellax';
	import Pane from '../components/Pane.svelte'

	onMount(() => {
		const rellax = new Rellax('.rellax');
	})
</script>

<svelte:head>
	<title>&#127801; Violet</title>
</svelte:head>

<section class="hero is-fullheight-with-navbar">
	<div class="container is-fluid">
		<div class="columns">
			<div class="column has-text-centered vert-item">
				<h1 class="title rellax" data-rellax-speed="2.5">
					Hey!
				</h1>
				<h2 class="subtitle is-size-4 " data-rellax-speed="2">
					Books. Pens. A snack. Go. &#9889;
				</h2>
				<p class="is-size-4" data-rellax-speed="1">
					Welcome to the spiritual succesor of My Literary Fantasia, Violet - a modern, scalable and stylish
					way to express yourself.
				</p>
			</div>
			<div class="column">
				<div class="images is-hidden-mobile">
					<img class="rellax blob" data-rellax-zindex="0" data-rellax-speed="-1" src="blob-shape3.svg"
						alt="blob">
					<img class="rellax logo" data-rellax-zindex="0" data-rellax-speed="-3" src="watercolor_png.webp"
						alt="logo">
				</div>
			</div>
		</div>
	</div>
</section>

<Pane />