import Head from "next/head";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cheuk Hong&apos;s Personal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "85vh" }}
        >
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="100%"
              image="Picture1.jpg"
              alt="Cheuk Hong LOK"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h4" component="div">
                Cheuk Hong LOK
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A Full-Time Student Majoring in Computer Engineering at The Hong
                Kong University of Science and Technology
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </main>
    </div>
  );
}
