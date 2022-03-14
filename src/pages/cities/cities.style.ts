import styled from "styled-components";

export const CitiesContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 5px;

  > div.city-container {
    cursor: pointer;
    overflow: hidden;

    .city {
      color: white;
      font-size: 18px;
      text-transform: capitalize;
      font-weight: bold;
    }

    .temperature {
      color: white;
      font-size: 18px;
      font-weight: bold;
    }

    .time {
      color: white;
      font-size: 18px;
      text-transform: capitalize;
      font-weight: bold;
    }
  }

  > .city-container:nth-child(1) {
    grid-column: 1/4;
    grid-row: 1/4;
  }

  .city-container:nth-child(2) {
    grid-column: 4/7;
    grid-row: 1/3;
  }

  .city-container:nth-child(3) {
    grid-column: 7/10;
    grid-row: 1/4;
  }

  .city-container:nth-child(4) {
    grid-column: 10/13;
    grid-row: 1/5;
  }

  .city-container:nth-child(5) {
    grid-column: 1/4;
    grid-row: 4/8;
  }

  .city-container:nth-child(6) {
    grid-column: 4/7;
    grid-row: 3/5;
  }

  .city-container:nth-child(7) {
    grid-column: 4/7;
    grid-row: 5/7;
  }

  .city-container:nth-child(8) {
    grid-column: 4/8;
    grid-row: 7/11;
  }

  .city-container:nth-child(9) {
    grid-column: 1/4;
    grid-row: 8/11;
  }

  .city-container:nth-child(10) {
    grid-column: 7/10;
    grid-row: 4/7;
  }

  .city-container:nth-child(11) {
    grid-column: 10/13;
    grid-row: 5/8;
  }

  .city-container:nth-child(12) {
    grid-column: 10/13;
    grid-row: 8/11;
  }

  .city-container:nth-child(13) {
    grid-column: 8/10;
    grid-row: 7/9;
  }
  .city-container:nth-child(14) {
    grid-column: 8/10;
    grid-row: 9/11;
  }
`;
