import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, alpha } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: theme.spacing(-3),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(10)
  }
}));

const Heading = styled(Typography)(({ theme }) => ({}));

const SectionTitle = styled((props) => <Typography variant="body2" {...props} />)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(0.5)
}));

const SectionText = styled((props) => <Typography variant="body2" {...props} />)(({ theme }) => ({}));

const SectionContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  minHeight: "200px",
  background: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.shape.borderRadiusMd,
  padding: theme.spacing(1, 2),

  [theme.breakpoints.up("md")]: {
    minHeight: "265px",
    padding: theme.spacing(3, 2)
  }
}));

const GridItem = ({ children }) => (
  <Grid item xs={12} md={4}>
    {children}
  </Grid>
);

export function LandingMission() {
  return (
    <RootStyle id="mission_section">
      <Container maxWidth="xl" sx={{ zIndex: 1, position: "relative" }}>
        <MotionInView variants={varFadeInUp}>
          <Heading variant="h2" textAlign="center" sx={{ mb: 1 }}>
            Support Ukraine 🇺🇦
          </Heading>
          <Typography sx={{ mb: { xs: 2, md: 4 } }} textAlign="center">
            100% of primary sales and <br />
            royalties go to Ukraine
          </Typography>
        </MotionInView>

        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          <GridItem>
            <SectionContainer>
              <SectionTitle>How does it work?</SectionTitle>
              <SectionText>
                Whereas the collection has a funny tone, the cause is not. The intention of this initiative is not to downplay the seriousness of the war in Ukraine. Instead, we want to offer an alternative way to help Ukraine. All income will be distributed through{" "}
                <a href="https://www.ukrainedao.love/" target="_blank" rel="noreferrer">
                  UkraineDao
                </a>{" "}
                to the people in Ukraine. UkraineDao is a blockchain initiative aimed at distributing donations to Ukraine.
              </SectionText>
            </SectionContainer>
          </GridItem>
          <GridItem>
            <SectionContainer>
              <SectionTitle>Is this not a scam?</SectionTitle>
              <SectionText>
                Given the many scammers and false promises in the NFT space, we want to assure you that our intentions are genuine by having hardcoded that money withdrawn directly goes to the wallet of UkraineDao. This is immutable: see{" "}
                <a href={`${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}#code`} target="_blank" rel="noreferrer">
                  line 129 of the smart contract
                </a>
                . Below you can also find our social profiles so we can be held accountable.
              </SectionText>
            </SectionContainer>
          </GridItem>
          <GridItem>
            <SectionContainer>
              <SectionTitle>Why not just donate?</SectionTitle>
              <SectionText>We aim to provide an alternative for helping the people of Ukraine and want to demonstrate that NFTs are a way to accomplish meaningful effects in the real world. If just one person would buy an NFT, that would otherwise have not donated, this project has fulfilled its purpose.</SectionText>
            </SectionContainer>
          </GridItem>
        </Grid>
      </Container>
    </RootStyle>
  );
}
