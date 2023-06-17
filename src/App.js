import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function Categories() {
  return (
    <div>
      <h2>Categories</h2>
      <p>This is the categories page.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
