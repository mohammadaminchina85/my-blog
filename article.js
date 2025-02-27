const posts = [
    { 
        id: 1,
        title: "آشنایی با بازار فارکس و نحوه عملکرد آن", 
        content: `
        <p>بازار فارکس (Forex) بزرگ‌ترین و نقدشونده‌ترین بازار مالی جهان است که در آن ارزهای مختلف به‌صورت جفت ارزها مبادله می‌شوند. این بازار 24 ساعته فعال است و به دلیل حجم بالای معاملات، نقدینگی زیادی دارد.</p>

        <h3>ویژگی‌های بازار فارکس:</h3>
        <ul>
            <li>معاملات 24 ساعته</li>
            <li>نقدینگی بالا</li>
            <li>امکان استفاده از اهرم (Leverage)</li>
            <li>هزینه‌های معاملاتی پایین</li>
        </ul>

        <h3>عوامل مؤثر بر نرخ ارز در فارکس:</h3>
        <ul>
            <li>عرضه و تقاضا</li>
            <li>اخبار اقتصادی و سیاسی</li>
            <li>تصمیمات بانک‌های مرکزی</li>
        </ul>
        `,
        image: "forex1.jpg"
    },
    { 
        id: 2,
        title: "استراتژی‌های موفق در بازار فارکس", 
        content: `
        <p>داشتن یک استراتژی معاملاتی مناسب، یکی از مهم‌ترین عوامل موفقیت در بازار فارکس است. معامله‌گران حرفه‌ای همیشه یک برنامه مشخص برای ورود و خروج از معاملات دارند.</p>

        <h3>برخی از استراتژی‌های رایج:</h3>
        <ul>
            <li><strong>اسکالپینگ (Scalping):</strong> ورود و خروج سریع در بازار برای کسب سودهای کوچک.</li>
            <li><strong>پیروی از روند (Trend Following):</strong> معامله در جهت روند بازار.</li>
            <li><strong>پرایس اکشن (Price Action):</strong> تحلیل رفتار قیمت بدون استفاده از اندیکاتورها.</li>
            <li><strong>تحلیل فاندامنتال:</strong> بررسی تأثیر اخبار اقتصادی بر قیمت ارزها.</li>
        </ul>

        <h3>نکات مهم در انتخاب استراتژی:</h3>
        <p>برای موفقیت در فارکس باید استراتژی‌ای را انتخاب کنید که با شخصیت و سبک معاملاتی شما سازگار باشد. همچنین تست کردن استراتژی در حساب دمو قبل از ورود به حساب واقعی ضروری است.</p>
        `,
        image: "forex2.jpg"
    },
    { 
        id: 3,
        title: "مدیریت ریسک در بازار فارکس", 
        content: `
        <p>مدیریت ریسک یکی از مهم‌ترین اصول برای موفقیت در فارکس است. بسیاری از معامله‌گران به دلیل عدم رعایت مدیریت سرمایه، دچار ضررهای سنگین می‌شوند.</p>

        <h3>اصول کلیدی مدیریت ریسک:</h3>
        <ul>
            <li><strong>تعیین حد ضرر (Stop Loss):</strong> جلوگیری از ضررهای بزرگ.</li>
            <li><strong>مدیریت حجم معاملات:</strong> هرگز بیش از ۲٪ سرمایه خود را در یک معامله ریسک نکنید.</li>
            <li><strong>تنوع در معاملات:</strong> سرمایه خود را بین دارایی‌های مختلف تقسیم کنید.</li>
            <li><strong>کنترل احساسات:</strong> ترس و طمع را از معاملات خود حذف کنید.</li>
        </ul>

        <h3>چرا مدیریت ریسک اهمیت دارد؟</h3>
        <p>حتی بهترین معامله‌گران دنیا نیز ضرر می‌کنند، اما تفاوت آن‌ها با مبتدیان در این است که می‌دانند چگونه ضررهای خود را محدود کنند و سرمایه‌شان را حفظ کنند.</p>
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
        document.getElementById("article-content").innerHTML = article.content;
    } else {
        document.getElementById("article-container").innerHTML = "<p>مقاله مورد نظر یافت نشد.</p>";
    }
}

if (window.location.pathname.includes("article.html")) {
    displayArticle();
}
