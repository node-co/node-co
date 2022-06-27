import { Image } from "antd";
import meetupBackground from "@/assets/meetup-bg.png";
import "./Meetup.css";

const Meetup: React.FC = () => {
  return (
    <section id='meetup'>
      <div className='card-container'>Meetup cards</div>
      <Image src={meetupBackground} preview={false} />
    </section>
  );
};

export default Meetup;
