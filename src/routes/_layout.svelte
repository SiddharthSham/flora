<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>

</style>

<Nav {segment} />
<section class="container is-fluid">
	<main>
		<slot></slot>
	</main>
</section>

<Footer/>
