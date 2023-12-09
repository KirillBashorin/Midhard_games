import { useState } from 'react';
import {
  StyledReview,
  Rating,
  Star,
  ReviewText,
  MoreButton,
  ReviewPerson,
  ReviewPhoto,
  ReviewPersonText,
  ReviewName,
  ReviewNameDescription,
} from './styled';

interface IReview {
  content: {
    rating: number;
    text: string;
    image: string;
    name: string;
    name_description: string;
  };
}

const Review: React.FC<IReview> = ({ content }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const partText = `${content.text.slice(0, 271)}...`;
  const fullText = content.text;
  const handlerMoreButton = () => {
    setIsCardOpened(!isCardOpened);
  };

  return (
    <StyledReview>
      <Rating>
        {Array.from({ length: content.rating }, (_, index) => (
          <Star key={index} />
        ))}
      </Rating>
      <ReviewText $isCardOpened={isCardOpened}>
        {isCardOpened ? fullText : partText}
      </ReviewText>
      {isCardOpened ? null : (
        <MoreButton onClick={handlerMoreButton}>Читать полностью</MoreButton>
      )}
      <ReviewPerson>
        <ReviewPhoto src={content.image} alt={content.name} />
        <ReviewPersonText>
          <ReviewName>{content.name}</ReviewName>
          <ReviewNameDescription>
            {content.name_description}
          </ReviewNameDescription>
        </ReviewPersonText>
      </ReviewPerson>
    </StyledReview>
  );
};

export default Review;
