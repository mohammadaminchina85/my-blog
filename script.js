// لیست مقالات جدید و مفصل‌تر
const posts = [
    { 
        title: "پردازنده (CPU) چیست و چگونه کار می‌کند؟", 
        content: "پردازنده یا CPU، واحد پردازش مرکزی کامپیوتر است که تمامی دستورات برنامه‌ها را اجرا می‌کند. هرچه تعداد هسته‌های CPU بیشتر باشد، پردازش هم‌زمان بهتری دارد. برندهای معروف CPU شامل Intel و AMD هستند که مدل‌های متنوعی از پردازنده‌ها را برای کاربران معمولی تا حرفه‌ای تولید می‌کنند. پردازنده‌ها از لحاظ معماری و لیتوگرافی نیز متفاوت‌اند و هرچه معماری جدیدتر باشد، بازدهی و مصرف انرژی بهینه‌تر خواهد بود.", 
        category: "cpu" 
    },
    { 
        title: "چگونه یک کارت گرافیک (GPU) مناسب انتخاب کنیم؟", 
        content: "کارت گرافیک وظیفه پردازش تصاویر و خروجی گرفتن از نمایشگر را بر عهده دارد. این قطعه به‌ویژه برای گیمرها و طراحان گرافیک بسیار مهم است. شرکت‌های NVIDIA و AMD دو برند اصلی تولید‌کننده کارت گرافیک هستند. هنگام انتخاب کارت گرافیک، باید به میزان حافظه و نوع معماری آن توجه کنید. برای بازی‌های جدید، کارت‌های گرافیک سری RTX انویدیا و RX 7000 ای‌ام‌دی گزینه‌های مناسبی هستند.", 
        category: "gpu" 
    },
    { 
        title: "حافظه رم (RAM) چیست و چرا مهم است؟", 
        content: "رم یا حافظه موقت، اطلاعات مورد نیاز پردازنده را برای پردازش سریع‌تر ذخیره می‌کند. مقدار رم مورد نیاز بستگی به نوع کاربری دارد؛ برای کارهای روزمره ۸ گیگابایت کافی است، اما برای بازی و کارهای حرفه‌ای، حداقل ۱۶ تا ۳۲ گیگابایت پیشنهاد می‌شود. رم‌ها از لحاظ سرعت (DDR4، DDR5) و تایمینگ (CL) نیز باهم تفاوت دارند که تأثیر مستقیمی روی عملکرد سیستم دارند.", 
        category: "ram" 
    },
    { 
        title: "SSD بهتر است یا HDD؟", 
        content: "درایوهای SSD و HDD هر دو برای ذخیره‌سازی داده‌ها استفاده می‌شوند، اما SSD سرعت خواندن و نوشتن بسیار بالاتری دارد و مصرف انرژی کمتری نیز دارد. در مقابل، HDD ارزان‌تر است و ظرفیت بالاتری ارائه می‌دهد. اگر سرعت سیستم برایتان مهم است، SSD بهترین گزینه است، اما اگر به فضای ذخیره‌سازی زیاد و اقتصادی نیاز دارید، HDD گزینه بهتری خواهد بود.", 
        category: "storage" 
    },
    { 
        title: "مادربرد (Motherboard) چه نقشی دارد؟", 
        content: "مادربرد، قطعه‌ای است که تمامی اجزای کامپیوتر را به یکدیگر متصل می‌کند. هنگام انتخاب مادربرد باید به نوع سوکت پردازنده، پشتیبانی از رم و اسلات‌های توسعه توجه کنید. مادربردها در اندازه‌های مختلفی مانند ATX، Micro-ATX و Mini-ITX تولید می‌شوند که هرکدام ویژگی‌های خاص خود را دارند.", 
        category: "motherboard" 
    },
    { 
        title: "چگونه یک پاور مناسب برای سیستم خود انتخاب کنیم؟", 
        content: "پاور یا منبع تغذیه، ولتاژ و توان مورد نیاز قطعات کامپیوتر را تأمین می‌کند. هنگام خرید پاور باید به توان خروجی (برحسب وات)، راندمان انرژی (۸۰Plus) و میزان مصرف کلی سیستم توجه کنید. استفاده از پاور بی‌کیفیت می‌تواند باعث آسیب به قطعات شود، بنابراین همیشه برندهای معتبر مانند Corsair، EVGA و Cooler Master را انتخاب کنید.", 
        category: "power" 
    },
    { 
        title: "اهمیت سیستم خنک‌کننده در کامپیوتر", 
        content: "یک سیستم خنک‌کننده مناسب باعث افزایش عمر قطعات و عملکرد بهتر آن‌ها می‌شود. خنک‌کننده‌ها شامل خنک‌کننده‌های بادی (Air Cooling) و آبی (Liquid Cooling) هستند. برای پردازنده‌های رده‌بالا و اورکلاک شده، خنک‌کننده‌های آبی عملکرد بهتری دارند اما قیمت بالاتری نیز دارند.", 
        category: "cooling" 
    }
];

// نمایش مقالات در صفحه
function displayPosts(filteredPosts) {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; 

    filteredPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button onclick="savePost('${post.title}')">ذخیره مقاله</button>
            <div class="share-buttons">
                <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}" target="_blank">توییتر</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank">فیسبوک</a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}" target="_blank">لینکدین</a>
            </div>
        `;
        postsContainer.appendChild(postDiv);
        displayRelatedPosts(post.category);
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

// جستجوی پیشرفته
document.getElementById("advanced-search").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchText = document.getElementById("search-text").value.toLowerCase();
    const searchCategory = document.getElementById("search-category").value;
    const filtered = posts.filter(post => 
        (searchCategory === "all" || post.category === searchCategory) &&
        (post.title.toLowerCase().includes(searchText) || post.content.toLowerCase().includes(searchText))
    );
    displayPosts(filtered);
});

// نمایش مقالات مرتبط
function displayRelatedPosts(category) {
    const relatedPosts = posts.filter(post => post.category === category);
    const relatedPostsContainer = document.createElement("div");
    relatedPostsContainer.innerHTML = "<h3>مقالات مرتبط</h3>";
    relatedPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<h4>${post.title}</h4><p>${post.content}</p>`;
        relatedPostsContainer.appendChild(postDiv);
    });
    document.getElementById("posts").appendChild(relatedPostsContainer);
}

// ذخیره مقاله
function savePost(title) {
    let savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || [];
    if (!savedPosts.includes(title)) {
        savedPosts.push(title);
        localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
        alert("مقاله ذخیره شد!");
    } else {
        alert("این مقاله قبلاً ذخیره شده است.");
    }
}

// حالت شب (Dark Mode)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// نمایش همه مقالات در ابتدا
displayPosts(posts);