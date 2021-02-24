import React from 'react';

// INTERFACES
import { LayoutProps } from '../../@types';

// COMPONENTS
import Navbar from '../organisms/Navbar';

const Layout: React.FC<LayoutProps> = ({
  children,
}: LayoutProps) => (
  <main>
    <Navbar />
    {children}
  </main>
);

export default Layout;
