// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.footerText};
  border-top: 1px solid ${({ theme }) => theme.colors.footerBorder};

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 15px;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const Property = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Copyright>© 黄芪 (Khee), 2024. All rights reserved.</Copyright>
      <Property>This novel series, "末世劫系列," is the exclusive property of 黄芪 (Khee).</Property>
    </FooterWrapper>
  );
};

export default Footer;
