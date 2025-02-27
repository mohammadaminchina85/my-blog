const posts = [
    { 
        id: 1,
        title: "آشنایی با بازار فارکس و نحوه عملکرد آن", 
        content: `بازار فارکس (Forex) بزرگ‌ترین و نقدشونده‌ترین بازار مالی جهان است که در آن ارزهای مختلف به‌صورت جفت ارزها مبادله می‌شوند.  
        این بازار به‌صورت غیرمتمرکز فعالیت می‌کند و از طریق شبکه‌ای از بانک‌ها، موسسات مالی و معامله‌گران مستقل در سراسر جهان اجرا می‌شود.  

        **عوامل مؤثر بر نرخ ارز در فارکس:**  
        - عرضه و تقاضا  
        - اخبار اقتصادی  
        - تصمیمات سیاسی  
        `,
        image: "forex1.jpg"
    },
    { 
        id: 2,
        title: "استراتژی‌های موفق در بازار فارکس", 
        content: `داشتن یک استراتژی معاملاتی مناسب، یکی از مهم‌ترین عوامل موفقیت در بازار فارکس است.  

        **برخی از استراتژی‌های رایج در فارکس:**  
        1. اسکالپینگ (Scalping)  
        2. پیروی از روند (Trend Following)  
        3. پرایس اکشن (Price Action)  
        4. تحلیل فاندامنتال  
        `,
        image: "forex2.jpg"
    },
    { 
        id: 3,
        title: "مدیریت ریسک در بازار فارکس", 
        content: `مدیریت ریسک یکی از مهم‌ترین اصول برای موفقیت بلندمدت در بازار فارکس است.  

        **اصول کلیدی مدیریت ریسک در فارکس:**  
        1. تعیین حد ضرر (Stop Loss)  
        2. مدیریت حجم معاملات  
        3. تنوع در معاملات  
        4. کنترل احساسات  
        `,
        image: "forex3.jpg"
    }
];

function displayArticle() {
    const params = new URLSearchParams(window.location.search);
    const articleId = parseInt(params.get("id"));

    const article = posts.find(post => post.id === articleId);

    if (article) {
        document.getElementById("article-title").textContent = article.title;
        document.getElementById("article-image").src = article.image;
        document.getElementById("article-image").alt = article.title;
        document.getElementById("article-content").innerHTML = article.content.replace(/\n/g, "<br>");
    } else {
        document.getElementById("article-container").innerHTML = "<p>مقاله مورد نظر یافت نشد.</p>";
    }
}

if (window.location.pathname.includes("article.html")) {
    displayArticle();
}
