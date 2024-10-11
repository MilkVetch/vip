// src/pages/About.tsx
import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <h1>About Me</h1>
      <p>I am an author who loves to create worlds filled with mystery and adventure.</p>
    </AboutWrapper>
  );
};

export default About;
