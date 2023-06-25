import React from 'react';
import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';
import '../styles/Book.css';
import circle from '../images/progress.svg';

function Book({
  itemId, title, category, author, onRemove,
}) {
  const handleRemove = () => {
    onRemove(itemId);
  };

  return (
    <li className="bookItem">
      <div className="section1">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div>
          <button type="button" className="tinyButton">Comments</button>
          <span>|</span>
          <RemoveButton onClick={handleRemove} />
          <span>|</span>
          <button type="button" className="tinyButton">Edit</button>
        </div>
      </div>
      <div>
        <img src={circle} alt="progress" className="progress-image" />
        <span className="percent-Complete">64%</span>
      </div>

    </li>
  );
}

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
