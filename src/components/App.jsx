import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recepies.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
    console.log(recipeId);

    // то же самое, что записать (возвращает новій обьект)
    // this.setState(prevState => {
    //   return {}
    // })
  };

  render() {
    return (
      <Layout>
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <div>Image modal</div>
        <GlobalStyle />
      </Layout>
    );
  }
}
