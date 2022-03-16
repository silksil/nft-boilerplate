import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, alpha } from "@mui/material";

import { MotionInView, varFadeInUp } from "../../components/animate";
import { VladimirMarquee } from "../VladimirMarquee";
import { KmbMarquee } from "../KmbMarquee";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(() => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const MarqueeContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  maxWidth: 900,
  [theme.breakpoints.up("md")]: {
    maxWidth: 1200
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: 1600
  }
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main)
}));

const CollectionType = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadiusMd,
  padding: theme.spacing(3),
  width: "100%",
  height: "100%",
  opacity: "10",
  textAlign: "center",
  background: alpha(theme.palette.primary.main, 0.1),
  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.4)
  },

  [theme.breakpoints.up("sm")]: {
    textAlign: "left"
  }
}));

const Percentage = styled((props) => <Typography {...props} />)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  right: theme.spacing(3),
  color: theme.palette.primary.main
}));

export function LandingSquat() {
  return (
    <RootStyle>
      <Container maxWidth="md" sx={{ position: "relative" }}>
        <MotionInView variants={varFadeInUp}>
          <Heading variant="h2">The Collection</Heading>
          <Typography sx={{ mb: 1 }}>10.000 characters. All unique.</Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="sm" sx={{ mt: 2 }}>
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <CollectionType>
                <Typography fontWeight="bold">KMBs</Typography>
                <Percentage variant="caption">95%</Percentage>
                <Typography variant="body2">By owning a KMB you are financing him/her in the fight against Vlad.</Typography>
              </CollectionType>
            </Grid>
            <Grid item xs={12} md={6}>
              <CollectionType>
                <Typography fontWeight="bold">Vladimirs</Typography>
                <Percentage variant="caption">5%</Percentage>

                <Typography variant="body2">By owning a Vladimir, you are doing the one thing he hates: being owned by others.</Typography>
              </CollectionType>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>
      <MarqueeContainer>
        <Box mb={3}>
          <KmbMarquee />
        </Box>
        <VladimirMarquee />
      </MarqueeContainer>
    </RootStyle>
  );
}
