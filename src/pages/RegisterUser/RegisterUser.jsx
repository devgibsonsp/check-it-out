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
 } from 'semantic-ui-react'
 import axios from 'axios';

const RegisterUser = (props) => {

  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
  });
  const [requiredFields, setRequiredFields] = useState(true);
  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]:value });
  }

  async function registerUser() {
    try {

      axios.post('/api/contacts', {
        name: formData.firstName,
        email: formData.email,
        phone: formData.userName,
        gender: formData.lastName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


      const response = await axios.post('/api/contacts');
      console.log("API response",response);
    } catch (error) {
      console.error(error);
    }
  }

  function requiredFieldListener() {
    let emptyField = false;
    Object.keys(formData).forEach(field => {
      if(formData[field] === '' && !emptyField) {
        emptyField = true;
      }
    });

    if(!emptyField) {
      console.log('no empty fields');
      setRequiredFields(true);
    } else {
      console.log('empty fields');
      setRequiredFields(false);
    }
  }

  useEffect(() => {
    console.log('formData:',formData);
    //requiredFieldListener();
  }, [formData]); // Only re-run the effect if count changes

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
          control={TextArea}
          label='How did you hear about us?'
          placeholder='Tell us more...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field color={`blue`} control={Button} disabled={!requiredFields}>Submit</Form.Field>
        </Segment>
      </Form>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterUser;
