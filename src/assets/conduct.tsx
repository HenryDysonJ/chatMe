import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const ConductIcon = (props: any) => (
    <Svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G id="SVGRepo_bgCarrier" strokeWidth={0} />
        <G
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <G id="SVGRepo_iconCarrier">
            <Circle cx={12} cy={6} r={4} fill="#ffffff" />
            <Path
                d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                fill="#ffffff"
            />
        </G>
    </Svg>
);
export default ConductIcon;
