// http://localhost:3000/dogs/dog-1/gallery

import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();
  // useEffect(() => {
  //     делаем запрос, если нужно
  // }, [])
  return <div>Image Gallery: {dogId}</div>;
};
