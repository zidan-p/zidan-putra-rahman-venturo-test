import { useAppDispatch } from "../../../../app/hook"
import { CartGood } from "../../../../entities/cartGoods";
import { addMenuBundlecount, subbtractMenuBundlecount } from "../../../../feature/cart/slice";






export function CounterGood({menuBundle} : {menuBundle: CartGood}){
  const dispatch = useAppDispatch(); 
  return(
    <div className="">
      <h1 className="text-2xl">
        {menuBundle.count}
      </h1>
      <div className="flex">
        <button 
          onClick={() => dispatch(subbtractMenuBundlecount(menuBundle.menu))}
          className="bg-green-200 px-3 py-2 rounded hover:bg-green-300">
          -
        </button>
        <button 
          onClick={() => dispatch(addMenuBundlecount(menuBundle.menu))}
          className="bg-green-200 px-3 py-2 rounded hover:bg-green-300">
          +
        </button>
      </div>
    </div>
  )
}