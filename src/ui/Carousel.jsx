import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import styled, { css } from "styled-components";

//color-main: #087f5b
//grey color: #343a40
// #ffc300

const styles = {
  large: css`
    /* background-color: red; */
    font-size: large;
    font-weight: 900;
    margin-bottom: 0.5rem;
  `,
  medium: css`
    font-size: small;
  `,
  small: css``,
};

const StyledCarousel = styled.div`
  display: flex;
  grid-gap: 3rem;
  background-color: #678d77;
  width: 800px;
  height: 400px;
  margin: 100px auto;
  border-radius: 8px;
  color: #fff;
  padding: 32px;
  padding-left: 86px;
  padding-left: 48px;
  display: flex;
  align-items: center;
  gap: 64px;
  position: relative;
  z-index: 0;
`;
const StyledImage = styled.img`
  max-height: 250px;
  max-width: 250px;
  border-radius: 8px;
  transform: scale(1.1);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  z-index: -1;
  &:hover {
    transform: scale(1.4);
    z-index: 0;
    cursor: pointer;
    backdrop-filter: blur(8px);
  }
`;

const StyledBlockQoute = styled.blockquote`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  color: white;
  transition: all 0.3s;

  ${(props) => styles[props.paragraphstyles]}

  ${(props) =>
    props.type === "middle" &&
    css`
      &:hover {
        transform: scale(1.1) translateX(90px) translateY(-50px);
        cursor: pointer;
        font-size: 16px;
        z-index: 4;
        color: #ffc300;
        backdrop-filter: blur(8px);
      }
    `}
`;

const StyledArrowButton = styled.button`
  font-size: 24px;
  border: 1px none;
  border-radius: 50%;
  background-color: white;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: #087f5b;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.type === "left" &&
    css`
      left: 0;
      transform: translate(-50%, -50%);
      z-index: -1;
    `}

  ${(props) =>
    props.type === "right" &&
    css`
      right: 0;
      transform: translate(50%, -50%);
      z-index: -1;
    `}

    &:hover {
    background-color: #c70039;
    color: white;
    position: absolute;
    right: 0;
  }
`;

const CarouselContext = createContext();

function Carousel({ children }) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  let intervalId = useRef(null);

  // console.log(index);

  const startInterval = useCallback(() => {
    intervalId.current = setInterval(() => {
      if (index === 9) {
        setIndex(0);
        return () => clearInterval(intervalId.current);
      }
      setIndex((index) => index + 1);
    }, 5000);

    //Clearing the interval
  }, [index, intervalId]);

  function stopInterval() {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  const HandleMouseEnter = () => {
    setIsHovering(true);
    stopInterval();
  };

  const HandleMouseLeave = () => {
    setIsHovering(false);
    if (isHovering) startInterval();
  };

  function tab(type) {
    clearInterval(intervalId.current);
    if (type === "left") {
      if (index < 0) {
        setIndex(9);
      }
      setIndex((index) => index - 1);
    } else if (type === "right") {
      if (index === 9) {
        setIndex(0);
      }
      setIndex((index) => index + 1);
    }
  }
  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [startInterval, index]);

  return (
    <CarouselContext.Provider value={{ index, tab }}>
      <StyledCarousel
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
      >
        {children}
      </StyledCarousel>
    </CarouselContext.Provider>
  );
}

function ArrowButton({ icon, type }) {
  const { tab } = useContext(CarouselContext);

  function handleClick() {
    tab(type);
  }

  return (
    <StyledArrowButton type={type} onClick={handleClick}>
      {icon}
    </StyledArrowButton>
  );
}

Carousel.ArrowButton = ArrowButton;

function useCarousel() {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    console.log("context undefined");
    throw new Error("carousel context was used outside cities provider");
  }
  return context;
}

export {
  StyledBlockQoute,
  StyledImage,
  StyledParagraph,
  Carousel,
  useCarousel,
};
