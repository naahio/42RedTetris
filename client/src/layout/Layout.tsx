//@ts-ignore
import React from 'react';
import { ReactNode } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

export interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }: LayoutProps) {
    return (
        <div className='flex flex-col w-[95%] max-w-[1121px] border-red-600'>
            <Header />
                <main className='flex h-[1135px] border'>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;