import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./loader.module.css";
export default function Spinner() {
  return (
    <div className={s.wrap}>
      <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
