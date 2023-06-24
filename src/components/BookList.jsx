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

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <ul>
      {Object.values(books).map((bookGroup) => bookGroup.map((book) => (
        <Book
          key={book.itemId}
          itemId={book.itemId}
          title={book.title}
          author={book.author}
          category={book.category}
          onRemove={handleRemoveBook}
        />
      )))}
    </ul>
  );
}

export default BookList;
