import { observer } from "mobx-react";
import { Container, Button, Col, Row } from "react-bootstrap";
import movieStore from "./movieStore";
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Watch List</h1>
          {movieStore.movies
            .filter((cv) => cv.status === false)
            .map((cv) => (
              <Row style={{ marginBottom: "5px" }}>
                <Col>{cv.name}</Col>
                <Col>
                  <Button onClick={() => movieStore.switchFn(cv.id)}>
                    Watched
                  </Button>
                </Col>
              </Row>
            ))}
        </Col>

        <Col>
          <h1>Watched</h1>
          {movieStore.movies
            .filter((cv) => cv.status === true)
            .map((cv) => (
              <Row style={{ marginBottom: "5px" }}>
                <Col>{cv.name}</Col>
                <Col>
                  <Button onClick={() => movieStore.switchFn(cv.id)}>
                    Unwatch
                  </Button>
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default observer(App);
