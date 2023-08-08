import { Menu } from "../../../entities/menu"
import { AddMenuToChart } from "../../../feature/cart/component/AddMenuToChart"
import { formatCurrency } from "../../../utils/formatCurrency"



type MenulistProps = {
  menulist: Menu
}



export function MenuList({menulist}: MenulistProps){
  return(
  <div className="transition-all border-2 bg-white hover:border-green-300 p-2 rounded-lg flex flex-col gap-3">
    <div style={{height: "150px"}} className={`bg-[url('${menulist.gambar}')] w-full bg-center bg-contain bg-no-repeat`}></div>
    <div className="flex flex-col">
      <h3 className="font-semibold">
        {menulist.nama}
      </h3>
      <p>{menulist.tipe}</p>
      <p className="text-green-400 mb-3">{formatCurrency(menulist.harga)}</p>
      <AddMenuToChart menu={menulist} />
    </div>
  </div>
  )
}