import { Menu } from "../../entities/menu";
import { MenuList } from "./component/MenuList";
import {useState, useEffect} from "react";





export function MenuContainer(){
  const [menuList, setMenuList] = useState<Menu[]>([])

  useEffect(()=>{
    fetch("https://tes-mobile.landa.id/api/menus")
      .then(res => res.json())
      .then(re => setMenuList(re.datas))
      .catch(err => console.error(err))
  },[])

  return(
  <div className="p-3 rounded">
    <div className="grid grid-cols-4 gap-2 max-w-5xl mx-auto">
      {menuList.map(men => (
        <MenuList menulist={men} />
      ))}
    </div>
  </div>

  )
}