
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const option = document.getElementById('option').value;
    
    fetch('https://script.google.com/macros/s/AKfycbzFMBevDgxCHDdUHaFRHiPSFz3qtNpXTjP2x98Fz7bLkZtie3kLvnfuLKtqxOAKvNuH/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, option }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          alert('Your response has been recorded!');
        } else {
          alert('Error: ' + data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  });
