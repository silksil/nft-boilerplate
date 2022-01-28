import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';

import { MotionInView, varFadeInUp } from '../../components/animate';
import { PuutMarquee } from '../PuutMarquee';
import { PutzieMarquee } from '../PutzieMarquee';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

export function LandingIntroduction() {
  return (
    <RootStyle>
      <Container maxWidth="sm" sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Meet the Squat
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography>Wide P. — aka leader of the North — has failed to be the world leader of the real world, and now has his eyes on the Metaverse. Together with his team, The Putzies, he plans to conquer this new land.</Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="1400px" sx={{ mt: 10, maxWidth: 2200 }}>
        <PuutMarquee />
        <PutzieMarquee />
      </Container>
    </RootStyle>
  );
}
