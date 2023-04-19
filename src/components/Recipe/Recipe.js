import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import { RecipeInfo, InfoBlock, Name, BadgeList, Badge } from './Recipe.styled';

export const Recipe = ({
  item: { name, image, time, servings, calories, difficulty },
}) => {
  console.log(difficulty);
  return (
    <section>
      <img src={image} alt={name} width="240" />
      <Name>{name}</Name>

      <RecipeInfo>
        <InfoBlock>
          {/* <span>icon</span> */}
          <BsAlarm size="24" />
          <span>{time} min</span>
        </InfoBlock>
        <InfoBlock>
          <AiOutlinePieChart size="24" />
          <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartBar size="24" />
          <span>{calories} calories</span>
        </InfoBlock>
      </RecipeInfo>

      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge active={difficulty === 'easy'} type="easy">
            Easy
            {/* {difficulty === 'easy' && ' is Active'} */}
          </Badge>
          <Badge active={difficulty === 'medium'} type="medium">
            Medium
            {/* {difficulty === 'medium' && ' is Active'} */}
          </Badge>
          <Badge active={difficulty === 'hard'} type="hard">
            Hard
            {/* {difficulty === 'hard' && ' is Active'} */}
          </Badge>
        </BadgeList>
      </div>
    </section>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
