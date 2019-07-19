import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import {Home} from '../pages/home'
import {Cart} from '../pages/cart'
import {Product} from '../pages/product'
import ViewProductContainer from '../pages/viewProduct'
import {Header} from '../components/header'

const App = () => (
  <div>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/viewproduct" component={ViewProductContainer} />
      <Route path="/cart" component={Cart} />
    </Router>
  </div>
)

export default App
