import { useAppDispatch } from "../../../app/hook"
import { openModal } from "../slice";





export function OpenModal(){
  const dispatch = useAppDispatch();
  return(
    <button
      className="bg-green-600 px-2 rounded py-1 text-white"
      onClick={() => dispatch(openModal())}
    >
      buka Keranjang
    </button>
  )
}