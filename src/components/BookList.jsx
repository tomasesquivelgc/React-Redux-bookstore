import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { selectBooks, fetchBooks, removeBook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = async (itemId) => {
    try {
      dispatch(removeBook(itemId));
    } catch (error) {
      throw new Error('Failed to remove book:', error);
    }
  };

  return (
    <ul>
      {Object.keys(books).map((itemId) => {
        const book = books[itemId][0];
        return (
          <Book
            key={itemId}
            itemId={itemId}
            title={book.title}
            author={book.author}
            category={book.category}
            onRemove={handleRemoveBook}
          />
        );
      })}
    </ul>
  );
}

export default BookList;
