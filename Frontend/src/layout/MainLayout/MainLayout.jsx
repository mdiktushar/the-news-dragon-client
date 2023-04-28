import React from "react";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../LeftNav/LeftNav";
import RightNav from "../RightNev/RightNav";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <h2 className="text-center">Main Content Coming...</h2>
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default MainLayout;
