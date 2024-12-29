export const validatePhoneNumber = (phone: string): boolean => {
  // Remove spaces and check if it matches Azerbaijan phone format
  const cleanPhone = phone.replace(/\s/g, '');
  return /^0[0-9]{9}$/.test(cleanPhone);
};

export const validateName = (name: string): boolean => {
  return name.length >= 3 && name.length <= 50;
};

export const validateAddress = (address: string): boolean => {
  return address.length >= 10 && address.length <= 200;
};