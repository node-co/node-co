import { Layout } from "antd";
import ContactUs from "./sections/ContactUs";
import Meetup from "./sections/Meetup";
import Organizers from "./sections/Organizers";
import OurCommunity from "./sections/OurCommunity";
import Talks from "./sections/Talks";
const { Content } = Layout;

import styles from './Content.module.css'

const CustomContent = () => {
  return (
    <Content className={styles.main}>
      <OurCommunity />
      <Meetup />
      <Talks />
      <ContactUs />
      <Organizers />
    </Content>
  );
};

export default CustomContent;
