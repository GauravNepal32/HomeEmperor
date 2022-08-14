import { createContext, useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin,setIsLogin]=useState(false);
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const [user, setUser] = useState(null);


  const login = (user) => {
    setUser(user);
    setIsLogin(true)
  };
  const logout = () => {
    setUser(null);
    sessionStorage.setItem("token", null);
    setIsLogin(false)
  };

  useEffect(()=>{
    if (userData===null){
      setIsLogin(false)
    }else{
      setIsLogin(true)
    }
  },[userData])
  return (
    <AuthContext.Provider value={{ user, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
