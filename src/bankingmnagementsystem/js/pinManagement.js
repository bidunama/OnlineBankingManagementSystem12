function updatePin() {
    const newPin = document.getElementById('newPin').value;
  
    if (newPin) {
      alert('Pin updated successfully!');
    } else {
      alert('Please enter a new pin');
    }
  }
  