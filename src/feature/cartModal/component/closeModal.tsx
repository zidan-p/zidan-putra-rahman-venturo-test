import { useAppDispatch } from "../../../app/hook"
import { closeModal } from "../slice";





export function CloseModal(){
  const dispatch = useAppDispatch();
  return(
    <button
      className="bg-green-600 px-2 rounded py-1 text-white"
      onClick={() => dispatch(closeModal())}
    >
      tutup keranjang
    </button>
  )
}