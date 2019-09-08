import React, { useState } from 'react';
import { 
  Header, 
  Segment,
  Divider,
  Input,
  Image,
  Comment,
} from 'semantic-ui-react';


const fakeChat = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src={require('../../../static/images/generic-avatar.jpg')} />
      <Comment.Content>
        <Comment.Author>Joe</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            I cannot believe you have done this. This is not your best work.
          </p>
          <p>
            Please consider that you just aren't cut out for this and give up.
            Give up now you fool.
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src={require('../../../static/images/generic-avatar.jpg')} />
      <Comment.Content>
        <Comment.Author>Steve</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>You aren't getting away with this!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

const CommentViewer = (props) => {
  return (
    <React.Fragment>
        <Segment.Group raised>
            <Segment>Comments</Segment>
            <Segment>
              {fakeChat()}
            </Segment>
            <Segment inverted color='blue'>
            <Image src={require('../../../static/images/generic-avatar.jpg')} avatar />
            <Input
                action={{
                    color: 'green',
                    icon: 'send',
                  }}
            />
            </Segment>
        </Segment.Group>
    </React.Fragment>
  )
}

export default CommentViewer;

