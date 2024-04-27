//@ts-ignore
import React from 'react';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }: LayoutProps) {
    return (
        <div className='flex flex-col w-[100%] max-w-[1121px] '>
            <Header />
                <main className='flex justify-center h-[1135px] '>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;