import { Card, Grid } from "semantic-ui-react";

function StarShipCard({ data }) {
  return (
    <div>
      <Grid columns={3}>
        {data.map((ships, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{ships.name}</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}

export default StarShipCard;
