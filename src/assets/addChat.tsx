import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AddChat = (props: any) => (
    <Svg
        width={58}
        height={59}
        viewBox="0 0 58 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_5_533)">
            <Circle cx={29} cy={25} r={25} fill="#5E30E7" />
            <Path
                d="M39.8931 23.6021V27.2554H18.939V23.6021H39.8931ZM31.3687 14.6787V36.9346H27.4844V14.6787H31.3687Z"
                fill="white"
            />
        </G>
        <Defs></Defs>
    </Svg>
);
export default AddChat;
