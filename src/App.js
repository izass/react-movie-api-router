import React from 'react';
import NavBar from './components/navbar';
// import Landing from './pages/Landing';
//import Landing from './pages/home/Landing';
//import MoviePage from './pages/moviePage/MoviePage';
import { Route } from 'react-router-dom';
import routesConfig from './routerConfig';


function App() {
  return (
      <div class="MyBody">
        <NavBar /> 
        {routesConfig.map((value, key) => {
                return <Route
                        key={key}
                        path={value.path}
                        component={value.component}
                        exact={value.exact}                    
                    ></Route>
                })}                    
        {/* <Landing />         */}
        {/* <div>
            <Link to="/" >Landing</Link>
            <Link to="/moviePage" >MoviePage</Link>
        </div>
        {routesConfig.map((value, key) => {
            return <Route
                key={key}
                path={value.path}
                component={value.component}
                exact={value.exact}
            ></Route>
        })}        
          <NavBar />
          <header>
              <Landing />
              <MoviePage />
          </header>           */}
      </div>
      
  );
}

export default App;
