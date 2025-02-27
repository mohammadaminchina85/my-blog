const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

const article = posts.find(post => post.id == articleId);

if (article) {
    document.getElementById("article-content").innerHTML = `
        <h1>${article.title}</h1>
        <img src="${article.image}" alt="${article.title}" width="100%">
        <p>${article.content}</p>
    `;
} else {
    document.getElementById("article-content").innerHTML = `<p>مقاله یافت نشد.</p>`;
}
