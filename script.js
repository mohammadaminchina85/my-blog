document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts");
    const searchInput = document.getElementById("search");
    const authSection = document.getElementById("auth");
    const loginForm = document.getElementById("loginForm");
    const signupButton = document.getElementById("signup");

    let posts = [];
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // بارگذاری مقالات از API
    async function loadPosts() {
        const response = await fetch('https://example.com/api/posts');
        posts = await response.json();
        displayPosts(posts);
    }

    // نمایش مقالات
    function displayPosts(posts) {
        postsContainer.innerHTML = posts.map(post => `
            <div class="post" data-category="${post.category}">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <div class="rating">
                    ${Array.from({ length: 5 }, (_, i) => `<span data-value="${i + 1}">★</span>`).join('')}
                </div>
                <div class="comments">
                    <h3>نظرات</h3>
                    <form class="commentForm">
                        <textarea placeholder="نظر خود را بنویسید..."></textarea>
                        <button type="submit">ارسال نظر</button>
                    </form>
                    <div class="commentList"></div>
                </div>
                <button class="favorite-btn">❤️</button>
            </div>
        `).join('');

        // افزودن رویداد به دکمه‌های علاقه‌مندی
        document.querySelectorAll('.favorite-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => addToFavorites(posts[index].title));
        });

        // افزودن رویداد به سیستم امتیازدهی
        document.querySelectorAll('.rating').forEach(rating => {
            rating.addEventListener('click', (e) => {
                if (e.target.tagName === 'SPAN') {
                    const value = e.target.getAttribute('data-value');
                    alert(`شما به این مقاله ${value} ستاره دادید!`);
                }
            });
        });

        // افزودن رویداد به فرم‌های نظر
        document.querySelectorAll('.commentForm').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const comment = e.target.querySelector('textarea').value;
                const commentList = e.target.nextElementSibling;
                commentList.innerHTML += `<p>${comment}</p>`;
                e.target.reset();
            });
        });
    }

    // افزودن به علاقه‌مندی‌ها
    function addToFavorites(title) {
        if (!favorites.includes(title)) {
            favorites.push(title);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("به علاقه‌مندی‌ها اضافه شد!");
        }
    }

    // جستجوی پیشرفته
    const fuse = new Fuse(posts, { keys: ['title', 'content', 'category'] });
    searchInput.addEventListener('keyup', () => {
        const term = searchInput.value;
        const results = fuse.search(term);
        displayPosts(results.map(result => result.item));
    });

    // سیستم احراز هویت
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        alert(`ورود با ایمیل ${email} انجام شد!`);
    });

    signupButton.addEventListener('click', () => {
        alert('ثبت‌نام انجام شد!');
    });

    // بارگذاری اولیه مقالات
    loadPosts();
});