// src/pages/Home.tsx
import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};  // 使用当前主题背景色
  color: ${({ theme }) => theme.colors.text};  // 使用当前主题文本颜色
  text-align: center;
  padding: 20px;  // 增加内边距以防内容在小屏幕上被截断
`;

const HomeContent = styled.div`
  max-width: 800px;
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <h1>Welcome to 末世劫</h1>
        <p>Experience the thrill of the apocalypse in this zombie-themed novel series.</p>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
