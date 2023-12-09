import styled from 'styled-components';
import { Title } from '../../ui/title/title';

const StyledOurWorks = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.primary};
  padding: 77px 0;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 72px 0 45px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 5px 0 71px;
  }
`;

const OurWorksTitle = styled(Title)`
  margin-bottom: 25px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 30px;
  }
`;

export { StyledOurWorks, OurWorksTitle };
