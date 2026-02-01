// دالة لنسخ النص إلى الحافظة
function copyToClipboard(text) {
    // إنشاء عنصر مؤقت
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    // إظهار رسالة النجاح
    showToast();
}

// دالة إظهار رسالة التنبيه (Toast)
function showToast() {
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

// إضافة تأثير بسيط عند تحريك الماوس للخلفية (اختياري للكمبيوتر)
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});