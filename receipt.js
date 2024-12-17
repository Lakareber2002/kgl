
let itemCount = 1;
let totalAmount = 0;

function calculateAmount() {
    const unitPrice = parseFloat(document.getElementById('unitPrice').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const amount = unitPrice * quantity;
    document.getElementById('amount').value = amount.toFixed(2);
}

function addItem() {
    const produceName = document.getElementById('produceName').value;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const amount = parseFloat(document.getElementById('amount').value) || 0;

    if (produceName && quantity && amount) {
        const tableBody = document.getElementById('itemTableBody');
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <th scope="row">${itemCount++}</th>
            <td>${produceName}</td>
            <td class="text-end">${quantity}</td>
            <td class="text-end">${amount.toFixed(2)}</td>
        `;
        // Update total amount
        totalAmount += amount;
        document.getElementById('totalAmount').value = totalAmount.toFixed(2);

        // Clear input fields
        document.getElementById('produceName').value = '';
        document.getElementById('unitPrice').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

function getPrint() {
    window.print();
}
