import { useAppDispatch } from "../../../app/hook";
import { Menu } from "../../../entities/menu";
import { removeMenu } from "../slice";


export function RemoveMenufromCart({menu}: {menu: Menu}){
  const dispatch = useAppDispatch();
  return(
  <button 
    onClick={()=>{dispatch(removeMenu(menu))}}
    className="bg-green-600 text-white px-4 py-1 hover:bg-green-700">
    hapus
  </button>
  )
}