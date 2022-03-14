import { Map } from "google-maps-react";

import styled from "styled-components";

export const StyledMap = styled(Map)<any>`
  width: 100% !important;
  position: absolute;
  top: 0;
  z-index: 1;
  display: ${(props) => (props.showMap ? "unset" : "none")};
`;
