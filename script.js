document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts");
    const searchInput = document.getElementById("search");
    const themeToggle = document.getElementById("theme-toggle");
    const languageToggle = document.getElementById("language-toggle");
    
    let posts = [
        { title: "معرفی پردازنده‌های Intel نسل 12", content: "پردازنده‌های نسل جدید با فناوری‌های نوین.", category: "cpu" },
        { title: "مقایسه کارت‌های گرافیک NVIDIA و AMD", content: "بررسی قدرت و کارایی دو برند مطرح گرافیکی.", category: "gpu" },
        { title: "راهنمای خرید رم برای گیمینگ", content: "نکات مهم برای انتخاب حافظه رم مناسب.", category: "ram" }
    ];

    function displayPosts(posts) {
        postsContainer.innerHTML = posts.map(post => `
            <div class="post" data-category="${post.category}">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <button class="favorite-btn">❤️ افزودن به علاقه‌مندی‌ها</button>
            </div>
        `).join('');
    }
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    });
    
    languageToggle.addEventListener("click", () => {
        let newLang = i18next.language === 'fa' ? 'en' : 'fa';
        i18next.changeLanguage(newLang, () => {
            document.getElementById('title').textContent = i18next.t('title');
            document.getElementById('search').placeholder = i18next.t('searchPlaceholder');
        });
    });

    displayPosts(posts);
});
