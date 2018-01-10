import React, { PropTypes } from "react";
import { Alert } from "reactstrap";

const LiveInvalidMessage = ({ status }) => {
  if (status) {
    return null;
  }

  return <Alert color="danger">Please enter a valid input!</Alert>;
};

LiveInvalidMessage.propTypes = {
  success: PropTypes.bool
};

export default LiveInvalidMessage;
