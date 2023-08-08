import { Provider } from "react-redux";
import store from "./store";
import { MainPage } from "../page";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App(){
  return(
  <Provider store={store}>
    <MainPage />
    <ToastContainer />
  </Provider>
  )
}

export {App};