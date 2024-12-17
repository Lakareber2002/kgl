let editingProduce = null;

function addProduce() {
    const name = document.getElementById('produceName').value;
    const quantity = document.getElementById('produceQuantity').value;
    const price = document.getElementById('producePrice').value;
    const date = document.getElementById('produceDate').value;
    const progress = document.getElementById('produceProgress').value;

    if (!name || !quantity || !price || !date || progress === '') {
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
        <div class="progress-bar" style="width: ${progress}%"></div>
        <div class="actions">
            <button onclick="editProduce(this)">Edit</button>
            <button onclick="deleteProduce(this)">Delete</button>
        </div>
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
    const progress = li.querySelector('.progress-bar').style.width.replace('%', '');

    document.getElementById('taskName').value = name;
    document.getElementById('taskQuantity').value = quantity;
    document.getElementById('taskPrice').value = price;
    document.getElementById('taskDate').value = date;
    document.getElementById('taskProgress').value = progress;

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
    document.getElementById('taskProgress').value = '';
}
