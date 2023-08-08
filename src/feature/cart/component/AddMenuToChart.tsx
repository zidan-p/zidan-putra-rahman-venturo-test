import { useAppDispatch } from "../../../app/hook";
import { Menu } from "../../../entities/menu";
import { addMenu } from "../slice";



export function AddMenuToChart({menu}: {menu: Menu}){
  const dispatch = useAppDispatch();
  return(
  <button 
    onClick={()=>{dispatch(addMenu(menu))}}
    className="bg-green-600 text-white px-4 py-1 hover:bg-green-700">
    tambah ke keranjang
  </button>
  )
}