import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Homepage";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom"
import CONSTANTS from "./routes/common.json"
import BagPage from "./pages/BagPage";
import Invoice from "./components/invoice/Invoice";
import AccountPage from "./pages/AccountPage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";


function App() {
  return (
    <div className="container-fluid">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path={CONSTANTS.ROUTES.HOME} component={HomePage}/>
            <Route path={CONSTANTS.ROUTES.VIEW_SINGLE_PRODUCT} component={ProductPage}/>
            <Route path={CONSTANTS.ROUTES.BAG} component={BagPage}/>
            <Route path={CONSTANTS.ROUTES.INVOICE} component={Invoice}/>
            <Route path={CONSTANTS.ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={CONSTANTS.ROUTES.ORDER} component={OrderPage}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
