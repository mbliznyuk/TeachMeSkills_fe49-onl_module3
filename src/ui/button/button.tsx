import styled from 'styled-components';

type Props = {
  variant: 'primary' | 'secondary';
  children: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  variant,
  children,
  disabled,
  onClick,
}) => {
  return (
    <ButtonWrapper
      type="button"
      $variant={variant}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </ButtonWrapper>
  );
};

const css = String.raw;

const ButtonWrapper = styled.button<{
  $variant: 'primary' | 'secondary';
  $fitContent?: boolean;
}>`
  all: unset;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  width: ${({ $fitContent }) => {
    return $fitContent ? 'fit-content' : 'calc(100% - 20px)';
  }};

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary': {
        return css`
          border: 1px solid white;
          background: var(--border-accent-color);
          color: white;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          &:hover {
            box-shadow: 0px 0px 22px 12px rgba(237, 238, 245, 0.4) inset;
          }
        `;
      }
      default:
        return '';
    }
  }}

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: gray;
  }
`;
