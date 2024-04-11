import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react';

import { routes } from './routes'
import Loader from './components/Loader';
function App() {

  return (
    <Routes>
      {routes.map((route) => {
        const {component:Component,path,title} = route;
        return (
          <Route path={path} key={title} element={<Suspense fallback={<Loader/>}><Component/></Suspense>}/>
        );
      })}
    </Routes>
  )
}

export default App
