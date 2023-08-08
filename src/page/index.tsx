import { useAppSelector } from "../app/hook";
import {OpenModal} from "../feature/cartModal/component/OpenModal";
import { CartPreview } from "../widget/CartPreview";
import { MenuContainer } from "../widget/MenuContainer";
import { NavBar } from "./components/Nav";
import {toast} from "react-toastify";
// import Modal from 'react-modal';
// import Modal from 'react-modal';
const Modal = require("react-modal");




export function MainPage(){
  const isModalOpen = useAppSelector(state => state.cartModal.isOpen)
  return(
    <div className="bg-gray-200 min-h-screen">
      <NavBar />
      <div className="p-3">
        <OpenModal />
        <MenuContainer /> 
      </div>
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel="Example Modal"
        style={
          {content:{
            width: "600px",
            marginLeft: "auto"
          }}
        }
      >
        <h1>Keranjang Pemesanan</h1>
        <CartPreview />
      </Modal>
    </div>
  )
}