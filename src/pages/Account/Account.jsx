import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Divider,
} from 'semantic-ui-react';

import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

const Account = (props) => {
  return (
    <React.Fragment>
      <Grid.Column>
        <Segment>
          Test
        </Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>
          Test 2
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          Test 3
        </Segment>
      </Grid.Column>
    </React.Fragment>
  )

}

export default Account;

