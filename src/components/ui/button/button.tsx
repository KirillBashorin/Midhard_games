import StyledButton from './styled.ts';
import { Link } from 'react-router-dom';

interface Button {
  className?: string;
  link?: string;
  to?: string;
  onClick?: () => void;
  children?: string | JSX.Element | null;
  target?: string;
  type?: string;
  isLightBg?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Button> = ({
  className,
  link,
  to,
  onClick,
  children,
  target,
  type,
  isLightBg,
  disabled,
}) => {
  return (
    <StyledButton
      className={className}
      $isLightBg={isLightBg}
      {...(link
        ? { href: link, target: target, onClick: onClick }
        : {
            as: 'button',
            disabled: disabled,
            onClick,
            type: type ? type : 'button',
          })}
      {...(to ? { as: Link, to: to } : null)}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
