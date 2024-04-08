// import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Filter from './components/Filter';
import Header from './components/Header';

function App() {
  return (
    <>
      Hello  World
      <Header/>
      <Filter/>
      <BookList/>
      <BookDetails/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={< />} />
          <Route path="/signin" element={< />} />
          <Route path="/signinbyemail" element={< />} />
         
          <Route path="/*" element={<h2 >404 page</h2>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
