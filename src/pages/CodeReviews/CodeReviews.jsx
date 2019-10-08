import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import DiffViewer from './components/DiffViewer';
import QuestionViewer from './components/QuestionViewer';
import CommentViewer from './components/CommentViewer';

const CodeReviews = (props) => {
  return (
     <React.Fragment>
        <Grid.Column>
          <QuestionViewer/>
        </Grid.Column>
        <Grid.Column width={8}>
            <DiffViewer/>
        </Grid.Column>
        <Grid.Column>
          <CommentViewer/>
        </Grid.Column>
    </React.Fragment>
  )
}

export default CodeReviews;

