import { Layout } from "antd";
import Header from "@/layouts/header/Header";
import Content from "@/layouts/content/Content";
import Footer from "@/layouts/footer/Footer";

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default Home;
