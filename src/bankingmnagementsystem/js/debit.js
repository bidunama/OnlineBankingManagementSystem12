function debit() {
    const debitAmount = document.getElementById('debitAmount').value;
  
    if (debitAmount && debitAmount > 0) {
      alert('Debited ' + debitAmount + ' amount.');
    } else {
      alert('Please enter a valid amount');
    }
  }
  