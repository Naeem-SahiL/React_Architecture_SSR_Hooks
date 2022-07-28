import React, { lazy, Suspense } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'
// import Articles from './pages/Articles'
// import About from './pages/About'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Articles = lazy(() => import('./pages/Articles'))

function App() {
  return (

    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/articles'>Articles</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles' element={<Articles />} />
        </Routes>
      </Suspense>

    </>
  );
}

export default App;
// MobX State managent with context
/* 
  <MobxContextProvider>
      <div className="App">
        <h1>Hello Sate Management</h1>
        <ConuterButtonMobx />
      </div>
    </MobxContextProvider>
*/

// Redux
/*
<Provider store={store}>
      <div className="App">
        <h1>Hello Sate Management</h1>
        <ConuterButtonRedux />
      </div>
    </Provider>
*/


// UseRecoil
/*
<RecoilRoot>
      <div className="App">
        <DisplaySharedCount />
        <h1>Hello Sate Management</h1>
        <ConuterButtonRecoil />
      </div>
    </RecoilRoot>
*/

// Context provider
/*
<CounterProvider>
      <div className="App">
        <h1>Hello Sate Management</h1>
        <ConuterButton />
      </div>
    </CounterProvider>
*/


// React Router Setup
{/* <ul>
<li>
  <Link to='/'>Home</Link>
</li>
<li>
  <Link to='/about'>About</Link>
</li>
<li>
  <Link to='/articles'>Articles</Link>
</li>
</ul>

<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/articles' element={<Articles />} />
</Routes> */}
