import { Button, Card, Col, Row } from "antd";
import { CardOption } from "@/types/GenericTypes";
import { YoutubeOutlined } from "@ant-design/icons";
import styles from  "./Meetup.module.css";

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
    <section id='meetup' className={styles.Meetup}>
      <div className={styles.cardContainer}>
        <span className={styles.title}>Meetups</span>
        <span className={styles.description}>Descubre los eventos que hemos realizado</span>
        <Row gutter={20} justify='space-around'>
          {cards.map((card, index) => {
            return (
              <Col span={6} key={index}>
                <Card 
                  className={styles.event__card}
                  title={card.date}
                  headStyle={{
                    color: 'var(--secondary-color)', 
                    fontSize: '0.7rem',
                    textAlign: 'center'
                  }}
                  bodyStyle={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <p className={styles.card___title}>{card.title}</p>
                  <Button 
                    shape='round' 
                    href={card.link} 
                    target={"_blank"}
                    size='large'
                    className={styles.card___btn}
                    icon={<YoutubeOutlined />}
                  >
                    
                    <span>VER LA CHARLA</span>
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Meetup;
