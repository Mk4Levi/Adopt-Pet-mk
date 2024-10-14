import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowToast = (title) => {
  return toast(title, {
    position: "top-center",
    autoClose: 900,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  });
};

export { ShowToast };
