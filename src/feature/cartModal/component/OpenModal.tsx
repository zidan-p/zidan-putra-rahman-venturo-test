import { useAppDispatch, useAppSelector } from "../../../app/hook"
import { openModal } from "../slice";





export function OpenModal(){
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(state => state.cart.menuBundle.length)
  return(
    <button
      className="bg-green-600 px-2 rounded py-1 text-white relative"
      onClick={() => dispatch(openModal())}
    >
      buka Keranjang
      {cartCount >= 1 ?? (
        <Pill count={5} />
      )}
    </button>
  )
}


function Pill({count}: {count: number}){
  return(
    <>
    <span className="absolute text-xs bg-red-600 p-1 px-1.5 text-white rounded-full animate-ping -top-2 -right-2">
        {count}
      </span>
      <span className="absolute text-xs bg-red-600 p-1 px-1.5 text-white rounded-full -top-2 -right-2">
        {count}
      </span>
    </>
  )
}