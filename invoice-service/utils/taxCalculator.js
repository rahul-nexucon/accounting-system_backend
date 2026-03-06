export const calculateTax = (items) => {

  let subtotal = 0;
  let totalTax = 0;

  items.forEach(item => {

    const base = item.quantity * item.rate;

    const tax =
      base *
      ((item.igst || 0) +
       (item.cgst || 0) +
       (item.sgst || 0)) / 100;

    item.total = base + tax;

    subtotal += base;
    totalTax += tax;

  });

  return {
    subtotal,
    totalTax,
    totalAmount: subtotal + totalTax
  };

};