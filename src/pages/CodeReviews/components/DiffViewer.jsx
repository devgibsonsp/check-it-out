import React, { useState } from 'react';
import { 
  Grid, 
  Tab, 
  Button, 
  Header, 
  Segment,
} from 'semantic-ui-react';


const panes = [
    { menuItem: 'All', render: () => <Segment raised>Tab 0 Content</Segment> },
    { menuItem: 'Steve', render: () => <Segment raised>Tab 1 Content</Segment> },
    { menuItem: 'Joe', render: () => <Segment raised>Tab 2 Content</Segment> },
    { menuItem: 'Elly', render: () => <Segment raised>Tab 3 Content</Segment> },
  ]

const DiffViewer = (props) => {

  return (
    <Tab menu={{ attached: false }} panes={panes} />
  )
}

export default DiffViewer;

