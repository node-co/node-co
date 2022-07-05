import { Button, Card, Col, Image, Row } from "antd";
import meetupBackground from "@/assets/meetup-bg.png";
import "./Meetup.css";
import { CardOption } from "@/types/GenericTypes";

const Meetup: React.FC = () => {
  const cards: CardOption[] = [
    {
      date: "Jueves, 12 enero de 2021",
      title: "Estrategias para manejo de Backpressure en Node JS",
      link: "https://www.youtube-nocookie.com/embed/IZrqS1QApDY",
    },
    {
      date: "Jueves, 26 de noviembre de 2020",
      title:
        "Lo mejor de Deno características principales de Deno, y como aprender a utilizarlo.",
      link: "https://www.youtube-nocookie.com/embed/Tv-4yCYyn3o",
    },
    {
      date: "Miércoles, 16 de septiembre de 2020",
      title:
        "Herramientas y configuraciones para trabajar con nodejs y docker en windows",
      link: "https://www.youtube-nocookie.com/embed/TS6ObX22EEI",
    },
  ];
  return (
    <section id='meetup'>
      <div className='card-container'>
        <span>Meetup</span>
        <span>Descubre los eventos que hemos realizado</span>
        <Row gutter={20} justify='space-around'>
          {cards.map((card, index) => {
            return (
              <Col span={6} key={index}>
                <Card title={card.date}>
                  <p>{card.title}</p>
                  <Button shape='round' href={card.link} target={"_blank"}>
                    <i className='bx bx-caret-right-square'></i>
                    <span>VER LA CHARLA</span>
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <Image src={meetupBackground} preview={false} />
    </section>
  );
};

export default Meetup;
