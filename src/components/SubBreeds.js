// http://localhost:3000/dogs/dog-2/subbbreeds

import { useParams } from 'react-router-dom';

export const SubBreeds = () => {
  const { dogId } = useParams();
  // useEffect(() => {
  //     делаем запрос, если нужно
  // }, [])
  return <div>SubBreeds: {dogId}</div>;
};
