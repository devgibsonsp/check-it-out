import React, { useState } from 'react';
import { 
  Grid, 
  Tab, 
  Button, 
  Header, 
  Segment,
  Menu,
  Input,
} from 'semantic-ui-react';
import CodeReviews from './CodeReviews/CodeReviews';

const Main = (props) => {
  const [activeItem, setActiveItem] = useState({})

  const handleItemClick = (e, { name }) => setActiveItem({ tab: name });

  console.log(activeItem);

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
          <Menu.Item
            icon='setting'
            name='Account'
            active={activeItem.tab === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </Grid.Column >
  )

  return (
    <Grid stackable columns='equal'>
      <Grid.Row>
        {navHeader()}
      </Grid.Row>
      <Grid.Row>
        <CodeReviews/>
      </Grid.Row>
    </Grid>

  )

}

export default Main;

//