import { RoundContainer, StyledRoundImage } from './styled';

interface Iround {
  $isBottom: boolean;
}

const Round: React.FC<Iround> = ({ $isBottom }) => {
  return (
    <RoundContainer $isBottom={$isBottom}>
      <StyledRoundImage height={'100%'}/>
    </RoundContainer>
  );
};

export default Round;
