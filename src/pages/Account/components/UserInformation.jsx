import React from 'react';
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react';

const UserInformation = () => (
  <Segment.Group raised>
    <Segment>
      <Header as='h2'>Test User</Header>
    </Segment>
    <Segment> 
      <List>
        <List.Item>Joined October 7, 2019</List.Item>
        <List.Item>Points: 293</List.Item>
        <List.Item>Questions Asked: 44</List.Item>
        <List.Item>Questions Answered: 12</List.Item>
      </List>
    </Segment>
  </Segment.Group>
)

export default UserInformation;