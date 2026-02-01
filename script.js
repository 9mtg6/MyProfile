function copyToClipboard(text) {
    // الطريقة الحديثة والأكثر دعماً للموبايل
    navigator.clipboard.writeText(text).then(function() {
        showToast();
    }).catch(function(err) {
        // Fallback للطريقة القديمة إذا لم يدعم المتصفح
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showToast();
    });
}

function showToast() {
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}