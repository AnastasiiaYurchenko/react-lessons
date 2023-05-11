import { Route, Routes } from 'react-router-dom';

import Products from 'pages/Products';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
// import styled from 'styled-components';
import ProductDetails from 'pages/ProductDetails';
// import { Container } from './App.styled';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';
import Home from 'pages/Home';

// const StyledLink = styled(NavLink)`
//   color: black;
//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
