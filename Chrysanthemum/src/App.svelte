<script>
	import MediumEditor from 'medium-editor'
	import { onMount, tick } from 'svelte';
	import { posts_db } from './db.js'
	import MicroModal from 'micromodal'

	let editor, slug, html, title, img, subtext, modal_content, modal_title
	let flag = true, written = false;

	onMount(() => {
		editor = new MediumEditor('.editable');
		MicroModal.init();
		title = localStorage.getItem("chrys-title");
		html = localStorage.getItem("chrys-content");
		editor.setContent(title, 0)
		editor.setContent(html, 2)
	})

	const saveDraft = () => {
		title = editor.getContent(0)
		html = editor.getContent(2)
		console.log(title);
		localStorage.setItem('chrys-title', title);
		localStorage.setItem('chrys-content', html);
		modal_title = "Draft saved! ;"
		modal_content = "Come back to work on this when you are older, and hence, wiser. 👍"
		MicroModal.show('modal-1')
	};

	const publish = () => {
		flag = false
		title = editor.getContent(0)
		slug = title.replace(/\s+/g, '-').toLowerCase();
		html = editor.getContent(2)
		posts_db.doc(slug).set({
				title: title,
				slug: slug,
				html: html
			})
			.then(() => {
				written = true
				flag = true
				console.log("Document successfully written!")
				modal_title = "Hehe, that went well 👍 "
				modal_content = "Your post is live! Share it with the world 😁"
				MicroModal.show('modal-1')
			})
			.catch(error => {
				console.error("Error writing document: ", error)
				modal_title = "Oh no! 😱;"
				modal_content = "Evil wizards are trying to stop you from publishing your content 👿"
				MicroModal.show('modal-1')
			});
	}
</script>

<style>
</style>

<div class="container section is-fluid">
	<h1 class="editable title is-size-1">Title</h1>
	<h3 class="editable subtitle is-size-4">Subtitle</h3>
	<p class="editable content is-size-4">Click here to start your amazing story &#128150;</p>
	<div class="buttons">
	<button class="{flag?"button is-dark is-rounded is-medium publish":"button is-dark is-rounded is-medium is-loading"}" on:click={publish}>
		{#if !written}
			Publish!
		{:else}
			Edit
		{/if}
	</button>
	<button class="button is-dark is-rounded is-medium" on:click={saveDraft}>
		Save draft
	</button>
	</div>
</div>

<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
	<div class="modal__overlay" tabindex="-1" data-micromodal-close>
		<div class="box" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
			<header class="modal__header">
				<h2 class="title is-family-primary is-size-3" id="modal-1-title">
					{modal_title}
				</h2>
				<button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
			</header>
			<main class="modal__content is-family-code is-size-5" id="modal-1-content">
				{modal_content}
			</main>
			<footer class="modal__footer">
				<button class="button is-dark" data-micromodal-close
					aria-label="Close this dialog window">Close</button>
			</footer>
		</div>
	</div>
</div>
