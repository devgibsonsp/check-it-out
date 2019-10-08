import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Divider,
  List,
} from 'semantic-ui-react';
import UserInformation from 'pages/Account/components/UserInformation';
import QuestionSelector from 'pages/Account/components/QuestionSelector';

const Account = (props) => {
  return (
    <React.Fragment>
      <Grid.Column>
        <UserInformation/>
      </Grid.Column>
      <Grid.Column width={8}>
        <QuestionSelector/>
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

