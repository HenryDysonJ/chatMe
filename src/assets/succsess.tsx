import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const SuccessIcon = (props: any) => (
    <Svg
        width={100}
        height={100}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Rect width={100} height={100} fill="url(#pattern0_3_258)" />
        <Defs>
            <Pattern
                id="pattern0_3_258"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use xlinkHref="#image0_3_258" transform="scale(0.01)" />
            </Pattern>
            <Image
                id="image0_3_258"
                width={100}
                height={100}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
);
export default SuccessIcon;
