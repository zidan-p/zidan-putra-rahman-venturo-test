import { useAppSelector } from "../../app/hook"
import { CloseModal } from "../../feature/cartModal/component/closeModal";
import { CardGoodsList } from "./components/CartGoodsList";
import { SendData } from "./components/SendData";
import { TotalAndDiscount } from "./components/TotalAndDiscount";
import { VoucherInput } from "./components/VoucherInput";
import {useState} from "react";


export function CartPreview(){
  const cart = useAppSelector(state => state.cart);

  return(
    <>
    <div className="flex justify-between max-w-3xl" >
      <CloseModal />
      <SendData />
    </div>
    <div className="max-w-3xl mt-2">
      <VoucherInput />
      <TotalAndDiscount />
    </div>
    
    <div className="">
      {cart.menuBundle.map(bund => (
        <CardGoodsList cardGood={bund} />
      ))}
    </div>
    </>
  )
}