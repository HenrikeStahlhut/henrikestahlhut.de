import { styled } from "styled-components";

const StyledTitle = styled.h2`
  font-size: 2rem;
  color: white;
  font-family: "NewYork";

  br {
    display: none;

    @media (max-width: 600px) {
      display: static;
    }
  }
`;

type SubheadlineProps = {
  children: React.ReactNode;
};

export default function Subheadline({ children }: SubheadlineProps) {
  return <StyledTitle>{children}</StyledTitle>;
}
