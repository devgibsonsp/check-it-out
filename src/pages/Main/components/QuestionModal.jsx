import React from 'react';
import { 
  Button, 
  Modal,
  Form,
  Input,
  TextArea,
  Header,
  Divider,
  Checkbox,
  Popup,
  Icon,
} from 'semantic-ui-react';


const QuestionModal = (props) => {

  return (
    <Modal open={true} dimmer={true} trigger={<Button>Show Modal</Button>}>
      <Modal.Content>
        <Header>New Question</Header>
        <Divider />
        <Form>
          <Modal.Header>Give your question a description title</Modal.Header>
          <Popup 
          content='Make sure your title adequately describes the problem' 
          position='left center'
          trigger={
            <Form.Field
              id='question-title'
              control={Input}
              placeholder='Question Title'
            />
          } />
          <Divider />
          <Modal.Header>Describe the problem that you are facing</Modal.Header>
          <Popup 
          content='Be as descriptive as possible to make assistance easier' 
          position='left center'
          trigger={
            <Form.Field
              id='question-description'
              control={TextArea}
              placeholder='Question Description'
            />
          } />
          <Divider />
          <Modal.Header>Add a snippet of the code</Modal.Header>
          <Popup 
          content='Provide a code snippet to help with support (Experimental)' 
          position='left center'
          trigger={
            <Form.Field
              id='question-code-snippet'
              control={TextArea}
              placeholder='Code Snippet'
            />
          } />
          <Button.Group floated='right'>
          <Button color='blue' type='submit'>Submit</Button>
          <Button basic color='red' icon>
            <Icon name='cancel' />
          </Button>
          </Button.Group>
          <Popup 
          content='Enable chat support to allow others to live chat with you about your question (Experimental)' 
          position='left center'
          trigger={
            <Checkbox label='enable chat support' toggle />
          } />
          
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default QuestionModal;