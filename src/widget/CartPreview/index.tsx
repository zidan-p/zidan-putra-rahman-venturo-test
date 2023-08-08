import { useAppDispatch, useAppSelector } from "../../app/hook"
import { CloseModal } from "../../feature/cartModal/component/closeModal";
import { closeModal } from "../../feature/cartModal/slice";
import { CardGoodsList } from "./components/CartGoodsList";
import { SendData } from "./components/SendData";
import { TotalAndDiscount } from "./components/TotalAndDiscount";
import { VoucherInput } from "./components/VoucherInput";
import { AnimatePresence, motion } from "framer-motion"

const backdropVariant = {
  hidden: {
    opacity: 0
  },
  visible : {
    opacity: 1,
    transition: {
      when: "beforeChildren"
    }
  }
}

const modalVariant = {
  hidden: {
    opacity: 0,
    x: "100%"
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

export function CartPreview(){
  const cart = useAppSelector(state => state.cart);
  const isOpen = useAppSelector(state => state.cartModal.isOpen);
  const dispatch = useAppDispatch();

  const closeModalHandler = (e: any) => {
    e.stopPropagation();
    if(e.target !== e.currentTarget)
      return;
    dispatch(closeModal());
  }

  return(
    <>
    <AnimatePresence mode="wait" >
      {isOpen && (
        <motion.div
          onClick={closeModalHandler}
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="z-10 backdrop absolute inset-0 bg-[rgb(0,0,0,0.5)] flex flex-col justify-center overflow-hidden"
        >

          {/* modal content */}
          <motion.div
            variants={modalVariant}
            className="bg-white rounded p-2 min-w-[450px] max-w-xl relative ml-auto mr-4 h-[90vh] flex flex-col"
          >
            <div className="max-w-3xl mb-2">
              <TotalAndDiscount />
              <VoucherInput />
            </div>
            <div className="flex justify-between mb-2" >
              <SendData />
            </div>
            <p className="text-sm mb-2 text-gray-500">
              *note: harap beri catata untuk masing-masing order supaya pemesanan dapat bekerja
            </p>
            <div className="overflow-auto max-h-full">
              <div className="flex gap-2 flex-col">
                {cart.menuBundle.map(bund => (
                  <CardGoodsList cardGood={bund} />
                ))}
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}