import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title, category, author,
}) {
  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>
          Category:
          {category}
        </p>
        <p>
          Author:
          {author}
        </p>
        <button type="button">Delete</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
