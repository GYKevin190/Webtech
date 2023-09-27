const toggleButton = document.getElementById('toggleTable');
const productTable = document.getElementById('productTable');

toggleButton.addEventListener('click', () => {
    if (productTable.style.display === 'none' || productTable.style.display === '') {
        productTable.style.display = 'table';
    } else {
        productTable.style.display = 'none';
    }
});