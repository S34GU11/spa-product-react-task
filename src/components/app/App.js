import './App.scss';
import Header from "../header/Header";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
        <main>
          {/*<HomePage></HomePage>*/}
          <ProductPage></ProductPage>
        </main>
        <footer>2023 © COPYRIGHT</footer>
    </div>
  );
}

export default App;
