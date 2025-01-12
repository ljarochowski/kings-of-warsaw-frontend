import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import ImageBlock from "./ImageBlock";

const ImageCard = ({title, action, href, image, children, ...props}) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <ImageBlock src={image} alt={title} {...props}></ImageBlock>
                <Typography variant="h6" sx={{paddingTop: "20px", paddingBottom: "10px"}}>
                    {title}
                </Typography>
                <Typography variant="body1">
                    {children}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" href={href}>{action}</Button>
            </CardActions>
        </Card>
    );
};

export default ImageCard;