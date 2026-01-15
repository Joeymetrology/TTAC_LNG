import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // 修改路径导入
import { useState } from "react";
import { AuthContext } from './contexts/authContext';

export default function App() {
  // 简化AuthContext，只保留必要的功能以确保应用正常运行
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthContext.Provider>
  );
}
