import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import QuestionModal from 'pages/Main/components/QuestionModal';

const QuestionSubmission = (props) => {

  const modalToggle = () => {
    setModalEnabled(false);
  }

  return (
    <QuestionModal
      enabled={props.modalEnabled}
      toggle={modalToggle}
    />
  )
}

QuestionSubmission.propTypes = {
  enabled: PropTypes.bool.isRequired,
}

export default QuestionSubmission;