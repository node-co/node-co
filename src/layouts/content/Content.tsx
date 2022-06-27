import { Layout } from "antd";
import ContactUs from "./sections/ContactUs";
import Meetup from "./sections/Meetup";
import Organizers from "./sections/Organizers";
import OurCommunity from "./sections/OurCommunity";
import Talks from "./sections/Talks";
const { Content } = Layout;

const CustomContent = () => {
  return (
    <Content>
      <OurCommunity />
      <Meetup />
      <Talks />
      <ContactUs />
      <Organizers />
    </Content>
  );
};

export default CustomContent;
