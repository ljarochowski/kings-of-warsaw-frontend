import React from 'react';
import {Box} from "@mui/material";
const ImageBlock = ({ src, boxHeight = "100%", boxWidth = "100%", mt, ml, alt = '', ...props }) => {
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
                marginTop: mt,
                marginLeft: ml,
            }} />
        </Box>
    );
};

export default ImageBlock;