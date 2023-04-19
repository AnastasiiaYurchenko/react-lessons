import { RecipeList } from './RecipeList/RecipeList';
import recepies from '../recepies.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recepies} />

      <GlobalStyle />
    </Layout>
  );
};
