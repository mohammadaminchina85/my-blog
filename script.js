const posts = [
    { 
        id: 1,
        title: "فارکس چیست؟", 
        content: "فارکس (Forex) بازار جهانی تبادل ارزهاست که در آن معامله‌گران ارزهای مختلف را خرید و فروش می‌کنند...",
        image: "forex1.jpg"
    },
    { 
        id: 2,
        title: "استراتژی‌های معاملاتی فارکس", 
        content: "استراتژی‌های فارکس شامل روش‌های معاملاتی متنوعی مانند اسکالپینگ، سوئینگ و معامله روزانه هستند...",
        image: "forex2.jpg"
    },
    { 
        id: 3,
        title: "مدیریت ریسک در فارکس", 
        content: "مدیریت ریسک یکی از اصول اساسی معامله‌گری در فارکس است که شامل حد ضرر، تعیین حجم معامله و...",
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
            <p>${post.content.substring(0, 100)}...</p>
            <a href="article.html?id=${post.id}">ادامه مطلب</a>
        `;
        postsContainer.appendChild(postDiv);
    });
}

displayPosts();
