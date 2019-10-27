<script>
    import {
        onMount
    } from 'svelte';
    import Rellax from 'rellax';

    onMount(() => {
        const rellax = new Rellax('.rellax');
    })
</script>

<style>
    .birds {
        width: 50%;
        height: auto;
    }
</style>

<section class="section is-large">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column">
                <div class="images is-hidden-mobile">
                    <img src="cherry-splash.webp" class="blob rellax" data-rellax-speed="-1" alt="blob">
                    <img src="writers.webp" class="rellax is-overlay writer" data-rellax-speed="3.5" alt="writer">
                    <img src="birds.webp" class="birds rellax is-overlay" data-rellax-speed="0.5" alt="birds">
                </div>
            </div>
            <div class="column">
                <h1 class="title is-size-1 rellax" data-rellax-speed="1">The Nerdy Snickerdoodle</h1>
                <h3 class="subtitle is-size-5 rellax" data-rellax-speed="0.75">[Occasionally called Anjali]</h3>
                <p class="content is-size-4">I am a bibliophile, whose shelves are constantly filled. I am a writer,
                    though my pens lie unused in a drawer and my diaries' pages are blank. I am a semi-free spirit with
                    a dream to inspire.</p>
            </div>
        </div>
    </div>
</section>