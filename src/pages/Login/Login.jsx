import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {

  const [formData,setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e, { name, value }) => {
    console.log("value",formData);
    setFormData({ ...formData, [name]:value });
  }

  async function loginUser() {
    try {
      axios.get(`/api/users/email/${formData.email}`)
      .then(function (response) {
        console.log('response',response);
      })
      .catch(function (error) {
        console.log('error',error);
      });
    } catch (error) {
      console.error('error',error);
    }
  }

  console.log('props', props);
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Log-in to your account
      </Header>
        <Form size='large' onSubmit={()=>loginUser()}>
          <Segment>
            <Form.Input
              required
              fluid icon='user' 
              iconPosition='left' 
              placeholder='E-mail address'
              name='email'
              onChange={handleChange}
            />
            <Form.Input
              required
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              type='password'
              onChange={handleChange}
            />
            <Form.Field color={`blue`} fluid size='large' control={Button}>Submit</Form.Field>
            <Button  onClick={()=>props.history.push('/main/account')}>
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
