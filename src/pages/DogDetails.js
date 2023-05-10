// /dogs/: dogId
// http://localhost:3000/dogs/dog-1

import { Link, Outlet, useParams } from 'react-router-dom';

export const DogDetails = () => {
  // const params = useParams();
  // console.log(params);
  // або деструктаризація по імені
  const { dogId } = useParams();
  // useEffect(() => {
  //     делаем запрос, если нужно
  // }, [])

  // http://localhost:3000/dogs/dog-1
  // http://localhost:3000/dogs/dog-1/subbbreeds
  // http://localhost:3000/dogs/dog-1/gallery

  return (
    <div>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbbreeds">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галлерея</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default DogDetails;
