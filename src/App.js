// // // App.js

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import { CardDesign } from "./components/Cards";

// function App() {
//   return (
//     <div className="App">
//       {/* Navbar */}
//       {/* <Navbar bg="warning" expand="lg">
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>

//         <Nav style={{ display: "flex", justifyContent: "center" }}>
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
//         </Nav>
//         {/* </div> */}
//       {/* </Navbar> */}

//       <Navbar bg="warning" expand="lg">
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="mx-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
//         </Nav>
//       </Navbar>

//       {/* Main Content */}
//       <Container>
//         <h1>Welcome to My React CheckPoint</h1>
//         <br />
//         <p className="text-secondary">A Simple Form</p>
//         <br />
//         {/* Form */}
//         <Form>
//           <Form.Group controlId="exampleForm.ControlInput1">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" />
//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Your Message</Form.Label>
//             <Form.Control as="textarea" rows={3} />
//           </Form.Group>
//           <Button variant="secondary" type="submit" className="mt-2">
//             Submit
//           </Button>
//         </Form>

//         <br />
//         <br />

//         <CardDesign />

//         {/* Cards */}
//         {/* <Row>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src="./images/one.jpg" />
//               <Card.Body className="bg-warning">
//                 <Card.Title>Context one</Card.Title>
//                 <Card.Text>
//                   WBI’s direct outreach involves two different newsletters
//                   produced on a monthly schedule. WellBeing News is more
//                   technical and contains reports, trends, analyses, and
//                   commentary.
//                 </Card.Text>
//                 <Button variant="primary">See more...</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src="./images/twoo.jpg" />
//               <Card.Body className="bg-warning">
//                 <Card.Title>Context Two</Card.Title>
//                 <Card.Text>
//                   This demand has been fueled by new technologies that enable
//                   individuals across the globe to access a huge amount of
//                   information very easily and quickly from their computers and
//                   smart phones Some quick example text to build on the card
//                   title and make up the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">See more...</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src="./images/three.jpg" />
//               <Card.Body className="bg-warning">
//                 <Card.Title>Context Three</Card.Title>
//                 <Card.Text>
//                   he development of these contacts and connections are crucial
//                   in helping to influence the agendas which affect the
//                   well-being of people, animals, and the environment.
//                 </Card.Text>
//                 <Button variant="primary">See more...</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row> */}
//       </Container>
//     </div>
//   );
// }

// export default App;
// // App.js

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { CardDesign } from "./components/Player";
import cardData from "./data/playerlist.json";

// First react Work
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* <Navbar bg="warning" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
        </Nav>
      </Navbar> */}
      {/* Main Content */}
      <Container>
        <div class="p-3 mb-2 bg-warning text-dark">
          <h1>Player card</h1>

          <br />

          <br />
          {/* Form */}
          {/* <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="secondary" type="submit" className="mt-2">
          Submit
          </Button>
        </Form> */}
          <PlayerList />
        </div>
      </Container>
    </div>
  );
}

const PlayerList = () => {
  return (
    <Row className="g-5">
      {cardData.homecards.map((card) => {
        return (
          <Col md={3} key={card.id}>
            <CardDesign {...card} />
          </Col>
        );
      })}
      <p>My Name is Faith</p>
    </Row>
  );
};

export default App;
