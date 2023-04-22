import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recepies.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
// import { Formik } from 'formik';
import { RecipeForm } from './RecipeForm/RecipeForm';

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
        <RecipeForm />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
