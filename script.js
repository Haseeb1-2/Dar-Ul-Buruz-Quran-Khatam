const tableRow = document.getElementById('input-row');

// Generate 30 input cells
for (let i = 1; i <= 30; i++) {
  const td = document.createElement('td');
  const input = document.createElement('input');
  input.type = 'text';
  input.maxLength = 3;
  input.id = 'cell-' + i;

  // Load saved value from localStorage
  input.value = localStorage.getItem('cell-' + i) || '';

  td.appendChild(input);
  tableRow.appendChild(td);
}

// Save button functionality
document.getElementById('save-btn').addEventListener('click', function() {
  for (let i = 1; i <= 30; i++) {
    const val = document.getElementById('cell-' + i).value;
    localStorage.setItem('cell-' + i, val);
  }
  
  // Use a tiny delay to ensure all data is saved before reload
  setTimeout(() => {
    window.location.href = window.location.href; // Forces full refresh
  }, 100); // 100 milliseconds delay
});