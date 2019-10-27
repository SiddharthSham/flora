<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>

</style>

<Nav {segment} />
<section class="section">
	<main class="container is-fluid is-size-5">
		<slot></slot>
	</main>
</section>

<Footer/>
