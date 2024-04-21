import React from 'react';
import { ReactNode } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

export interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
                <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;