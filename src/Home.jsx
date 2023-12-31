import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './components/BookList';
import BookForm from './components/NewBookForm';
import { selectBooks } from './redux/books/booksSlice';

function Home() {
  const books = useSelector(selectBooks);

  return (
    <div>
      <BookList books={books} />
      <BookForm />
    </div>
  );
}

export default Home;
