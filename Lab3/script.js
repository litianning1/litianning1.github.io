const form = document.getElementById('tipCalculator');
    const billTotalInput = document.getElementById('billTotal');
    const tipInput = document.getElementById('tip');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalWithTipInput = document.getElementById('totalWithTip');
    const billTotalError = document.getElementById('billTotalError');

    form.addEventListener('input', updateTipDetails);

    function updateTipDetails() {
      const billTotal = parseFloat(billTotalInput.value);
      if (isNaN(billTotal)) {
        billTotalInput.classList.add('error');
        billTotalError.textContent = 'Please enter a valid number.';
        return;
      }
      billTotalInput.classList.remove('error');
      billTotalError.textContent = '';

      const tipPercentage = tipInput.value;
      const tipAmount = (billTotal * tipPercentage) / 100;
      const totalWithTip = billTotal + tipAmount;

      tipPercentageInput.value = tipPercentage;
      tipAmountInput.value = tipAmount.toFixed(2);
      totalWithTipInput.value = totalWithTip.toFixed(2);

      tipPercentageInput.classList.toggle('disabled', tipPercentage === '');
      tipAmountInput.classList.toggle('disabled', tipPercentage === '');
      totalWithTipInput.classList.toggle('disabled', tipPercentage === '');
    }

    billTotalInput.addEventListener('input', updateTipDetails);