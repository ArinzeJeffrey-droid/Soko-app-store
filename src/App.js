import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Homepage";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom"
import CONSTANTS from "./routes/common.json"
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import BagPage from "./pages/BagPage";
import Invoice from "./components/invoice/Invoice";


function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
        <Router>
          <Switch>
            <Route exact path={CONSTANTS.ROUTES.HOME} component={HomePage}/>
            <Route path={CONSTANTS.ROUTES.VIEW_SINGLE_PRODUCT} component={Product}/>
            <Route path={CONSTANTS.ROUTES.BAG} component={BagPage}/>
            <Route path={CONSTANTS.ROUTES.INVOICE} component={Invoice}/>
          </Switch>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
