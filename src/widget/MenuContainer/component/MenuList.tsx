import { Menu } from "../../../entities/menu"
import { AddMenuToChart } from "../../../feature/cart/component/AddMenuToChart"



type MenulistProps = {
  menulist: Menu
}



export function MenuList({menulist}: MenulistProps){
  return(
  <div className="border border-green-200 p-2 rounded flex gap-3">
    {/* <img src={menulist.gambar} alt=""/> */}
    <div className={`bg-[url('${menulist.gambar}')] h-[150px] bg-center bg-contain bg-no-repeat basis-1/3`}></div>
    <div className="flex flex-col py-9">
      <div className="grow">
        <h3 className="font-semibold">
          {menulist.nama}
        </h3>
        <p>{menulist.tipe}</p>
        <p className="text-green-400">Rp. {menulist.harga}</p>
        <AddMenuToChart menu={menulist} />
      </div>
    </div>
  </div>
  )
}