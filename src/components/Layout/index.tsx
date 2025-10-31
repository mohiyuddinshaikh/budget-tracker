
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log('children', children)
  return (
    <div className="layout">
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
