// لیست مقالات
const posts = [
    { title: "پردازنده (CPU) چیست؟", content: "CPU مغز کامپیوتر است که پردازش اصلی داده‌ها را انجام می‌دهد...", category: "cpu" },
    { title: "چطور یک کارت گرافیک (GPU) مناسب انتخاب کنیم؟", content: "کارت گرافیک برای پردازش تصاویر و بازی‌ها استفاده می‌شود...", category: "gpu" },
    { title: "حافظه رم (RAM) چقدر مهم است؟", content: "رم یکی از عوامل اصلی سرعت پردازش است و بین 8 تا 32 گیگابایت توصیه می‌شود...", category: "ram" },
    { title: "تفاوت SSD و HDD چیست؟", content: "SSD سرعت بالاتر و مصرف انرژی کمتر دارد، درحالی‌که HDD ارزان‌تر و ظرفیت بیشتری دارد...", category: "storage" },
    { title: "مادربرد (Motherboard) چه نقشی دارد؟", content: "مادربرد قطعات مختلف را به هم متصل می‌کند و بستگی به پردازنده و رم دارد...", category: "motherboard" }
];

// نمایش مقالات در صفحه
function displayPosts(filteredPosts) {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; 

    filteredPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsContainer.appendChild(postDiv);
    });
}

// فیلتر مقالات بر اساس دسته‌بندی
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
    const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(searchText) || 
        post.content.toLowerCase().includes(searchText)
    );
    displayPosts(filtered);
}

// نمایش همه مقالات در ابتدا
displayPosts(posts);