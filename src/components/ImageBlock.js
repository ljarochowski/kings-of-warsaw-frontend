import React from 'react';
import {Box} from "@mui/material";
const ImageBlock = ({ src, boxHeight = "100%", boxWidth = "100%", mt, ml, alt = '', ...props }) => {
    let imgHeight = "auto";
    let imgWidth = "auto";

    if (boxHeight !== "100%") {
        if (props.imgHeight !== undefined) {
            imgHeight = props.imgHeight;
        } else {
            imgHeight = boxHeight;
        }
    }
    if (boxWidth !== "100%") {
        if (props.imgWidth !== undefined) {
            imgWidth = props.imgWidth;
        } else {
            imgWidth = boxWidth;
        }
    }

    return (
        <Box sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            width: boxWidth,
            height: boxHeight,
        }}>
            <img src={src} alt={alt} style={{
                width: imgWidth,
                height: imgHeight,
                marginTop: mt,
                marginLeft: ml,
            }} />
        </Box>
    );
};

export default ImageBlock;