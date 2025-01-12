import React from "react";
import {Grid2, List, Paper, Typography} from "@mui/material";
import BulletListItem from "./BulletListItem";
import ImageBlock from "./ImageBlock";

const PolishMastersLeague = ({}) => {
    return (
        <Grid2 size={12} container className="polish-masters-league">
            <Grid2 size={12}>
                <a id="polish-masters-league" aria-hidden="true" className="anchor"></a>
            </Grid2>
            <Grid2 size={6} className="text-section">
                <Typography variant="h6">The Battle Begins</Typography>
                <Typography variant="h3">Polish Masters League: Quest for Glory</Typography>
                <Typography variant="body1">
                    In a move that sparked excitement across the gaming community, Konrad “Kazan” Krzanowski rekindled
                    the spirit of competition with a proposal for the National League's resurgence on November 16, 2023.
                    Here are the streamlined guidelines for the thrilling 2023/2024 season’s journey. Check
                    the current standings here.
                </Typography>
                <Typography variant="h3">Season and Scoring</Typography>
                <Typography variant="body1">
                    <strong>Season Duration:</strong> The adventure unfolds from November, following the Clash Of
                    Kings release, straight through to the end of the next year's October.
                </Typography>
                <Typography variant="body1">
                    <strong>Scoring System:</strong> Players’ achievements are measured by their top four tournament
                    performances. We use a scoring formula developed by
                    <a href="https://www.kowmasters.com/index.php?p=calc-methods">British KoW Masters</a>, calculates
                    points based on the tournament's size, duration, and player standings. Specifically, the formula is:
                </Typography>
                <Typography variant="body1">
                    <Paper>
                        P = (60 + number of players + tournament weight) – (player’s place – 1) *
                        (60 + number of players + tournament weight) / (number of players)
                    </Paper>
                </Typography>
                <Typography variant="body1">
                    <List>
                        <BulletListItem>
                            For one-day events, the tournament weight is 0.
                        </BulletListItem>
                        <BulletListItem>
                            For two-day tournaments, weight is set at 10.
                        </BulletListItem>
                        <BulletListItem>
                            In cases of tournaments exceeding 30 participants, the number of players is capped at 30
                            for this calculation.
                        </BulletListItem>
                    </List>
                </Typography>
                <Typography variant="body1">
                    <strong>Example:</strong> In a one-day tournament with 10 players:
                    <List>
                        <BulletListItem>
                            First place scores: 60 + 10 + 0 – (1 – 1) * (70 / 10) = 70
                        </BulletListItem>
                        <BulletListItem>
                            Second place gets: 70 – (7 * 1) = 63
                        </BulletListItem>
                        <BulletListItem>
                            Third place garners: 70 – (7 * 2) = 56
                        </BulletListItem>
                        <BulletListItem>
                            ... and so forth.
                        </BulletListItem>
                    </List>
                </Typography>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="/static/26b85456f0013b726645011397dc2aad.jpg"
                    alt="Evil Summoner Crone sits on a throne plotting against all what is good in the world of Pannithor"
                    boxHeight="1256px"
                    mt="0px"
                />
            </Grid2>

            <Grid2 size={6}>
                <ImageBlock
                    src="/static/06a73916123f02605cef9f2d97a888f6.jpg"
                    alt="The battle commence!"
                    boxHeight="1145px"
                    imgHeight="1350px"
                    ml="-335px"
                />
            </Grid2>
            <Grid2 size={6} className="text-section">
                <Typography variant="h3">Tournament Criteria</Typography>
                <Typography variant="body1">
                    For a tournament to qualify:
                </Typography>
                <List>
                    <BulletListItem>
                        It must be announced on the Kings Of War Poland Facebook Fanpage at least 20 days prior.
                    </BulletListItem>
                    <BulletListItem>
                        A minimum of 8 participants is required.
                    </BulletListItem>
                    <BulletListItem>
                        The game format ranges between 1500-2500 points, excluding Legendary Battles and
                        Ambush formats.
                    </BulletListItem>
                    <BulletListItem>
                        Outcomes should be transparently available on the Mantic Companion app.
                    </BulletListItem>
                    <BulletListItem>
                        Outcomes should be transparently available on the Mantic Companion app.
                    </BulletListItem>
                    <BulletListItem>
                        Current and official Mantic’s Kings of War rules apply.
                    </BulletListItem>
                    <BulletListItem>
                        No painting requirement for armies, though organizers may offer separate accolades
                        for superbly presented forces.
                    </BulletListItem>
                    <BulletListItem>
                        There's no mandate on the usage of Mantic models exclusively; organizers may recognize
                        best Mantic-themed armies.
                    </BulletListItem>
                </List>
                <Typography variant="h3">Championship & Chapter</Typography>
                <Typography variant="body1">
                    <strong>Polish Kings Of War League Championships:</strong> In November, the season's top 8
                    contenders will be invited to compete under the latest Clash Of Kings and season rules.
                    The highest-ranked player is crowned Champion of the League, earning a place in next year’s
                    league chapter.
                </Typography>
                <Typography variant="body1">
                    <strong>League Chapter</strong>
                </Typography>
                <List>
                    <BulletListItem>
                        Chairman: Konrad Kazan Krzanowski
                    </BulletListItem>
                    <BulletListItem>
                        League Treasurer: Łukasz Jarochowski
                    </BulletListItem>
                </List>
                <Typography variant="body1">
                    <strong>Financing and Awards</strong><br/>Prize funds are pooled from organizer contributions,
                    transparently included in tournament fees.
                </Typography>
            </Grid2>
        </Grid2>
    );
};

export default PolishMastersLeague;