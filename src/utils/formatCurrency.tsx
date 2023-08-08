







const formater = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR"
})
export function formatCurrency(number: number | string){

  return formater.format(Number(number));
}