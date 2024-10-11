// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};  // 使用当前主题背景色
  color: ${({ theme }) => theme.colors.text};  // 使用当前主题文本颜色
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 20px;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 16px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: flex-end;
    }

    li {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

const ThemeToggle = styled.span`
  margin-left: 10px;
  font-size: 24px;
  cursor: pointer;
`;

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Logo>
        末世劫
        <ThemeToggle onClick={toggleTheme}>💡</ThemeToggle>  {/* 点击灯泡切换主题 */}
      </Logo>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/novels">Novels</Link></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
