<script>
	
	import { onMount, tick } from 'svelte'
	import { posts_db } from '../db.js'
	// import MediumEditor from 'medium-editor'

	let editor, slug, html, title, img, subtext, modal_content, modal_title
	let isactive = false
	let flag = true, written = false;

	onMount(() => {
		editor = new MediumEditor('.editable');
		title = localStorage.getItem("flora-title");
		html = localStorage.getItem("flora-content");
		editor.setContent(title, 0)
		editor.setContent(html, 1)
	})

	const saveDraft = () => {
		title = editor.getContent(0)
		html = editor.getContent(1)
		localStorage.setItem('flora-title', title);
		localStorage.setItem('flora-content', html);
		modal_title = "Draft saved!"
		modal_content = "Come back to work on this when you are older, and hence, wiser. 👍"
		isactive = true
		console.log("Saved!");
	};

	const hideModal = () => {
		isactive = false
	}

	const publish = () => {
		flag = false
		title = editor.getContent(0)
		slug = title.replace(/\s+/g, '-').toLowerCase();
		html = editor.getContent(1)
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
				isactive = true
			})
			.catch(error => {
				console.error("Error writing document: ", error)
				modal_title = "Oh no! 😱;"
				modal_content = "Evil wizards are trying to stop you from publishing your content 👿"
				isactive = true
			});
	}
</script>

<svelte:head>
	<title>Compose ✍️</title>
</svelte:head>

<div class="container">
	<h1 class="editable title is-size-1">Title</h1>
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

<div class={isactive?"modal is-active":"modal"}>
  <div class="modal-background" on:click={hideModal}></div>
  <div class="modal-content">
    <div class="box">
		<h2 class="has-text-bold is-size-3">{modal_title}</h2>
		<p class="content is-size-5">
			{modal_content}
		</p>
		<button class="button is-dark is-rounded" on:click={hideModal} >Close</button>
	</div>
  </div>
  <button class="modal-close is-large" on:click={hideModal} aria-label="close"></button>
</div>

<style>
.container {
	padding-top: 3.5rem;
	padding-bottom: 3.5rem;
}
.editable:focus {
	outline: none;
}
</style>