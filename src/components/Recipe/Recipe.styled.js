import styled from 'styled-components';

export const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 12px;

  :hover {
    color: orangered;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 4px;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: 'center';
  gap: 4px;

  svg {
    color: red;
  }
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px 12px;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.theme.colors.black};

  background-color: ${p => {
    console.log(p);
    if (!p.active) {
      return p.theme.colors.white;
    }

    switch (p.type) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'orange';
      case 'hard':
        return 'red';
      default:
        throw new Error(`Unknown badge type ${p.type}`);
    }
  }};

  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
`;

// export const Badge = styled.span`
//   padding: 8px 12px;
//   border-radius: ${p => p.theme.radii.sm};
//   border: 1px solid ${p => p.theme.colors.black};

//   background-color: ${p => {
//     console.log(p);
//     return p.active ? p.theme.colors.accent : p.theme.colors.white;
//   }};

//   color: ${p => {
//     return p.active ? p.theme.colors.white : p.theme.colors.black;
//   }};
// `;
