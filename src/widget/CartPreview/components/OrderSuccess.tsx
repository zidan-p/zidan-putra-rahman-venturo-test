import { CancelOrder } from "./CancelOrder";







export function OrderSuccess({id} : {id: string | number}){
  return (
    <div className="">
      <h4 className="text-green-800 text-2xl font-bold">
        Pemesanan Berhasil Dilakukan
      </h4>

      <CancelOrder idOrder={id} />
    </div>
  )
}