import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VectorIcon = (props:any) => (
  <Svg
    width={4}
    height={18}
    viewBox="0 0 4 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 9H2.01V9.01H2V9ZM2 2H2.01V2.01H2V2ZM2 16H2.01V16.01H2V16Z"
      stroke="#222222"
      strokeWidth={3}
      strokeLinejoin="round"
    />
  </Svg>
);
export default VectorIcon;
