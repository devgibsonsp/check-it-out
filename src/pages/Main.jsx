import React from 'react';
import { Grid, Tab, Button, Header, Segment,Menu } from 'semantic-ui-react';
import '../styles/main.css';

const Main = (props) => {
  return (

      <Grid stackable>
        <Grid.Row className='main-header'>
          <Grid.Column >
            <Header  as='h1'>Check-It-Out!</Header>
          </Grid.Column >
        </Grid.Row>
      <Grid.Row className='main-header-row'>
        <Grid.Column>
          <Menu pointing secondary>
            <Menu.Item
              name='home'
              //active={activeItem === 'home'}
             // onClick={this.handleItemClick}
            />
            <Menu.Item
              name='messages'
             // active={activeItem === 'messages'}
              //onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              //active={activeItem === 'friends'}
              //onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='logout'
                //active={activeItem === 'logout'}
               // onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>

        </Grid.Column >
      </Grid.Row>
  </Grid>

  )

}

export default Main;