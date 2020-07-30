import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgTest()
{    
    const remove = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd" d="M12 1.2L10.8 0L6 4.8L1.2 0L0 1.2L4.8 6L0 10.8L1.2 12L6 7.2L10.8 12L12 10.8L7.2 6L12 1.2Z" fill="#ABB4BD"/>
    </svg>
    
    `
    
    const RemoveSVG = () => <SvgXml xml={remove} />

    return <RemoveSVG />;
}