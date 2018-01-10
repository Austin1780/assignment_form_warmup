import React, { PropTypes } from "react";
import { FormFeedback } from "reactstrap";

const LiveInvalidMessage = ({ status }) => {
	if (status) {
		null;
	}

	return <Alert color="danger">Please enter a valid input!</Alert>;
};

SuccessMessage.propTypes = {
	success: PropTypes.bool
};

export default LiveInvalidMessage;
