import styled from "styled-components";

export const CityDetailsContainer = styled.div<any>`
  background: ${(props) =>
    props.image
      ? `url(/images/city/${props.image}.png) , rgb(0 0 0 / 41%);`
      : "rgb(0 0 0 / 41%)"};
  background-blend-mode: overlay;
  background-size: cover;
  background-position: 0 70%;
  position: absolute;
  overflow: hidden;
  -webkit-transition: width 1s ease-in-out, height 1s ease-in-out;
  -moz-transition: width 1s ease-in-out, height 1s ease-in-out;
  -o-transition: width 1s ease-in-out, height 1s ease-in-out;
  transition: width 1s ease-in-ou, height 1s ease-in-out;

  &.type-1 {
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
  }

  &.type-2 {
    width: 0%;
    height: 0%;
    top: 0;
    right: 0;
  }
  &.type-3 {
    width: 0%;
    height: 0%;
    bottom: 0;
    left: 0;
  }
  &.type-4 {
    width: 0%;
    height: 0%;
    bottom: 0;
    right: 0;
  }

  &.type-5 {
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
  }

  &.type-6 {
    top: 0;
    right: 0;
    width: 0%;
    height: 100%;
  }

  &.type-7 {
    top: 0%;
    height: 0%;
    width: 100%;
  }

  &.type-8 {
    bottom: 0;
    height: 0%;
    width: 100%;
  }

  &.active {
    width: 100%;
    height: 100%;
  }

  > div.container {
    padding: 50px;
    z-index: 50000;
    position: relative;
    > div.header-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > .map-button {
        cursor: pointer;
        svg {
          fill: white;
          font-size: 40px;
        }
        margin-right: 20px;
      }
      > .exit-button {
        text-align: right;
        font-size: 50px;
        color: white;
        cursor: pointer;
      }
    }

    > div.content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .city-name {
        font-size: 80px;
        color: white;
        text-transform: capitalize;
      }

      .weather {
        display: flex;
        align-items: center;
        font-size: 60px;
        color: white;
      }
    }
    > .week-weather-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      > .week-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        width: 300px;
        height: 300px;
        font-size: 30px;
        background-color: #00000085;
        border-radius: 20px;
        margin: 10px;
      }
    }
  }
`;
