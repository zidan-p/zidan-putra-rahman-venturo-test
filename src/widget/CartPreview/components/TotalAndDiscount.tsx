import { useAppSelector } from "../../../app/hook"





export function TotalAndDiscount(){
  const total = useAppSelector(state => state.cart.total);
  const discount = useAppSelector(state => state.cart.discount);
  return(
    <div className="">
      <h1 className="text-xl font-semibold">
        Total : {total - discount < 0 ? 0 : total - discount}  
        <span className="text-green-600 text-sm font-normal">
         ({total} - {discount})
        </span>
      </h1>
      <h4 className="text-gray-700">
        diskon : {discount}
        </h4>
    </div>
  )
}