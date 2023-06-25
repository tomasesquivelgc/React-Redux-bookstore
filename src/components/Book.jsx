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
      <div className="section2">
        <img src={circle} alt="progress" className="progress-image" />
        <div>
          <span className="percent-Complete">64%</span>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="big-division" />
      <div>
        <p className="current-Chapter-Text">CURRENT CHAPTER</p>
        <p className="current-Chapter-number">CHAPTER 17</p>
        <button type="button" className="update-button">UPDATE PROGRESS</button>
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
