//again, this will probably be a subcomponent as we are looking to have a searchbar stick by default

import React from 'react';
import {
  Segment,
  Header,
  Label,
} from 'semantic-ui-react';


const QuestionList = () => {
  return (
    <Segment.Group raised>
    <Segment>
      <Label color='orange' ribbon>
        3 New Responses!
      </Label>
      <Label basic>
        0 votes
      </Label>
      <Label basic>
        3 Views
      </Label>
      <Label basic>
        3 Answers
      </Label>
      <Header as='h2'>Configure Webpack 4 with aliases, Babel 7 to build React components library</Header>
      <Label color='blue' as='a'>
        Webpack
      </Label>
      <Label color='blue' as='a'>
        Alias
      </Label>
      <Label color='blue' as='a'>
        Babel
      </Label>
      <Label color='blue' as='a'>
        React
      </Label>
    </Segment>
    <Segment>
      <Label basic>
        3 votes
      </Label>
      <Label basic>
        17 Views
      </Label>
      <Label basic>
        5 Answers
      </Label>
      <Header as='h2'>How to conditionally add attributes to React components?</Header>
      <Label color='blue' as='a'>
        React
      </Label>
      <Label color='blue' as='a'>
        Conditional Render
      </Label>
      <Label color='blue' as='a'>
        Javascript
      </Label>
    </Segment>
      <Segment>
      <Label basic>
      4 votes
      </Label>
      <Label basic>
        6 Views
      </Label>
      <Label basic>
        2 Answers
      </Label>
      <Header as='h2'>What is the difference between using constructor vs getInitialState in React / React Native?</Header>
      <Label color='blue' as='a'>
        Constructor
      </Label>
      <Label color='blue' as='a'>
        React
      </Label>
      <Label color='blue' as='a'>
        getInitialState
      </Label>
      <Label color='blue' as='a'>
        React Native
      </Label>
    </Segment>
  </Segment.Group>
  )
}

export default QuestionList;