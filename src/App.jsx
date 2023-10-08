import "./App.css"
import Header from './containers/Header'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import ProductListing from "./containers/ProductListing"
import ProductDetails from "./containers/ProductDetails"
import ProductComponent from "./containers/ProductComponent"
function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" exact Component={ProductListing} />
            <Route path="/product/:productId" exact Component={ProductDetails} />
            <Route path="/pc" exact Component={ProductComponent} />
            <Route>404 Not Found</Route>
          </Routes>
          
        </BrowserRouter>
      </div>
  )
}

export default App
