// pages/index.tsx
import { PageRouteProps } from "@/interface";

const Home: React.FC<PageRouteProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Home;
