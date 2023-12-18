import React from 'react';
import { Main } from '@/components/layout/main';
import { ConfigProvider } from 'antd';
import { PublicLayoutWrapper } from './style';
import { GV } from '@/utils/style.util';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: GV('purple') } }}>
      <PublicLayoutWrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PublicLayoutWrapper>
    </ConfigProvider>
  );
};

export default PublicLayout;
