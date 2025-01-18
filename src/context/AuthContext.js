import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("userInfo");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser)); // Restore the user info, including role
    }
  }, []);

  const login = (token, userInfo) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Store the user info, including the role
    setUser(userInfo);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    setUser(null);
    alert("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
