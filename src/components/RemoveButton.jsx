import React from 'react';
import PropTypes from 'prop-types';

function RemoveButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="tinyButton">
      Remove
    </button>
  );
}

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
