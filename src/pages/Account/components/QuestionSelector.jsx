import React from 'react';
import {
  Segment,
  Header,
  Tab,
  Input,
} from 'semantic-ui-react';
import QuestionList from 'pages/Account/components/QuestionList';
// This needs to go one level deeper and show Asked/Answered****



const panes = [
  { menuItem: 'My Questions', render: () => <QuestionList/> },
  { menuItem: 'My Answers', render: () => <Segment raised>Tab 1 Content</Segment> },
  { menuItem: 'My Bookmarks', render: () => <Segment raised>Tab 1 Content</Segment> },
]



const QuestionSelector = () => (
    <Tab menu={{ attached: false }} panes={panes} />
)

export default QuestionSelector;