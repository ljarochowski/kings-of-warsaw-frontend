import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const BulletListItem = ({children, ...props}) => {
    return (
        <ListItem>
            <ListItemIcon>
                <FiberManualRecordRoundedIcon fontSize="small" {...props}/>
            </ListItemIcon>
            <ListItemText>
                {children}
            </ListItemText>
        </ListItem>
    );
};

export default BulletListItem;
