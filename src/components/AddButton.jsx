import React from 'react';
import PropTypes from 'prop-types';

function AddButton({ onClick }) {
  return (
    <button type="submit" onClick={onClick} className="add-button blueButton roboFont">
      ADD BOOK
    </button>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
