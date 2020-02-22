<script>
	// export let segment;
	
	let flag=false
	const navToggle = () => {
		flag=!flag;
	}

</script>

<style>
.nohover:hover{
	cursor: default;
}
</style>

<nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item nohover" href=".">
			<h1 class="is-size-3 has-text-primary">&#127801; Violet. </h1>
		</a>

		<a role="button" on:click={navToggle} class={flag?"navbar-burger burger is-active":"navbar-burger burger"} aria-label="menu" aria-expanded="false" href="."
			data-target="navbarBasicExample">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div class={flag?"navbar-menu is-active":"navbar-menu"}>
		<div class="navbar-end">
			<a href='.' class="navbar-item is-size-4" on:click={navToggle}>home</a>
			<a href='about' class="navbar-item is-size-4" on:click={navToggle}>about</a>
			<a href='compose' class="navbar-item is-size-4" on:click={navToggle}>compose</a>
			<a rel=prefetch href='blog' class="navbar-item is-size-4" on:click={navToggle}>blog</a>
		</div>
	</div>
</nav>
