import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List } from './RecipeList.styled';

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Recipe item={item} />
          </li>
        );
      })}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
