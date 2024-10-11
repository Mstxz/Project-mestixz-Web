let phoneIndex = 1;

function addPhoneNumber() {
  // Get the phone number input
  const phoneNumber = document.getElementById('phoneNumber').value;
  
  if (phoneNumber === "") {
    alert("Please enter a valid phone number");
    return;
  }
  
  // Find the table body
  const tableBody = document.getElementById('phoneTableBody');
  
  // Create a new row
  const newRow = document.createElement('tr');
  
  // Create a cell for the index
  const indexCell = document.createElement('td');
  indexCell.textContent = phoneIndex++;
  
  // Create a cell for the phone number
  const phoneCell = document.createElement('td');
  phoneCell.textContent = phoneNumber;
  
  // Append the cells to the row
  newRow.appendChild(indexCell);
  newRow.appendChild(phoneCell);
  
  // Append the row to the table body
  tableBody.appendChild(newRow);
  
  // Clear the input field after adding the number
  document.getElementById('phoneNumber').value = '';
}
