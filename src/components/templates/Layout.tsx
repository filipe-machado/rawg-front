import React from 'react';

// INTERFACES
import { LayoutProps } from '../../@types';

// COMPONENTS
import Navbar from '../organisms/Navbar';

const Layout: React.FC<LayoutProps> = ({
  children,
  logo,
}: LayoutProps) => (
  <main>
    <Navbar logo={logo as string} />
    {children}
  </main>
);

export default Layout;
