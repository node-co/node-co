import { Layout } from "antd";
const { Footer } = Layout;
import nodeDark from "@/assets/nodeco-dark.svg";
import CommonNavComponent from "@/components/common-nav/CommonNav";
import { NavOptions } from "@/types/HeaderTypes";
import "./Footer.css";

const CustomFooter: React.FC = () => {
  const footerOptions: NavOptions[] = [
    {
      title: "bx bxl-facebook-circle",
      isSpan: "NOT",
      link: "https://www.facebook.com/nodecolombia",
    },
    {
      title: "bx bxl-twitter",
      isSpan: "NOT",
      link: "https://twitter.com/node_co",
    },
    {
      title: "bx bxl-youtube",
      isSpan: "NOT",
      link: "https://www.youtube.com/c/nodecolombia",
    },
    {
      title: "bx bxl-instagram-alt",
      isSpan: "NOT",
      link: "https://www.instagram.com/node_co/",
    },
    {
      title: "bx bxl-twitch",
      isSpan: "NOT",
      link: "https://www.twitch.tv/node_co",
    },
  ];
  return (
    <Footer>
      <CommonNavComponent logo={nodeDark} options={footerOptions} />
    </Footer>
  );
};

export default CustomFooter;
