import React from "react";
import {Avatar} from "@mui/material";

const Logo = ({size, ...props}) => {
    return (
        <Avatar
            alt="Kings Of WarSAW logo"
            src="/static/logo.jpg"
            sx={{width: size, height: size}}
            {...props}
        />
    );
};

export default Logo;