import React, { useState } from 'react';
import { 
  Header, 
  Segment,
  Divider,
} from 'semantic-ui-react';

const fakeData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus dapibus rhoncus. Suspendisse tempus malesuada augue, vestibulum pharetra nisl cursus vitae. Curabitur eleifend, massa at porttitor tristique, magna nibh tristique nunc, nec varius felis ligula vel lacus. Phasellus odio arcu, lobortis quis diam quis, maximus vestibulum mauris. Ut porta finibus volutpat. Suspendisse potenti. Nam consequat ornare massa ac vestibulum. Nunc porttitor mi sed ipsum porttitor convallis. Suspendisse aliquam eros ac augue tincidunt, sed hendrerit urna blandit. Duis sit amet ligula sit amet enim dictum maximus. Suspendisse ante urna, lobortis ac vestibulum non, maximus at arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eu erat posuere, aliquam nisi id, lacinia odio.';
const QuestionViewer = (props) => {

  return (
    <Segment.Group raised>
      <Segment>
        <Header as='h1'>What is the deal with this?</Header>
      </Segment>
      <Segment> 
        {fakeData}
      </Segment>
    </Segment.Group>
  )
}

export default QuestionViewer;

