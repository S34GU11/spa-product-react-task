import {Suspense} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import Header from "../header/Header";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import Footer from "../footer/Footer";
import Spinner from "../spiner/Spinner";

import './App.scss';


function App() {
  return (
     <Router>
         <div className="wrapper">
             <Header/>
             <main>
                 <Suspense fallback={<Spinner/>}>
                     <Routes>
                         <Route path="/"
                                element={<HomePage/>}/>
                         <Route path="/productList"
                                element={<ProductListPage/>}/>
                     </Routes>
                 </Suspense>
             </main>
             <Footer/>
         </div>
     </Router>
  );
}

export default App;
