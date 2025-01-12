import React from "react";
import {
    Grid2,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import ImageBlock from "./ImageBlock";
import ranking from "./ranking";

const PolishMasterLeagueStandings = () => {
    return (
        <Grid2 size={12} container className="polish-masters-league-standings">
            <Grid2 size={12}>
                <a id="polish-masters-league-standings" aria-hidden="true" className="anchor"></a>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="/static/06a73916123f02605cef9f2d97a888f6.jpg"
                    alt="The Phoenix flies to battle!"
                    boxHeight="1004px"
                    imgHeight="1350px"
                    ml="-335px"
                />
            </Grid2>
            <Grid2 size={6} className="text-section">
                <Typography variant="h6">Rise to the Top</Typography>
                <Typography variant="h3">Current Season Standings: Heroes in the Making</Typography>
                <Typography variant="body1">
                    Welcome to the pulse of the battlefield—the very heart where strategy, skill, and spirit collide.
                    Here in our league standings, you'll find not just numbers, but stories of ambition, tactical
                    prowess, and the relentless pursuit of excellence. As competitors clash in the grand arena
                    of the Kings Of Warsaw, each game played is a step closer to glory.
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Place</TableCell>
                                <TableCell>Player</TableCell>
                                <TableCell>Points</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ranking.map((row) => (
                                <TableRow
                                    key={row.player}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.place}
                                    </TableCell>
                                    <TableCell>{row.player}</TableCell>
                                    <TableCell align="right">{row.points}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>

            <Grid2 size={6} className="text-section">
                <Typography variant="h3">Beneath the Numbers: A Tale of Valor</Typography>
                <Typography variant="body1">
                    Our table is more than a list; it's a testament to the journeys undertaken by the brave souls
                    in the Polish Masters League. Each position reflects countless hours of preparation, strategy,
                    and, above all, the courage to face the unknown.
                </Typography>
                <Typography variant="body1">
                    Stay tuned as the saga unfolds, with every roll of the dice, every strategic maneuver, and every
                    unexpected victory writing a new chapter in the annals of the Polish Masters League.
                </Typography>
                <Typography variant="body1">
                    Remember, in the realm of Kings Of Warsaw, every participant is a storyteller, every game
                    a legend in the making. Join us again for the next update and witness history as it happens.
                </Typography>
            </Grid2>

            {/*<Grid2 size={6}>*/}
            {/*    <Avatar*/}
            {/*        alt="Kings Of WarSAW logo"*/}
            {/*        src="/static/logo.jpg"*/}
            {/*        sx={{width: 270, height: 270}}*/}
            {/*    />*/}
            {/*</Grid2>*/}
            <Grid2 size={6}>
                <ImageBlock
                    src="/static/3930be7d2fabf3b965578140851dd8d9.jpg"
                    alt="Fireborne Salamanders go to war!"
                    boxHeight="1004px"
                    imgHeight="1350px"
                    mt="290px"
                />
            </Grid2>

            <Grid2 size={6} className="text-section">
                <Typography variant="h6">Enter the Fray</Typography>
                <Typography variant="h3">Tournaments - Where Heroes Clash</Typography>
                <Typography variant="body1">
                    Dive into the heart of competition with our array of tournaments. From intense battles to strategic
                    showdowns, every event is an opportunity to carve your name into the annals of Kings Of Warsaw.
                    Don't miss out on making history alongside fellow competitors.
                </Typography>
                <Typography variant="h3">Special Highlight: Kings Of War GT</Typography>
                <Typography variant="body1">
                    Mark your calendars for the grandest event of the year, the Kings Of War GT, happening on the last
                    weekend of May. It's not just a tournament; it's a celebration of strategy, skill, and camaraderie.
                    Ready for the challenge? Find out more about <a href="#kings-of-warsaw-gt">Kings Of WarSAW GT</a>.
                </Typography>
            </Grid2>

            <Grid2 size={6}>
                <ImageBlock
                    src="/static/d84672bd331b9d82a7ccbd7d1ac65752.jpg"
                    alt="Abyssal Dwarfs storm the gates!"
                    boxHeight="728px"
                    imgHeight="750px"
                    ml="-200px"
                />
            </Grid2>
        </Grid2>
    );
};

export default PolishMasterLeagueStandings;