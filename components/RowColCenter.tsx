import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const RowColCenter: FC<Props> = ({ children, className = "" }) => {
  return (
    <Row>
      <Col>
        <div className={`d-flex justify-content-center ${className} `}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

export default RowColCenter;
