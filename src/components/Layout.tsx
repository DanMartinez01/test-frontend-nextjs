import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../styles/globals.css'

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='flex flex-row'>
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Layout;





