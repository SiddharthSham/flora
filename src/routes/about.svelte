<style>
	.padded {
		padding-top: 3.5rem;
	}

	/* img {
		max-height: 250px;
		width: auto;
		z-index: 0;
		position: absolute;
	}

	.splash {
		top: 10%;		
		left: 10%;
	}
	.pizza {
		top: 30%;
		left: 60%;
	}
	.travel {
		top: 50%;
		left: 20%;
	}
	.columns {
		mix-blend-mode: darken;
	} */
</style>

<script>
	import {
		onMount
	} from 'svelte';
	import Rellax from 'rellax';
	onMount(() => {
		const rellax = new Rellax('.rellax');
	})
</script>

<svelte:head>
	<title>About &#128587;</title>
</svelte:head>

<!-- <img src="blue-splash.webp" class="rellax splash" data-rellax-speed="-3" alt="splash">
<img src="pizza.webp" class="rellax pizza" data-rellax-speed="-3" alt="pizza">
<img src="earth.webp" class="rellax travel" data-rellax-speed="-3" alt="travel"> -->

<div class="container padded">
	<h1 class="is-size-1 rellax" data-rellax-speed="2">About &#128587;</h1>
	<h1 class="is-size-4 rellax padded" data-rellax-speed="1">Hello, reader.</h1>
	<article class="columns rellax" data-rellax-speed="1.5">
		<div class="column is-4">
			<p>
				Thank you for stumbling upon my corner of the Internet. This blog is a place where I have the freedom to
				be
				myself and to express in writing everything I feel strongly about.
			</p>
			<p>
				Like most writers, I’m also a reader. I prefer fantasy, speculative fiction and science fiction. I am
				also a
				fan of mythology, Chicken Soup for the Soul and books on completely random topics that aren’t focused on
				technical terms.
			</p>
			<p>
				Language is one of my favourite things to study. I love the way some languages resemble each other in
				bits and pieces. My neurons fire when I think about morphology or syntax or semantics or phonetics.
				Logic figures very prominently in linguistics, did you guys know?
			</p>
		</div>
		<div class="column is-4">
			<p>
				You might wonder if I’m, perhaps, a Lit or Language Studies major in university. Well…no. I’m a college
				sophomore with a day-life as a Computer Science student. I spend my days working out problem sets in
				Discrete Math, playing Fortnite, puzzling over Data Structures and Algorithms and wondering how I ever
				came to be here.
			</p>
			<p>
				I’m also a huge foodie, although my stomach can handle only a small portion of food. I love
				exploring the savoury side of things, and I would like to mention that I love the fried wontons and
				the sticky rice I had on a recent trip to Kuala Lumpur with my family.
			</p>
		</div>
		<div class="column is-4">
			<p>
				Sometime in the future, I would love to travel more in a world that is safe and not threatened by
				guns and terror attacks and abuse and discrimination. I would love to work somewhere that will allow
				me to use my coding skills and my language side in perfect unison. I would love to publish a book
				that connects to people and/ or makes them think differently than what they’re used to.
			</p>
			<p>
				Ants are crawling on my desk as I write this.
			</p>
			<p>
				Stay happy. Stay inspired. Learn something new every day.
			</p>
			<p>
				Sincerely,
				<br>
				The Nerdy Snickerdoodle
			</p>
		</div>
	</article>
</div>