import { FormEvent, useState } from "react"
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../app/hook";
import { setDiscount } from "../../../feature/cart/slice";







export function VoucherInput(){

  const dispatch = useAppDispatch();

  const [voucherString, setVoucherString] = useState("");
  const checkVoucher = async  (e: FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if(voucherString === "")
      return;
    let res = await fetch("https://tes-mobile.landa.id/api/vouchers?kode="+voucherString);
    const resJson = await res.json();
    
    if(resJson.status_code === 200){
      dispatch(setDiscount(resJson.datas.nominal))
    }
  }

  return(
    <form onSubmit={checkVoucher} className="border shadow flex ">
      <input onChange={(e) => setVoucherString(e.target.value)} type="text" className="basis-2/3" />
      <button className="bg-green-300 basis-1/3">Check voucher</button>
    </form>
  )
}