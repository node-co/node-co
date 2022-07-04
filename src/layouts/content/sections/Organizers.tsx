import { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import "./Organizers.css";

const Organizers: React.FC = () => {
  const organizersList = [
    {
      id: 1,
      avatar: "",
      name: "CAMILO MONTOYA",
      profesion: `Consultor Desarrollo de Software / Profesor / HablemosJS / javascript, React , NodeJS Python Fundador de la comunidad NodeCo`,
      social: "camilomontoyau",
      contact: "https://www.linkedin.com/in/camilomontoyau/",
    },
    {
      id: 2,
      avatar: "",
      name: "RUBÉN RESTREPO",
      profesion: `Desarrollador de software en Auth0 organizador NodeCo y ISM_Medellin`,
      social: "rubenrestrepo",
      contact: "https://www.linkedin.com/in/rubenrestrepo/",
    },
    {
      id: 3,
      avatar: "",
      name: "DANIEL HERRERA",
      profesion: `Desarrollador Web Organizador NodeCo`,
      social: "dhsustainer",
      contact: "",
    },
    {
      id: 4,
      avatar: "",
      name: "LINA MARÍA MONTAÑO",
      profesion: `Backend Developer JS and Python Mentora en CoderiseorgOrganizadora de NodeCO Podcast CaminoDev`,
      social: "calypsobronte",
      contact: "https://www.linkedin.com/in/calypsobronte/",
    },
  ];

  let [list, setList] = useState([
    ...organizersList.filter((item) => item.id < 4),
  ]);

  return (
    <section id="organizers">
      <span>ORGANIZADORES</span>
      <span>Conoce quiénes lideran la comunidad</span>
      <Row gutter={16} justify="center">
        <Col span={1}>
          <Button shape="circle">
            <i className="bx bx-chevron-left"></i>
          </Button>
        </Col>
        <Col span={14}>
          <Row gutter={16}>
            {list.map((organizer) => {
              return (
                <Col span={8} key={organizer.id}>
                  <Card>
                    <h3>{organizer.name}</h3>
                    <p>{organizer.profesion}</p>
                    <p>
                      <i className="bx bxl-linkedin"></i>
                      {organizer.social}
                    </p>
                    <Button shape="round">
                      <i className="bx bx-envelope"></i>
                      CONTÁCTALO
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col span={1}>
          <Button shape="circle">
            <i className="bx bx-chevron-right"></i>
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Organizers;
