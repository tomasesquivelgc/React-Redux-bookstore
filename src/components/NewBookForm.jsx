import React, { useState } from 'react';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form>
      <h3>Add a New Book</h3>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
