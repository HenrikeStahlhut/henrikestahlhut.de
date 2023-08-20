import styled from "styled-components";
import Footer from "../Footer/Footer";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;

  .space-left {
    width: 20%;
  }

  .container {
    width: 60%;
  }

  .space-right {
    width: 20%;
  }

  @media (max-width: 600px) {
    .space-left {
      width: 0;
    }

    .container {
      width: 100%;
    }

    .space-right {
      width: 0;
    }
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <LayoutContainer>
        <div className="space-left"> </div>
        <div className="container">{children}</div>
        <div className="space-right"> </div>
      </LayoutContainer>
    </>
  );
}
