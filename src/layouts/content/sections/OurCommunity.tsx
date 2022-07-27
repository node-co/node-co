import { Button, Image } from "antd";
import nodecoBackground from "@/assets/nodeco-bg.png";
import styles from "./OurCommunity.module.css";

const OurCommunity: React.FC = () => {
  const meetupLink = "https://www.meetup.com/es/node_co/";
  return (
    <section id='our-community' className={styles.ourCommunity}>
      <div className={styles.mainText}>
        <span className={styles.mainText__firstLine}>Comunidad Tech</span>
        <span className={styles.mainText__secondLine}>NodeJS + Javascript</span>
        <span className={styles.mainText__thirdLine}>En Colombia</span>
        <Button 
          shape='round' 
          href={meetupLink} 
          target='_blank'
          className={styles.mainText__btn}
        >
          <i className='bx bx-smile'></i>
          <span>ÚNETE A LA COMUNIDAD</span>
        </Button>
      </div>
      <Image src={nodecoBackground} preview={false} />
    </section>
  );
};

export default OurCommunity;
