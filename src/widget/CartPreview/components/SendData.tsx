import { useAppDispatch, useAppSelector } from "../../../app/hook"
import {toast} from "react-toastify";
import { OrderSuccess } from "./toastLayout/OrderSuccess";
import { resetCart } from "../../../feature/cart/slice";



export function SendData(){
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const sendCart = async () =>{
    const nominal_diskon = cart.discount.toString();
    const nominal_pesanan = cart.total.toString();
    const items = cart.menuBundle.map(bundle => {
      return {
        id: bundle.menu.id,
        harga: bundle.menu.harga,
        catatan: bundle.note
      }
    })

    const sendData = JSON.stringify({
      nominal_diskon, nominal_pesanan, items
    })

    const result = await fetch("https://tes-mobile.landa.id/api/order", {
      body: sendData,
      headers: { "Content-Type": "application/json"},
      method: "POST"
    })
    const resJson = await result.json();

    if(resJson.status_code === 200){
      toast(<OrderSuccess id={resJson.id} />)
      dispatch(resetCart())
    }

  }
  return(
    <button 
      onClick={sendCart}
    className="bg-green-600 px-3 py-2 rounded text-white w-full">
      Pesan sekarang
    </button>
  )
}