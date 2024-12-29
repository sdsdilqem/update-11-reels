export const formatPhoneNumber = (value: string): string => {
  // Remove non-digits
  value = value.replace(/\D/g, '');
  
  if (value.length <= 10) {
    // Add leading zero
    if (value.length > 0) value = '0' + value;
    // Format as 0XX XXX XX XX
    if (value.length > 3) value = value.slice(0, 3) + ' ' + value.slice(3);
    if (value.length > 7) value = value.slice(0, 7) + ' ' + value.slice(7);
    if (value.length > 9) value = value.slice(0, 9) + ' ' + value.slice(9);
  }
  
  return value;
};