import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Login = (props) => {
  console.log('props', props);
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Log-in to your account
      </Header>
        <Form size='large'>
          <Segment>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='blue' fluid size='large' onClick={()=>props.history.push('/main')}>
              Login
          </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to={`/register/`}>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Login;
