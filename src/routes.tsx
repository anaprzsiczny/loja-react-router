import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/home'
import Product from './pages/Product/product'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" exact component={Product} />
    </Switch>
  )
}

export default Routes