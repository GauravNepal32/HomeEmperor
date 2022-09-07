import { createContext, useContext, useState,useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin,setIsLogin]=useState(false);
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const baseURL = "https://heuristic-wescoff.128-199-28-111.plesk.page/panel"

// Login user function
  const login = (user) => {
    setUser(user);
    setIsLogin(true)
  };
  // Logout User function
  const logout = () => {
    setUser(null);
    sessionStorage.setItem("token", null);
    setIsLogin(false)
  };

  // Getting already login user details
  useEffect(()=>{
    if (userData===null){
      setIsLogin(false)
    }else{
      setIsLogin(true)
    }
  },[userData])
  return (
    // Returning UseContext value
    <AuthContext.Provider value={{ user, isLogin,baseURL, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
