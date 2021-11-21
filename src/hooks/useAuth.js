import { useContext } from "react";
import { MyContext } from "../contexts/AuthProvider";

const useAuth = () => {
  return useContext(MyContext);
};

export default useAuth;
