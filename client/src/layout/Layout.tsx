import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <Header />
      <main className="flex h-[1135px] w-full self-center justify-center max-w-[1650px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
