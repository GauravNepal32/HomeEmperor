import { createContext, useContext, useState,useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin,setIsLogin]=useState(false);
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const baseURL="https://elscript.co/github/emperor-backend"

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
    <AuthContext.Provider value={{ user, isLogin,baseURL, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
