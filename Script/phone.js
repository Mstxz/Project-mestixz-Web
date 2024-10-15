let entryIndex = 1;

function addEntry() {
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const tableBody = document.getElementById('entryTableBody');

    const newRow = document.createElement('tr');

    const indexCell = document.createElement('td');
    indexCell.textContent = entryIndex++;

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = phoneNumber;

    newRow.appendChild(indexCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);

    tableBody.appendChild(newRow);

    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
}

function saveCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";

    csvContent += "Index,Name,Phone Number\r\n";
    const rows = document.querySelectorAll("#entryTableBody tr")

    rows.forEach(row => {
        const rowData = [];
        const columns = row.querySelectorAll("td")
        columns.forEach(column => {
            rowData.push(column.textContent);
        })

        csvContent += rowData.join(",") + "\r\n";
    })

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "phonebook.csv")
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
