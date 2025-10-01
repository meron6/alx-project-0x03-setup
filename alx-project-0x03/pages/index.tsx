// interface/index.ts
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface PageRouteProps {
  title: string;
}
tsx
Copy code
// pages/index.tsx
import { PageRouteProps } from "@/interface";

const Home: React.FC<PageRouteProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Home;
tsx
Copy code
// components/common/Button.tsx
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
tsx
Copy code
// components/layouts/Layout.tsx
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
