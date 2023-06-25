import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import AddButton from './AddButton';
import '../styles/NewBookForm.css';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'action',
    };

    dispatch(addBook(book));

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleAddBook} className="form">
        <h2>Add a New Book</h2>
        <label htmlFor="title">
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" className="book-title" />
        </label>
        <label htmlFor="author">
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="book-author" />
        </label>
        <AddButton onClick={handleAddBook} />
      </form>
    </div>
  );
}

export default BookForm;
