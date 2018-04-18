import React from 'react';
import { Card, Grid, Divider } from 'semantic-ui-react'

const Features = ({ tiles }) => (
  <Grid>
    <Grid.Column
      largeScreen={4}
      verticalAlign={'middle'}
      divided={true}
      >
      <Grid.Row>
        This is That
      </Grid.Row>
      <Divider fitted />
      <Grid.Row>
        That is This
      </Grid.Row>
      <Divider fitted />
      <Grid.Row>
        Thing 1
      </Grid.Row>
      <Divider fitted />
      <Grid.Row>
        Thing 2
      </Grid.Row>
    </Grid.Column>
    <Grid.Column
      largeScreen={10}
      >
      <Card.Group
        centered={true}
        itemsPerRow={2}
        >
        {tiles.map((item, i)=>{
          console.log(item)
          return(
            <Card key={i}>
              <Card.Content>
                <Card.Header>
                  {item.data.name}
                </Card.Header>
                <Card.Meta>
                  {item.data.tags}
                </Card.Meta>
                <Card.Description>
                  {item.data.description}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </Grid.Column>
  </Grid>
);

export default Features;
