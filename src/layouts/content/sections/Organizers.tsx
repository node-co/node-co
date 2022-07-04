import { useState } from "react";
import { Avatar, Button, Card, Col, Row } from "antd";
import camilomontoyau from "@/assets/camilomontoyau.png";
import rubenrestrepo from "@/assets/rubenrestrepo.png";
import dhsustainer from "@/assets/dhsustainer.png";
import calypsobronte from "@/assets/calypsobronte.png";
import "./Organizers.css";
import { OrganizerType } from "@/types/GenericTypes";

const Organizers: React.FC = () => {
  const organizersList: OrganizerType[] = [
    {
      id: 1,
      avatar: camilomontoyau,
      name: "CAMILO MONTOYA",
      profesion: `Consultor Desarrollo de Software / Profesor / HablemosJS / javascript, React , NodeJS Python Fundador de la comunidad NodeCo`,
      social: "camilomontoyau",
      contact: "https://www.linkedin.com/in/camilomontoyau/",
    },
    {
      id: 2,
      avatar: rubenrestrepo,
      name: "RUBÉN RESTREPO",
      profesion: `Desarrollador de software en Auth0 organizador NodeCo y ISM_Medellin`,
      social: "rubenrestrepo",
      contact: "https://www.linkedin.com/in/rubenrestrepo/",
    },
    {
      id: 3,
      avatar: dhsustainer,
      name: "DANIEL HERRERA",
      profesion: `Desarrollador Web Organizador NodeCo`,
      social: "dhsustainer",
      contact: "https://www.linkedin.com/in/dhsustainer/",
    },
    {
      id: 4,
      avatar: calypsobronte,
      name: "LINA MARÍA MONTAÑO",
      profesion: `Backend Developer JS and Python Mentora en CoderiseorgOrganizadora de NodeCO Podcast CaminoDev`,
      social: "calypsobronte",
      contact: "https://www.linkedin.com/in/calypsobronte/",
    },
  ];

  const [list, setList] = useState([
    ...organizersList.filter((item) => item.id < 4),
  ]);

  const handlerSlider = (position: string) => {
    const cacheFirstId = list[0]?.id as number;
    const cacheLastId = organizersList.at(-1)?.id as number;
    let tempList: OrganizerType[] = [];
    if (position === "right") {
      tempList = organizersList.filter(
        (item) => item.id > cacheFirstId && item.id <= cacheLastId
      );
      if (tempList.length < 3) return;
      setList(tempList);
    } else {
      tempList = organizersList.filter((item) => item.id < cacheLastId);
      if (tempList.length < 3) return;
      setList(tempList);
    }
  };

  return (
    <section id="organizers">
      <span>ORGANIZADORES</span>
      <span>Conoce quiénes lideran la comunidad</span>
      <Row gutter={16} justify="center">
        <Col span={1}>
          <Button shape="circle" onClick={() => handlerSlider("left")}>
            <i className="bx bx-chevron-left"></i>
          </Button>
        </Col>
        <Col span={14}>
          <Row gutter={16}>
            {list.map((organizer) => {
              return (
                <Col span={8} key={organizer.id}>
                  <Card>
                    <Avatar src={organizer.avatar} size={110} />
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
          <Button shape="circle" onClick={() => handlerSlider("right")}>
            <i className="bx bx-chevron-right"></i>
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Organizers;
