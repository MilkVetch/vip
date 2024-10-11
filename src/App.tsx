// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Novels from './pages/Novels';
import { lightTheme, darkTheme } from './theme';  // 引入主题

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);  // 初始化为深色模式

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);  // 切换主题函数
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Header toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/novels" element={<Novels />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
