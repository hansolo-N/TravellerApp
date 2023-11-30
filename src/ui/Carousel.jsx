import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import styled, { css } from "styled-components";
import TopCityList from "./TopCityList";

//color-main: #087f5b
//grey color: #343a40
// #ffc300

const ParagraphStyles = {
  large: css`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 32px;
    color: #e6fcf5;
  `,
  medium: css`
    font-size: 14px;
    margin-bottom: 4px;
    color: #e6fcf5;
  `,
  small: css`
    font-size: 12px;
    color: #e6fcf5;
  `,
};

const StyledCarousel = styled.div`
  display: flex;
  gap: 2rem;
  background-color: #c8d9eb;
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
  height: 250px;
  border-radius: 8px;
  transform: scale(1.1);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.4);
  }
`;

const StyledBlockQoute = styled.blockquote`
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  color: black;
  &:hover {
    transform: scale(1.1) translateX(90px) translateY(-50px);
    cursor: pointer;
    font-size: 16px;
    z-index: 4;
    color: #ffc300;
  }
`;

const StyledParagraph = styled.p`
  ${(props) => ParagraphStyles[props.paragraphstyle]}
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
  z-index: 3;

  ${(props) =>
    props.type === "left" &&
    css`
      left: 0;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.type === "right" &&
    css`
      right: 0;
      transform: translate(50%, -50%);
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

  console.log(isHovering);

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
      if (index >= 9) {
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
