import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { selectBooks } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector(selectBooks);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </ul>
  );
}

export default BookList;
