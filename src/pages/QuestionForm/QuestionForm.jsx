import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Divider,
  List,
  Step,
  Icon,
} from 'semantic-ui-react';


const StepExampleGroup = () => (
  <Step.Group>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)


const QuestionForm = (props) => {
  return (
    <React.Fragment>
      <Grid.Column>
        <Segment>
          Test 3
        </Segment>
      </Grid.Column>
    </React.Fragment>
  )

}

export default QuestionForm;

