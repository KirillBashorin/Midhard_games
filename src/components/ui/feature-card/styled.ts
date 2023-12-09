import styled from 'styled-components';
import Subtitle from '../subtitle/subtitle';

interface IStyledCard {
  $isDark?: boolean;
}

interface ICardTitle {
  $isDark?: boolean;
}

interface ICardSubtitle {
  $isDark?: boolean;
}

const StyledCard = styled.div<IStyledCard>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 30px;
  border-radius: 80px;
  border: 1px solid ${(props) => props.theme.violet};
  background-color: ${(props) =>
    props.$isDark ? props.theme.textAlt : props.theme.green};
`;

const CardTitle = styled.h3<ICardTitle>`
  font-size: 90px;
  font-weight: 700;
  line-height: 100%;
  margin: 0;
  color: ${(props) =>
    props.$isDark ? props.theme.green : props.theme.textAlt};
`;

const CardSubtitle = styled(Subtitle)<ICardSubtitle>`
  color: ${(props) =>
    props.$isDark ? props.theme.basicWhite : props.theme.textAlt};
  white-space: pre-line;
`;

export { StyledCard, CardTitle, CardSubtitle };
