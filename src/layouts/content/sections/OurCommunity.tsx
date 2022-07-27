import { Button, Image } from "antd";
import nodecoBackground from "@/assets/nodeco-bg.png";
import "./OurCommunity.css";

const OurCommunity: React.FC = () => {
  const meetupLink = "https://www.meetup.com/es/node_co/";
  return (
    <section id='our-community'>
      <div className='main-text'>
        <span>Comunidad Tech</span>
        <span>NodeJS + Javascript</span>
        <span>En Colombia</span>
        <Button shape='round' href={meetupLink} target={"_blank"}>
          <i className='bx bx-smile'></i>
          <span>ÚNETE A LA COMUNIDAD</span>
        </Button>
      </div>
      <Image src={nodecoBackground} preview={false} />
    </section>
  );
};

export default OurCommunity;
