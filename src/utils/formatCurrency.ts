export function formatCurrency(
  amount: number,
  currency: string = "XOF",
  locale: string = "fr-ML",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
  console.log('Haoussa');
}
