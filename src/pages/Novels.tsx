// src/pages/Novels.tsx
import React from 'react';
import styled from 'styled-components';

const NovelsWrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Novels: React.FC = () => {
  return (
    <NovelsWrapper>
      <h1>My Novels</h1>
      <p>Here are some of the novels I've written.</p>
    </NovelsWrapper>
  );
};

export default Novels;
