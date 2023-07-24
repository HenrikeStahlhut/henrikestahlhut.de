import { styled } from "styled-components";

//https://www.youtube.com/watch?v=lGDU7MYXxqc

const StyledContainer = styled.div`
  z-index: -1000;
  position: fixed;
  height: 100vh;
  width: 100vw;

  div {
    position: absolute;
    border-radius: 80%;
    animation: gradient 4s infinite;
  }

  @keyframes gradient {
    30% {
      transform: scale(1.1) translate(100px);
    }
  }

  .child-1 {
    height: 90%;
    width: 80%;
    background-color: var(--background-blue);
    left: -20%;
    top: -10%;
  }

  .child-2 {
    height: 80%;
    width: 70%;
    background-color: var(--background-violet);
    right: -10%;
    top: -12%;
  }

  .child-3 {
    height: 65%;
    width: 80%;
    background-color: var(--background-orange);
    right: -20%;
    bottom: -15%;
    animation-delay: 0.5s;
  }

  .child-4 {
    height: 50%;
    width: 60%;
    background-color: var(--background-pink);
    left: -18%;
    bottom: -15%;
    animation-delay: 0s;
  }

  &:after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    backdrop-filter: blur(100px);
  }
`;

export default function Background() {
  return (
    <StyledContainer>
      <div className="child-1"></div>
      <div className="child-2"></div>
      <div className="child-3"></div>
      <div className="child-4"></div>
    </StyledContainer>
  );
}
