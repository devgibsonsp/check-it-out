import React, { useState } from 'react';
import { 
  Grid, 
  Tab, 
  Button, 
  Header, 
  Segment,
} from 'semantic-ui-react';

import ReactDiffViewer from 'react-diff-viewer'
const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')
 
if(a > 10) {
  console.log('bar')
}
 
console.log('done')
`
const newCode = `
const a = 10
const boo = 10
 
if(a === 10) {
  console.log('bar')
}`

const test = () => (
  <ReactDiffViewer
  oldValue={oldCode}
  newValue={newCode}
  splitView={true}
/>
)

const panes = [
    { menuItem: 'All', render: () => <Segment raised>{test()}</Segment> },
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

