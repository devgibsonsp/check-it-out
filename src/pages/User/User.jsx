import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Divider,
} from 'semantic-ui-react';

const User = (props) => {
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

export default User;

