let editingProduce = null;

function addProduce() {
    const name = document.getElementById('produceName').value;
    const quantity = document.getElementById('produceQuantity').value;
    const price = document.getElementById('producePrice').value;
    const date = document.getElementById('produceDate').value;
    const supplier = document.getElementById('produceSupplier').value;

    if (!name || !quantity || !price || !date || supplier === '') {
        alert('Please fill in all fields.');
        return;
    }

    const produceListList = document.getElementById('produceList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <strong>${name}</strong><br>
        <span>${quantity}</span><br>
         <span>${price}</span><br>
        <small>Due: ${date}</small><br>
       <span>${supplier}</span><br>
    `;

    produceList.appendChild(li);
    clearInputs();
}

function editProduce(button) {
    const li = button.parentElement.parentElement;
    const name = li.querySelector('strong').textContent;
    const quantity = li.querySelector('span').textContent;
    const price = li.querySelector('span').textContent;
    const date = li.querySelector('small').textContent.split(': ')[1];
    const supplier = li.querySelector('span').textContent;

    document.getElementById('taskName').value = name;
    document.getElementById('taskQuantity').value = quantity;
    document.getElementById('taskPrice').value = price;
    document.getElementById('taskDate').value = date;
    document.getElementById('taskSupplier').value =supplier;

    editingProduce = li;
}

function deleteProduce(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function clearInputs() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskQuantity').value = '';
    document.getElementById('taskPrice').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('tasksupplier').value = '';
}
