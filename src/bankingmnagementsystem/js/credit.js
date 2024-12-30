function credit() {
    const creditAmount = document.getElementById('creditAmount').value;
  
    if (creditAmount && creditAmount > 0) {
      alert('Credited ' + creditAmount + ' amount.');
    } else {
      alert('Please enter a valid amount');
    }
  }
  