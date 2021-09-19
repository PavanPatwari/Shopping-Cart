import "./App.css";
import Header from "./Containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./Containers/ProductListing";
import ProductDetail from "./Containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <CategoriesDropdown /> */}
        <Switch>
          <Route exact path="/Shopping-Cart" component={ProductListing} />
          <Route
            exact
            path="/Shopping-Cart/product/:productId"
            component={ProductDetail}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
