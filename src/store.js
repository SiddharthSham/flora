// import { readable } from 'svelte/store';
import { posts_db } from './db.js'

async function getData () {
    let data = []
    await posts_db.get().then((snap) => {
        snap.forEach(function(doc) {
            data.push(doc.data())
        });
    });
    return await data;
}

async function getPost (slug) {
    let post = []
    await posts_db.where("slug","==", slug).get().then((snap) => {
        snap.forEach(function(doc) {
            post = doc.data()
        });
    });
    return await post;
}

let posts = getData()

export { posts, getPost }