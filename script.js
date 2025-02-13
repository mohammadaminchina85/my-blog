// لیست مقالات
const posts = [
    { title: "پردازنده (CPU) چیست؟", content: "پردازنده یا CPU مغز اصلی کامپیوتر است...", category: "cpu" },
    { title: "کارت گرافیک (GPU) چه کاربردی دارد؟", content: "کارت گرافیک برای پردازش تصاویر و بازی‌ها استفاده می‌شود...", category: "gpu" },
    { title: "حافظه رم (RAM) چیست و چرا مهم است؟", content: "رم یکی از عوامل اصلی در سرعت اجرای برنامه‌ها است...", category: "ram" }
];

// نمایش مقالات در صفحه
function displayPosts(filteredPosts) {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; // پاک کردن محتوای قبلی

    filteredPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsContainer.appendChild(postDiv);
    });
}

// فیلتر کردن مقالات بر اساس دسته‌بندی
function filterPosts(category) {
    if (category === "all") {
        displayPosts(posts);
    } else {
        const filtered = posts.filter(post => post.category === category);
        displayPosts(filtered);
    }
}

// جستجو در مقالات
function searchPosts() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const filtered = posts.filter(post => post.title.toLowerCase().includes(searchText) || post.content.toLowerCase().includes(searchText));
    displayPosts(filtered);
}

// نمایش همه مقالات در ابتدا
displayPosts(posts);