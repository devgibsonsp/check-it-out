import React, { useState, useEffect } from 'react';
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
    Loader,
 } from 'semantic-ui-react'
 import axios from 'axios';

 const status = {
  SHOW_FORM: 0,
  LOADING_NEW: 1,
  SUCCESS_NEW: 2,
 };

const RegisterUser = (props) => {

  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    terms: false,
  });

  const [statusCode,setStatusCode] = useState(status.SHOW_FORM);

  const handleChange = (e, { name, value }) => {
    console.log("value",value);
    setFormData({ ...formData, [name]:value });
  }

  const handleCheckBox = () => {
    setFormData({...formData,terms:formData.terms ? false : true});
  }

  const renderNewAccountLoading = () => {
    return(
      <>
        <Loader active inline='centered' size='massive'>
          <Header as='h2' color='blue' textAlign='center'>
          Setting up your new account...
          </Header>
        </Loader>
      </>
    )
  }

  const renderSuccess = () => (
    <>
      <Header as='h2' color='blue' textAlign='center'>
          Success!     
      </Header>
      <Button color='blue' size='massive' onClick={()=>props.history.push('/')}>
        Return to Login
      </Button>
    </>
  )

  const renderForm = () => {
    return (
      <>
        <Header as='h2' color='blue' textAlign='center'>
          Register New Account
        </Header>
        <Segment>
          <Icon name='google' />
          Sign up with Google
        </Segment>
        <Form onSubmit={()=>registerUser()}>
        <Segment>
          <Form.Group widths='equal'>
          <Form.Field
            required
            control={Input}
            label='First name'
            name='firstName'
            placeholder='First name'
            onChange={handleChange}
          />
          <Form.Field
            required
            control={Input}
            label='Last name'
            name='lastName'
            placeholder='Last name'
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Field
            required
            control={Input}
            label='Desired User Name'
            name='userName'
            placeholder='User Name'
            onChange={handleChange}
          />
          <Form.Field
            required
            control={Input}
            label='E-mail'
            name='email'
            placeholder='E-mail'
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Field
            required
            control={Input}
            label='Password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <Form.Field
          control={TextArea}
          label='How did you hear about us?'
          placeholder='Tell us more...'
          />
          <Form.Field
          control={Checkbox}
          name='terms'
          checked={formData.terms}
          onClick={handleCheckBox}
          label='I agree to the Terms and Conditions'
          />
          <Form.Field color={`blue`} control={Button} disabled={!formData.terms}>Submit</Form.Field>
        </Segment>
        </Form> 
      </>
    )
  }

  async function registerUser() {
    try {
      setStatusCode(status.LOADING_NEW);
      axios.post('/api/users', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        userName: formData.userName,
        password: formData.password,
      })
      .then(function (response) {
        console.log(response);
        setStatusCode(status.SUCCESS_NEW);
      })
      .catch(function (error) {
        console.log(error);
      });
      const response = await axios.post('/api/users');
      console.log("API response",response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log('formData:',formData);
  }, [formData]); // Only re-run the effect if count changes

  console.log('props', props);
  return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'> 
        <Grid.Column style={{ maxWidth: 450 }}>
          {statusCode === status.SHOW_FORM ? 
          <>
            {renderForm()}
          </>:
          statusCode === status.LOADING_NEW ?
            renderNewAccountLoading() : 
            renderSuccess()}
        </Grid.Column>
      </Grid> 
    )
}

export default RegisterUser;
