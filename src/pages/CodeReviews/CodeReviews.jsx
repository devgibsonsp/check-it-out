import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import DiffViewer from 'pages/CodeReviews/components/DiffViewer';
import QuestionViewer from 'pages/CodeReviews/components/QuestionViewer';
import CommentViewer from 'pages/CodeReviews/components/CommentViewer';

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

