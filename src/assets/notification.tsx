import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Notification = (props: any) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            opacity={0.5}
            d="M18.75 9V9.704C18.75 10.549 18.99 11.375 19.442 12.078L20.55 13.801C21.561 15.375 20.789 17.514 19.03 18.011C14.4338 19.313 9.56625 19.313 4.97 18.011C3.211 17.514 2.439 15.375 3.45 13.801L4.558 12.078C5.01157 11.3694 5.25211 10.5454 5.251 9.704V9C5.251 5.134 8.273 2 12 2C15.727 2 18.75 5.134 18.75 9Z"
            fill="#545454"
        />
        <Path
            d="M7.243 18.545C7.56974 19.5491 8.20588 20.424 9.06029 21.0445C9.9147 21.665 10.9436 21.9992 11.9995 21.9992C13.0554 21.9992 14.0843 21.665 14.9387 21.0445C15.7931 20.424 16.4292 19.5491 16.756 18.545C13.611 19.135 10.389 19.135 7.243 18.545Z"
            fill="#545454"
        />
    </Svg>
);
export default Notification;
