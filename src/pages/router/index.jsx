import { Route, Routes } from 'react-router-dom'

import ROUTES from './routes.js'

import Home from '../home/index.jsx'
import About from '../about/index.jsx'
import Product from '../product/index.jsx'
import PageNotFound from '../pageNotFound/index.jsx'

export default function Router() {

  const items = [...Array(100)];
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.product()} element={<Product items={items} />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
