import { Layout } from "antd";
const { Header } = Layout;
import nodeLight from "@/assets/nodeco.svg";
import CommonNavComponent from "@/components/common-nav/CommonNav";
import { NavOptions } from "@/types/GenericTypes";
import "./Header.css";

const CustomHeader: React.FC = () => {
  const headerOptions: NavOptions[] = [
    {
      title: "NUESTRA COMUNIDAD",
      isSpan: "YES",
      link: "#our-community",
    },
    {
      title: "MEETUP",
      isSpan: "YES",
      link: "#meetup",
    },
    {
      title: "CHARLAS",
      isSpan: "YES",
      link: "#talks",
    },
    {
      title: "ORGANIZADORES",
      isSpan: "YES",
      link: "#organizers",
    },
    {
      title: "CONTÁCTANOS",
      isSpan: "YES",
      link: "#contact-us",
    },
  ];
  return (
    <Header>
      <CommonNavComponent logo={nodeLight} options={headerOptions} />
    </Header>
  );
};

export default CustomHeader;
