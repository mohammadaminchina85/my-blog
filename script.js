const posts = [
    { 
        id: 1,
        title: "آشنایی با بازار فارکس و نحوه عملکرد آن", 
        content: "بازار فارکس بزرگ‌ترین بازار مالی جهان است که در آن ارزهای مختلف به‌صورت جفت ارز مبادله می‌شوند...",
        image: "forex1.jpg"
    },
    { 
        id: 2,
        title: "استراتژی‌های موفق در بازار فارکس", 
        content: "داشتن یک استراتژی معاملاتی مناسب، یکی از مهم‌ترین عوامل موفقیت در بازار فارکس است...",
        image: "forex2.jpg"
    },
    { 
        id: 3,
        title: "مدیریت ریسک در بازار فارکس", 
        content: "مدیریت ریسک یکی از مهم‌ترین اصول برای موفقیت در فارکس است. بسیاری از معامله‌گران به دلیل عدم رعایت اصول مدیریت سرمایه، دچار ضررهای سنگین می‌شوند...",
        image: "forex3.jpg"
    }
];

function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        postDiv.innerHTML = `
            <h2><a href="article.html?id=${post.id}">${post.title}</a></h2>
            <img src="${post.image}" alt="${post.title}" width="100%">
            <p>${post.content.substring(0, 200)}...</p>
            <a href="article.html?id=${post.id}">ادامه مطلب</a>
        `;

        postsContainer.appendChild(postDiv);
    });
}

displayPosts();
