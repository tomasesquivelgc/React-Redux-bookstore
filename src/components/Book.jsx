import React from 'react';
import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';
import circle from '../images/progress.svg';

function Book({
  itemId, title, category, author, onRemove,
}) {
  const handleRemove = () => {
    onRemove(itemId);
  };

  return (
    <li className="bookItem backgroundWhite borderWhite">
      <div className="section1">
        <p className="category blackTex montsFont">{category}</p>
        <h2 className="title blackText roboFont">{title}</h2>
        <p className="author blueText roboFont">{author}</p>
        <div>
          <button type="button" className="tinyButton blueText roboFont">Comments</button>
          <span>|</span>
          <RemoveButton onClick={handleRemove} />
          <span>|</span>
          <button type="button" className="tinyButton blueText roboFont">Edit</button>
        </div>
      </div>
      <div className="section2">
        <img src={circle} alt="progress" className="progress-image" />
        <div>
          <span className="percent-Complete blackText montsFont">64%</span>
          <p className="completed blackText montsFont">Completed</p>
        </div>
        <div className="big-division" />
      </div>
      <div>
        <p className="current-Chapter-Text blackText roboFont">CURRENT CHAPTER</p>
        <p className="current-Chapter-number blackText roboFont">CHAPTER 17</p>
        <button type="button" className="update-button blueButton">UPDATE PROGRESS</button>
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
