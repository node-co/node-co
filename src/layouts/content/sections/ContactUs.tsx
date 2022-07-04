import { Col, Row, Image } from "antd";
import slackButton from "@/assets/slack-button.svg";
import meetupButton from "@/assets/meetup-button.svg";
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  const eventList = [
    "Eventos",
    "Charlas",
    "Ofertas Laborales",
    "Noticias Tech",
    "Hablar Con Otros Desarrolladores",
    "Networking",
  ];
  return (
    <section id="contact-us">
      <div className="contac-container">
        <Row gutter={16} justify="space-between">
          <Col span={10}>
            <h2>CONTACTÉMONOS</h2>
            <p>
              Únete a nuestros canales y conoce todo lo que sucede en la
              comunidad.
            </p>
          </Col>
          <Col span={10}>
            <ul>
              {eventList.map((item) => {
                return (
                  <li>
                    <i className="bx bx-check"></i>
                    {item}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
        <Row gutter={16} justify="center">
          <Col span={4} pull={1}>
            <Image src={slackButton}></Image>
          </Col>
          <Col span={4} pull={1}>
            <Image src={meetupButton}></Image>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactUs;
