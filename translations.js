const translations = {
    fa: {
        title: "وبلاگ قطعات کامپیوتر",
        searchPlaceholder: "جستجو در مقالات..."
    },
    en: {
        title: "Computer Parts Blog",
        searchPlaceholder: "Search articles..."
    }
};

i18next.init({
    lng: localStorage.getItem("language") || 'fa',
    resources: {
        fa: { translation: translations.fa },
        en: { translation: translations.en }
    }
}, function () {
    document.getElementById('title').textContent = i18next.t('title');
    document.getElementById('search').placeholder = i18next.t('searchPlaceholder');
});
