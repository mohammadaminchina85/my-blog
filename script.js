document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");
    let posts = document.querySelectorAll(".post");
    let resultCount = document.createElement("p");
    resultCount.id = "resultCount";
    searchInput.parentElement.appendChild(resultCount);

    // بارگذاری جستجو و فیلتر قبلی از localStorage
    let savedSearch = localStorage.getItem("searchTerm");
    if (savedSearch) {
        searchInput.value = savedSearch;
        searchPosts();
    }

    function searchPosts() {
        let searchTerm = searchInput.value.toLowerCase();
        localStorage.setItem("searchTerm", searchTerm);
        let count = 0;

        posts.forEach(post => {
            let text = post.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                post.classList.remove("hidden");
                highlightText(post, searchTerm);
                count++;
            } else {
                post.classList.add("hidden");
            }
        });

        resultCount.textContent = `${count} مقاله یافت شد`;
    }
    
    searchInput.addEventListener("keyup", searchPosts);

    function filterPosts(category) {
        localStorage.setItem("selectedCategory", category);
        posts.forEach(post => {
            if (category === "all" || post.dataset.category === category) {
                post.classList.remove("hidden");
            } else {
                post.classList.add("hidden");
            }
        });
    }

    function highlightText(element, searchTerm) {
        let regex = new RegExp(`(${searchTerm})`, "gi");
        element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    }

    // بارگذاری دسته‌بندی قبلی از localStorage
    let savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
        filterPosts(savedCategory);
    }

    // اضافه کردن دکمه علاقه‌مندی
    posts.forEach(post => {
        let favBtn = document.createElement("button");
        favBtn.textContent = "❤️";
        favBtn.classList.add("favorite-btn");
        favBtn.addEventListener("click", function () {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            let postTitle = post.querySelector("h2").textContent;
            if (!favorites.includes(postTitle)) {
                favorites.push(postTitle);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                alert("به علاقه‌مندی‌ها اضافه شد!");
            }
        });
        post.appendChild(favBtn);
    });
});
