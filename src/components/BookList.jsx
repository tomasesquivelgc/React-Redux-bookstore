import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id} // Assuming each book has a unique id
          title={book.title}
          category={book.category}
          author={book.author}
          completionPercentage={book.completionPercentage}
          currentChapter={book.currentChapter}
        />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      completionPercentage: PropTypes.number.isRequired,
      currentChapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
