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
    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
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
      <Grid.Column width={12}>
        <Segment>
          {StepExampleGroup()}
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

export default QuestionForm;

