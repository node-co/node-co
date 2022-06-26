import { Link } from "react-router-dom";
import { Col, Layout, Row, Image } from "antd";
const { Header } = Layout;
import { NavOptions } from "@/types/HeaderTypes";
import NodecoLogo from "@/assets/nodeco.svg";
import "./Header.css";

const CustomHeader: React.FC = () => {
  const navBarOptions: NavOptions[] = [
    {
      title: "NUESTRA COMUNIDAD",
      link: "#our-comunity",
    },
    {
      title: "MEETUP",
      link: "#meetup",
    },
    {
      title: "CHARLAS",
      link: "#talks",
    },
    {
      title: "ORGANIZADORES",
      link: "#organizers",
    },
    {
      title: "CONTÁCTANOS",
      link: "#contact-us",
    },
  ];
  return (
    <Header>
      <Row>
        <Col span={2} offset={2}>
          <Image width={100} preview={false} src={NodecoLogo}></Image>
        </Col>
        <Col span={20}>
          <Row justify='end'>
            {navBarOptions.map((option, index) => (
              <Col span={5} key={index}>
                <Link to={option.link}>
                  <span>{option.title}</span>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
