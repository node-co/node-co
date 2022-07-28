import { Button, Image } from "antd";
import { MEETUP_URL } from "@/constants";
import { SmileOutlined } from "@ant-design/icons";
import nodecoBackground from "@/assets/nodeco-bg.png";
import styles from "./OurCommunity.module.css";

const OurCommunity: React.FC = () => {
  return (
    <section id='our-community' className={styles.ourCommunity}>
      <div className={styles.mainText}>
        <div className={styles.mainText__text}>
          <span className={styles.mainText__firstLine}>Comunidad Tech</span>
          <span className={styles.mainText__secondLine}>NodeJS + Javascript</span>
          <span className={styles.mainText__thirdLine}>En Colombia</span>
        </div>
        <Button 
          shape='round'
          size='large'
          href={MEETUP_URL} 
          target='_blank'
          className={styles.mainText__btn}
        >
          <SmileOutlined />
          <span>ÚNETE A LA COMUNIDAD</span>
        </Button>
      </div>
      <Image className={styles.heroImage} src={nodecoBackground} preview={false} />
    </section>
  );
};

export default OurCommunity;
