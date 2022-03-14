import styled from "styled-components";

export const City = styled.div<any>`
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => `url(/images/city/${props.image}.png)`};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
