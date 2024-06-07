document.getElementById('add-detail').addEventListener('click', function() {
    let newDetail = document.createElement('input');
    newDetail.type = 'text';
    newDetail.className = 'detail-input';
    newDetail.placeholder = 'أدخل تفاصيل الرحلة هنا';
    document.getElementById('details').appendChild(newDetail);
});

document.querySelectorAll('.photo-frame input[type="file"]').forEach(function(input) {
    input.addEventListener('change', function(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                let img = document.createElement('img');
                img.src = e.target.result;
                event.target.parentNode.innerHTML = '';
                event.target.parentNode.appendChild(img);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    });
});

document.getElementById('download-pdf').addEventListener('click', function() {
    const element = document.querySelector('.container');
    html2pdf(element, {
        margin:       1,
        filename:     'برنامج_سياحي.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
});
