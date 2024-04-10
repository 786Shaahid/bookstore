// import './App.css';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Filter from './components/Filter';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=' bg-slate-700'>
           <Navbar/>
      <Filter/>
      <BookDetails/>
      <BookList/>
      
    </div>
  );
}

export default App;
