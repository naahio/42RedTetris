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
        <div className='flex flex-col w-[100%]'>
            <Header />
                <main className='flex h-[1135px] self-center max-w-[1400px]'>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;