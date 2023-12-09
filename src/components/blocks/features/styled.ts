import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledFeatures = styled.div`
  padding: 35px 0 35px;
  /* padding: 35px 0 100px; */

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 50px 0 45px;
    /* padding: 50px 0 200px; */
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    padding: 75px 0 65px;
    /* padding: 75px 0 300px; */
  }
`;

const StyledFeaturesList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    gap: 10px;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export { StyledFeatures, StyledFeaturesList };
