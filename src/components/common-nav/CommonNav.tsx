import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Image } from "antd";
import { CommonNav } from "@/types/HeaderTypes";

const CommonNavComponent: React.FC<CommonNav> = ({
  logo,
  options,
}: CommonNav) => {
  return (
    <Row>
      <Col span={2} offset={2}>
        <Image width={100} preview={false} src={logo}></Image>
      </Col>
      <Col span={17}>
        <Row justify='end'>
          {options.map((option, index) => (
            <Col
              span={
                option.isSpan === "YES"
                  ? index === 0 || index === 3
                    ? 4
                    : 3
                  : 2
              }
              key={index}
            >
              <a
                href={option.link}
                target={option.isSpan === "YES" ? "_self" : "_blank"}
              >
                {option.isSpan === "YES" ? (
                  <span>{option.title}</span>
                ) : (
                  <i className={option.title}></i>
                )}
              </a>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

CommonNavComponent.propTypes = {
  logo: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default CommonNavComponent;
