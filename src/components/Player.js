import { Button, Card, CardGroup } from "react-bootstrap";

export const CardDesign = (props) => {
  const { name, team, nationality, jerseyNumber, age, imageUrl } = props;
  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {team}
            <br />
            Nationality: {nationality}
            <br />
            Jersey Number: {jerseyNumber}
            <br />
            Age: {age}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

{
  /* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{Product}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text>{Price}</Card.Text>
          <Button variant="primary">{link}</Button>
        </Card.Body> */
}
