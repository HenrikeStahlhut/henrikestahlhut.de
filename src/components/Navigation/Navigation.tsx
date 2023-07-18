import { styled } from "styled-components";

const StyledNavigation = styled.nav`
  margin: 20px 0;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  li {
    margin: 0px 10px;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </StyledNavigation>
  );
}
