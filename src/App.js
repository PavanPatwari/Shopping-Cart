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
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
