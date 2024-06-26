document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');
    const submitBtn = document.getElementById('submitReviewBtn');
    const clearBtn = document.getElementById('clearReviewsBtn');

    // Event listener untuk submit review
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Hindari pengiriman form

        // Ambil nilai dari input nama dan review
        var reviewerName = document.getElementById('reviewerName').value;
        var reviewText = document.getElementById('review').value;

        // Validasi jika nama atau review kosong
        if (reviewerName.trim() === '' || reviewText.trim() === '') {
            alert('Please enter both your name and review.');
            return;
        }

        // Buat elemen div untuk menampilkan review baru
        var reviewElement = document.createElement('div');
        reviewElement.classList.add('card', 'mb-3', 'shadow-sm');
        reviewElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${reviewerName}</h5>
                <p class="card-text">${reviewText}</p>
                <button type="button" class="btn btn-danger delete-btn">Delete</button>
            </div>
        `;

        // Tambahkan event listener untuk tombol Delete
        var deleteBtn = reviewElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            reviewElement.remove(); // Hapus elemen review dari DOM
        });

        // Masukkan review ke dalam reviewsList
        reviewsList.appendChild(reviewElement);

        // Bersihkan form setelah submit
        form.reset();
    });

    // Event listener untuk tombol Clear Reviews
    clearBtn.addEventListener('click', function() {
        reviewsList.innerHTML = ''; // Kosongkan reviewsList
    });
});
