import { Col, Row, Image, Card, Form, Input, Checkbox, Button } from "antd";
const { TextArea } = Input;
import nodecoBg from "@/assets/nodeco-bg.png";
import "./Talks.css";

const Talks: React.FC = () => {
  return (
    <section id="talks">
      <div className="talks-container">
        <Row gutter={16} justify="space-between" align="middle">
          <Col span={9}>
            <p>
              Somos una comunidad de tod@s para <strong>TOD@S</strong>,
            </p>
            <p>
              por eso te invitamos a <strong>compartir tu conocimiento.</strong>
            </p>
            <p>Agrega tu charla en este formulario</p>
          </Col>
          <Col span={10}>
            <Card>
              <Form
                labelAlign="left"
                labelWrap
                name="talksForm"
                autoComplete="off"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                size="small"
              >
                <Form.Item
                  label="Nombres y apellidos"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido!",
                    },
                  ]}
                >
                  <Input placeholder="Escribe tu nombre y apellidos" />
                </Form.Item>
                <Form.Item
                  label="Nombre de la charla"
                  name="talk"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido!",
                    },
                  ]}
                >
                  <Input placeholder="Qué tema vas a dar" />
                </Form.Item>
                <Form.Item
                  label="Objetivo del tema"
                  name="themeTarget"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido!",
                    },
                  ]}
                >
                  <TextArea
                    rows={3}
                    placeholder="Cuéntanos de que trata la charla"
                  />
                </Form.Item>
                <Form.Item
                  label="Cuéntanos quién eres"
                  name="selfInfo"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido!",
                    },
                  ]}
                >
                  <TextArea rows={3} placeholder="Cuéntanos un poco de tí" />
                </Form.Item>
                <Form.Item
                  label="Número de contacto"
                  name="numberPhone"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido!",
                    },
                  ]}
                >
                  <Input placeholder="Para contactarte, déjanos tu número de celular" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido!",
                    },
                  ]}
                >
                  <Input placeholder="Escribe tu correo electrónico" />
                </Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ span: 24 }}
                >
                  <Checkbox>
                    Autoriza el tratamiento de datos e información suministrada
                    aquí para promoción y divulgación con fines educativos. La
                    información será tratada bajo los criterios y normatividad
                    legal vigente.
                  </Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button htmlType="submit" shape="round">
                    Enviar
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
      <Image src={nodecoBg} preview={false} height="82vh"></Image>
    </section>
  );
};

export default Talks;
