import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/NewBookForm';

function Home() {
  const [books] = React.useState([
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completionPercentage: '64',
      id: 1,
      currentChapter: 'chapter 17',
    },
    {
      title: 'Dune',
      author: 'Franj Herbert',
      category: 'Science fiction',
      completionPercentage: '8',
      id: 2,
      currentChapter: 'chapter 3: "A Lesson Learned"',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      completionPercentage: '0',
      id: 3,
      currentChapter: 'Introduction',
    },
  ]);

  return (
    <div>
      <h2>My book list</h2>
      <BookList books={books} />
      <BookForm />
    </div>
  );
}

export default Home;
