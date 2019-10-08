import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Menu,
  Input,
  Dropdown,

  Button, Header, Image, Modal

} from 'semantic-ui-react';
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import User from '../User/User';
import CodeReviews from '../CodeReviews/CodeReviews';

// const ModalModalExample = () => (
//   <Modal trigger={<Button>Show Modal</Button>}>
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>
//           We've found the following gravatar image associated with your e-mail
//           address.
//         </p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )



const Main = (props) => {
  const [activeItem, setActiveItem] = useState({})
  const [test, setTest] = useState({});
  const handleItemClick = (e, { name }) => setActiveItem({ tab: name });

  console.log(activeItem);

  async function getTest() {
    try {
      const response = await axios.get('/api/users');
      console.log("API response",response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTest();
    console.log('test was called successfully');
  }, [test]); // Only re-run the effect if count changes

  /**
   * Navigation Header
   */
  const navHeader = () => (
    <Grid.Column>
      <Menu>
        <Menu.Item
          header
          name='checkItOut'
          onClick={handleItemClick}
        />
        <Menu.Item
          name='myQuestions'
          active={activeItem.tab === 'myQuestions'}
          onClick={handleItemClick}
          icon='orange exclamation circle'
        />
        <Menu.Item
          name='popularQuestions'
          active={activeItem.tab === 'popularQuestions'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Dropdown icon='setting' item text='Settings'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>props.history.push('/users')} icon='user' text='Account' />
              <Dropdown.Item onClick={()=>props.history.push('/')} icon='sign out' text='Sign Out' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Grid.Column >
  )
  // ********

  // I need to change this so that main is just the layout

  return (
    <Grid stackable columns='equal'>
      <Grid.Row>
        {navHeader()}
      </Grid.Row>
      <Grid.Row>
        <Route path="/main" component={CodeReviews} />
        <Route path="/users" component={CodeReviews} />
      </Grid.Row>
    </Grid>

  )

}

export default Main;

//