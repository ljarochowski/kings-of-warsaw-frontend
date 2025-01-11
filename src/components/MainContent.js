import React from 'react';
import {
    Avatar,
    Container,
    Grid2,
    List,
    Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";
import ImageBlock from "./ImageBlock";
import ImageCard from "./ImageCard";
import BulletListItem from "./BulletListItem";
import ranking from "./ranking";

const MainContent = () => {
    return (
        <Grid2 container sx={{
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Grid2 size={6} id="start" className="text-section">
                <Avatar
                    alt="Kings Of WarSAW logo"
                    src="/static/logo.jpg"
                    sx={{width: 129, height: 129}}
                />
                <Typography variant="h5">Tabletop Wargaming Club</Typography>
                <Typography variant="h3">Kings Of WarSAW</Typography>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="/static/7db0113f22464cf5324a8000586eff86.jpg"
                    alt="Colourfull minis ready for battle"
                    boxHeight="768px"
                    mt="-125px"
                />
            </Grid2>

            <Grid2 size={12} id="arena">
                <Typography variant="h6">
                    Welcome to the arena
                </Typography>
                <Typography variant="h3">
                    Explore Kings Of Warsaw Gaming Club
                </Typography>

                <Grid2 container spacing={4} sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Grid2 size={4}>
                        <Container sx={{width: 430}}>
                            <ImageCard
                                href={"#start"}
                                image={"/static/a1bc2cc02e9cf1e2e3372c962adf88be.jpg"}
                                title={"Kings Of WarSAW"}
                                action={"Explore Our Story"}
                                boxHeight="275px"
                            >
                                Step into Kings Of Warsaw: A community where gaming passion meets tradition.
                                Discover our story and join the adventure.
                            </ImageCard>
                        </Container>
                    </Grid2>
                    <Grid2 size={4}>
                        <Container sx={{width: 430}}>
                            <ImageCard
                                href={"#start"}
                                image={"/static/67caa81b3703c978390a24170f57d381.jpg"}
                                title={"Polish Masters League"}
                                action={"Join the Elite"}
                                boxHeight="275px"
                            >
                                Enter the realm of elite competition in the Polish Masters League. Conquer challenges,
                                claim your glory, and rewrite the annals of gaming history.
                            </ImageCard>
                        </Container>
                    </Grid2>
                    <Grid2 size={4}>
                        <Container sx={{width: 430}}>
                            <ImageCard
                                href={"#start"}
                                image={"/static/8a4833390f388b020e672e5e4039df61.jpg"}
                                title={"Tournaments"}
                                action={"Enter the Arena"}
                                boxHeight="275px"
                            >
                                Gear up for epic battles in our upcoming tournaments.
                                Seize the chance to showcase your skill and emerge victorious!
                            </ImageCard>
                        </Container>
                    </Grid2>
                </Grid2>
            </Grid2>

            <Grid2 size={6} id="about" className="text-section">
                <Typography variant="h5">Welcome to Our Realm</Typography>
                <Typography variant="h3">Kings Of WarSAW: Where Legends Gather</Typography>
                <Typography variant="body1">
                    Welcome to Kings Of Warsaw, the heart and soul of tabletop gaming in Poland. At our core, we are
                    a spirited community of Kings Of War enthusiasts, uniting players from every corner of the country.
                    Our club is the battleground where strategy, camaraderie, and the thrill of competition come alive.
                </Typography>
                <Typography variant="h3">Exploring Kings Of War</Typography>
                <Typography variant="body1">
                    Kings Of War isn't just any game - it's an immersive journey into a fantasy realm, where armies
                    clash on the field of battle in epic confrontations. With its fast-paced gameplay and suspenseful
                    finish, every match promises an unforgettable experience. Plus, the freedom to use any 28mm scale
                    models lets your creativity take the lead. Curious to learn more about this fascinating world?
                    Dive deeper at Mantic Games or get a feel for the action with beginner-friendly tutorials and
                    gripping battle reports available on YouTube.
                </Typography>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="/static/32d8ced6b3f0cc86592074251b0e31eb.jpg"
                    alt="Celestials fighting Oskan"
                    boxHeight="970px"
                    mt="0px"
                />
            </Grid2>

            <Grid2 size={6}>
                <ImageBlock
                    src="/static/cca8cdf1b8920939a7b97b34505b09cb.jpg"
                    alt="Vampire armies clash against Orcs"
                    boxHeight="1005px"
                    mt="0px"
                />
            </Grid2>
            <Grid2 size={6} className="text-section">
                <Typography variant="h3">Venue Spotlight: Adeptus Mechanicus</Typography>
                <Typography variant="body1">
                    Our home is the Adeptus Mechanicus Club, located at Al. Krakowska 110/114 in Warsaw—just look for
                    the imposing building crowned with the AIRBUS sign. Find us here and ascend to the top floor to
                    enter a realm where imagination meets reality. This space is more than just a venue; it's where
                    bonds are forged over dice rolls and strategic moves.
                </Typography>
                <Typography variant="h3">What We Offer</Typography>
                <Typography variant="body1">
                    <strong>Monthly Tournaments:</strong> Dive into the competitive spirit with our monthly
                    Kings Of War tournaments. Whether you're a seasoned veteran or stepping onto the battlefield
                    for the first time, there's a place for you here.
                </Typography>
                <Typography variant="body1">
                    <strong>Polish Masters League:</strong> Elevate your game and strive for glory in the
                    Polish Masters League. As a beacon of high-level play, the league is your pathway to national
                    recognition and beyond.
                </Typography>
                <Typography variant="body1">
                    In Kings Of Warsaw, we’re not just playing games; we're building legends. Join us and become
                    part of a story where every move could turn the tides of war. Whether you're here to challenge
                    the champions, make lifelong friends, or simply explore the depths of Kings Of War, you'll find
                    your next great adventure with us.
                </Typography>
            </Grid2>

            <Grid2 size={6} id="liga-mistrzow" className="text-section">
                <Typography variant="h5">The Battle Begins</Typography>
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
                </Typography>
                <Typography variant="h3">Championship & Chapter</Typography>
                <Typography variant="body1">
                    <strong>Polish Kings Of War League Championships:</strong> In November, the season's top 8
                    contenders will be invited to compete under the latest Clash Of Kings and season rules.
                    The highest-ranked player is crowned Champion of the League, earning a place in next year’s
                    league chapter.
                </Typography>
                <Typography variant="body1">
                    <strong>League Chapter</strong>
                    <List>
                        <BulletListItem>
                            Chairman: Konrad Kazan Krzanowski
                        </BulletListItem>
                        <BulletListItem>
                            League Treasurer: Łukasz Jarochowski
                        </BulletListItem>
                    </List>
                </Typography>
                <Typography variant="body1">
                    <strong>Financing and Awards</strong><br/>Prize funds are pooled from organizer contributions,
                    transparently included in tournament fees.
                </Typography>
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
            <Grid2 size={6} id="liga-mistrzow-wyniki" className="text-section">
                <Typography variant="h5">Rise to the Top</Typography>
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

            <Grid2 size={6}>
                <ImageBlock
                    src="/static/3930be7d2fabf3b965578140851dd8d9.jpg"
                    alt="Fireborne Salamanders go to war!"
                    boxHeight="1004px"
                    imgHeight="1350px"
                    mt="290px"
                />
            </Grid2>

            <Grid2 size={6}>
                <Avatar
                    alt="Kings Of WarSAW logo"
                    src="/static/logo.jpg"
                    sx={{width: 270, height: 270}}
                />
            </Grid2>

        </Grid2>
        //     <section id="turnieje">
        //         <h2>Turnieje</h2>
        //         {/* Add content for the Turnieje section */}
        //     </section>
        //     <section id="kings-of-war-gt-2024">
        //         <h2>Kings Of War GT 2024</h2>
        //         {/* Add content for the Kings Of War GT 2024 section */}
        //     </section>
        //     <section id="kontakt">
        //         <h2>Kontakt</h2>
        //         {/* Add content for the Kontakt section */}
        //     </section>
        // </div>
    );
};

export default MainContent;


