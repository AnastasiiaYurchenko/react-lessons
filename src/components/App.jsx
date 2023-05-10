import DogDetails from 'pages/DogDetails';
import Dogs from 'pages/Dogs';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Gallery } from './Gallery';
import { SubBreeds } from './SubBreeds';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
