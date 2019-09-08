import React from 'react'
import { 
    Button, 
    Form, 
    Grid, 
    Header, 
    Segment, 
    Input,
    Icon,
    Checkbox,
    TextArea,
 } from 'semantic-ui-react'

const RegisterUser = (props) => {
  console.log('props', props);
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
            Register New Account
      </Header>
      <Segment>
        <Icon name='google' />
          Sign up with Google
      </Segment>
      <Form>
      <Segment>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Field
            control={Input}
            label='Desired User Name'
            placeholder='User Name'
          />
          <Form.Field
            control={Input}
            label='E-mail'
            placeholder='E-mail'
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='How did you hear about us?'
          placeholder='Tell us more...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field color={`blue`} control={Button}>Submit</Form.Field>
        </Segment>
      </Form>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterUser;
