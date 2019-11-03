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
import Account from 'pages/Account/Account';
import CodeReviews from 'pages/CodeReviews/CodeReviews';
import QuestionForm from'pages/QuestionForm/QuestionForm';
import QuestionModal from 'pages/Main/components/QuestionModal';

const Main = (props) => {
  const [activeItem, setActiveItem] = useState({})
  const [test, setTest] = useState({});
  const handleItemClick = (e, { name }) => setActiveItem({ tab: name });

  console.log(activeItem);

  // async function getTest() {
  //   try {
  //     const response = await axios.get('/api/users');
  //     console.log("API response",response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    console.log('test was called successfully');
  }, []); // Only re-run the effect if count changes

 //******************** */
  // This should be moved into a subcomponent of main
  /**
   * Navigation Header
   */
  const navHeader = () => (
    <Grid.Column>
      <Menu stackable>
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
       <Menu.Item
          name='demoPathToCodeReview'
          active={activeItem.tab === 'demoPathToCodeReview'}
          onClick={()=>props.history.push('/main/codeReviews')}
        />
        <Menu.Menu position='right'>
        <Menu.Item>
          <Button color='blue' onClick={()=>props.history.push('/main/askQuestion')}>Ask Question</Button>
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Dropdown icon='setting' item text='Settings'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>props.history.push('/main/account')} icon='user' text='Account' />
              <Dropdown.Item onClick={()=>null} icon='sliders horizontal' text='Preferences' />
              <Dropdown.Item onClick={()=>props.history.push('/')} icon='sign out' text='Sign Out' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Grid.Column >
  )

  return (
    <Grid stackable columns='equal'>
      <Grid.Row>
        {QuestionModal()}
        {navHeader()}
      </Grid.Row>
      <Grid.Row>
        <Route path="/main/codeReviews" component={CodeReviews} />
        <Route path="/main/account" component={Account} />
        <Route path="/main/askQuestion" component={QuestionForm} />
      </Grid.Row>
    </Grid>
  )
}

export default Main;