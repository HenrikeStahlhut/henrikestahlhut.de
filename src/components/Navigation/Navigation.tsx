import Link from "next/link";
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
    font-family: "NewYork";
    font-size: 1.2em;

    &:hover {
      opacity: 1;
    }

    .link {
      color: white;
    }
  }
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link href={"/"} className="link">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/projects"} className="link">
            Projects
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="link">
            Contact
          </Link>
        </li>
      </ul>
    </StyledNavigation>
  );
}
