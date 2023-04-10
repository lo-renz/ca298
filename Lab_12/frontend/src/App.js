import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/heading';
import MyButton from './components/button';
import Counter from './components/counter';
import CatFacts from './components/catfacts';
import BookList from './components/booklist';
import Book from './components/book';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <HeadingComponent name="Renso" />
            <MyButton />
            <Counter />
            <CatFacts />
            <BookList />
            <Book id={1} />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
}

export default App;
