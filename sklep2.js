function filterItems(category) {
    const items = document.querySelectorAll('.shop-item');
    const categoryTitle = document.getElementById('categoryTitle');

    items.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hidden');
        } else {
            item.classList.toggle('hidden', !item.classList.contains(category));
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('purchaseModal');
    const closeBtn = document.querySelector('.close-btn');
    const prices = document.querySelectorAll('.price-box');

    prices.forEach(price => {
        price.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});