import { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import falafel from "./movies";
function App() {
  const [watchList, setWatchList] = useState(
    falafel.map((cv) => ({ ...cv, status: false }))
  );
  const switchFn = (id) => {
    setWatchList(
      watchList.map((shawerma) =>
        shawerma.id === id
          ? { ...shawerma, status: !shawerma.status }
          : shawerma
      )
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Watch List</h1>
          {watchList
            .filter((cv) => cv.status === false)
            .map((cv) => (
              <Row style={{ marginBottom: "5px" }}>
                <Col>{cv.name}</Col>
                <Col>
                  <Button onClick={() => switchFn(cv.id)}>Watched</Button>
                </Col>
              </Row>
            ))}
        </Col>

        <Col>
          <h1>Watched</h1>
          {watchList
            .filter((cv) => cv.status === true)
            .map((cv) => (
              <Row style={{ marginBottom: "5px" }}>
                <Col>{cv.name}</Col>
                <Col>
                  <Button onClick={() => switchFn(cv.id)}>Unwatch</Button>
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
