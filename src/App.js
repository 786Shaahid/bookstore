// import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={< />} />
          <Route path="/signin" element={< />} />
          <Route path="/signinbyemail" element={< />} />
         
          <Route path="/*" element={<h2 >404 page</h2>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
