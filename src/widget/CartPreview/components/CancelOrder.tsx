
import {toast} from "react-toastify";






export function CancelOrder({idOrder}:{idOrder: (string | number)}){

  const cancelOrder = async () => {
    const result = await fetch("https://tes-mobile.landa.id/api/order/cancel/"+idOrder, {method: "POST"});
    const resultjson = await result.json();

    if(resultjson.status_code === 200){
      toast.success(resultjson.message);
      return
    }
    toast.error(resultjson.message ?? "Ada masalah")
  }

  return(
    <div className="">
      Batalkan Pemesanan
      <button
        onClick={cancelOrder}
        className="bg-red-200 text-red-900 px-3 py-1 rounded"
      >
        Batalkan Pemesanan
      </button>
    </div>
  )
}