const paymentValidation = (paymentDetails) => {
  let errors = {};
  
  // Validate card number
  if (!paymentDetails.cardNumber || paymentDetails.cardNumber.length !== 16) {
    errors.cardNumberError = "Invalid card number. Must be 16 digits.";
  }

  // Validate expiration date
  if (!paymentDetails.expirationDate || !/^\d{2}\/\d{2}$/.test(paymentDetails.expirationDate)) {
    errors.expirationDateError = "Invalid expiration date. Format should be MM/YY.";
  }

  // Validate CVV
  if (!paymentDetails.cvv || paymentDetails.cvv.length !== 3) {
    errors.cvvError = "Invalid CVV. Must be 3 digits.";
  }

  return errors;
}

export default paymentValidation;
