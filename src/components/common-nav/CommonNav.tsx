import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
      <Col span={20}>
        <Row justify='end'>
          {options.map((option, index) => (
            <Col span={4} key={index}>
              <Link to={option.link}>
                {option.isSpan === "YES" ? (
                  <span>{option.title}</span>
                ) : (
                  <i className={option.title}></i>
                )}
              </Link>
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