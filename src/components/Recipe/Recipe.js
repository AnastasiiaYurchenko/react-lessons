import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  RecipeInfo,
  InfoBlock,
  Name,
  Image,
  Meta,
  BadgeList,
  Badge,
  Actions,
} from './Recipe.styled';
import { useState } from 'react';
import { ImageModal } from 'components/ImageModal/ImageModal';

// export class Recipe extends Component {
//   static propTypes = {
//     onDelete: PropTypes.func.isRequired,
//     item: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       time: PropTypes.number.isRequired,
//       servings: PropTypes.number.isRequired,
//       calories: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//       difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
//     }).isRequired,
//   };

//   state = {
//     selectedImg: null,
//   };

//   setSelectedImg = () => {
//     this.setState({ selectedImg: this.props.item.image });
//   };

//   closeModal = () => {
//     this.setState({ selectedImg: null });
//   };

//   render() {
//     const { selectedImg } = this.state;
//     const {
//       item: { id, name, image, time, servings, calories, difficulty },
//       onDelete,
//     } = this.props;

//     return (
//       <Container>
//         <Meta>
//           <Image src={image} alt={name} width="240" />
//           <Name>{name}</Name>

//           <RecipeInfo>
//             <InfoBlock>
//               {/* <span>icon</span> */}
//               <BsAlarm size="24" />
//               <span>{time} min</span>
//             </InfoBlock>
//             <InfoBlock>
//               <AiOutlinePieChart size="24" />
//               <span>{servings} servings</span>
//             </InfoBlock>
//             <InfoBlock>
//               <HiOutlineChartBar size="24" />
//               <span>{calories} calories</span>
//             </InfoBlock>
//           </RecipeInfo>

//           <h3>Difficulty</h3>
//           <BadgeList>
//             <Badge active={difficulty === 'easy'} type="easy">
//               Easy
//               {/* {difficulty === 'easy' && ' is Active'} */}
//             </Badge>
//             <Badge active={difficulty === 'medium'} type="medium">
//               Medium
//               {/* {difficulty === 'medium' && ' is Active'} */}
//             </Badge>
//             <Badge active={difficulty === 'hard'} type="hard">
//               Hard
//               {/* {difficulty === 'hard' && ' is Active'} */}
//             </Badge>
//           </BadgeList>

//           <Actions>
//             <button aria-label="Delete" onClick={() => onDelete(id)}>
//               <HiTrash />
//             </button>
//             <button aria-label="Zoom" onClick={this.setSelectedImg}>
//               <HiZoomIn />
//             </button>
//           </Actions>
//         </Meta>

//         <ImageModal
//           isOpen={selectedImg !== null}
//           onClose={this.closeModal}
//           image={selectedImg}
//         />
//       </Container>
//     );
//   }
// }

export const Recipe = ({
  item: { id, name, image, time, servings, calories, difficulty },
  onDelete,
}) => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Container>
      <Meta>
        <Image src={image} alt={name} width="240" />
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

        <Actions>
          <button aria-label="Delete" onClick={() => onDelete(id)}>
            <HiTrash />
          </button>
          <button aria-label="Zoom" onClick={() => setSelectedImg(image)}>
            <HiZoomIn />
          </button>
        </Actions>
      </Meta>

      <ImageModal
        isOpen={selectedImg !== null}
        onClose={() => setSelectedImg(null)}
        image={selectedImg}
      />
    </Container>
  );
};

Recipe.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
