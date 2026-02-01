document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Animation للروابط عند الفتح ---
    const cards = document.querySelectorAll('.link-card, .project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // --- 2. التحكم في الوضع الليلي/النهاري ---
    const toggleBtn = document.getElementById('themeToggle');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    // التحقق من الوضع المحفوظ سابقاً
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    // عند الضغط على الزر
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // تغيير الأيقونة وحفظ الحالة
        if (body.classList.contains('light-mode')) {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
});