import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/default'

import './assets/styles/base.scss'
import './assets/styles/common.scss'

import NotFound from './pages/404'
import Example from './pages/example'
import Homework from './pages/homework'
function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Example />}></Route>
          <Route path="/homework/*" element={<Homework />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
