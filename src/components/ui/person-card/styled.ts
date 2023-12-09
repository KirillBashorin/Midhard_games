import styled from 'styled-components';
import Image from '../../../elements/image';
import P from '../../../elements/p';
import { Title } from '../../ui/title/title';

const StyledCard = styled.div``;

const CardPhoto = styled(Image)`
  border-radius: ${(props) => props.theme.borderRadiusBig};
  margin-bottom: 15px;
  height: auto;
  object-fit: cover;
  background-color: ${(props) => props.theme.textPrimary};
  /* @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    height: 482px;
  } */
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

const CardTitle = styled(Title)`
  padding: 8px 15px;
  border: 2px solid ${(props) => props.theme.violet};
  border-radius: 36px;
  text-transform: none;
`;

const CardDescription = styled(P)`
  padding-left: 50px;
  font-size: 18px;
  line-height: 130%;
  color: ${(props) => props.theme.textPrimary};
`;

export { StyledCard, CardPhoto, TitleContainer, CardTitle, CardDescription };
