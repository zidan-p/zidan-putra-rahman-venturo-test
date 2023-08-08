import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { CartGood } from "../../../entities/cartGoods";
import { RemoveMenufromCart } from "../../../feature/cart/component/RemoveMenuFromCart";
import { changeNote } from "../../../feature/cart/slice";
import { CounterGood } from "./Countergood";





export function CardGoodsList({cardGood} : {cardGood: CartGood}){
  const dispatch = useAppDispatch();
  return(
  <div className="border border-green-200 p-2 rounded flex flex-col gap-3">
    <div className="flex gap-4">
      {/* <img src={menulist.gambar} alt=""/> */}
      <div className={`bg-[url('${cardGood.menu.gambar}')] h-[150px] bg-center bg-contain bg-no-repeat basis-1/3`}></div>

      <div className="flex gap-3 grow">
        <div className="flex flex-col py-9 grow">
          <div className="grow">
            <h3 className="font-semibold">
              {cardGood.menu.nama}
            </h3>
            <p>{cardGood.menu.tipe}</p>
            <p className="text-green-400">Rp. {cardGood.menu.harga}</p>
            <RemoveMenufromCart menu={cardGood.menu} />
          </div>
          
        </div>
        <div className="py-9 basis-1/2">
          <CounterGood menuBundle={cardGood} />
        </div>
      </div>
    </div>
    <div className="w-full flex">
      <div className="text-green bg-green-200 px-3">
        note: 
      </div>
      <input 
        value={cardGood.note} 
        onChange={e => {
          dispatch(changeNote({
            menu: cardGood.menu,
            note: e.target.value
          }))
        }}
        type="text" 
        className="border rounded py-1 px-3 grow" 
      />
    </div>
  </div>
  )
}