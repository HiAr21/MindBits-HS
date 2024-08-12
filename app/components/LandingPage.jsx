// pages/index.js
'use client'
import * as React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  textAlign: 'center',
}));

const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
}));

const PricingSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.grey[200],
}));

const PricingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

export default function LandingPage() {
  return (
    <React.Fragment>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            Supercharge Your Learning with <Typography variant="h4" gutterBottom color={"black"}>MindBits</Typography>
          </Typography>
          <Typography variant="h5" paragraph>
            Create flashcards effortlessly and enhance your study sessions with our powerful SaaS platform.
          </Typography>
          <SignedOut>
            <Box mt={4}>
              <Button variant="contained" color="secondary" size="large" sx={{ mr: 2 }} >
                <Link href={'/sign-up'}>Sign Up</Link>
              </Button>
              <Button variant="outlined" color="inherit" size="large">
                <Link href={'/sign-in'}>Login</Link>
              </Button>
            </Box>
          </SignedOut>
          <SignedIn>
            <Button variant="contained" color="secondary" size="large" sx={{ mr: 2 }}>
              <Link href={'/create-new-flashcard'}>Create Flashcard</Link>
            </Button>
            <Button variant="contained" color="secondary" size="large" sx={{ mr: 2 }}>
              <Link href={'/view-flashcards'}>View Your Flashcard</Link>
            </Button>
          </SignedIn>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h6">Easy Text Input</Typography>
                <Typography variant="body1">
                  Quickly create flashcards by entering text and let our system handle the rest.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h6">Smart Categorization</Typography>
                <Typography variant="body1">
                  Automatically categorize your flashcards for organized study sessions.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h6">Cross-Platform Sync</Typography>
                <Typography variant="body1">
                  Access your flashcards from any device, anytime, anywhere.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </FeaturesSection>

      <PricingSection>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Pricing
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={4}>
            <Grid item xs={12} md={4}>
              <PricingCard elevation={3}>
                <Typography variant="h6">Free</Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                  $0
                </Typography>
                <Typography variant="body1" paragraph>
                  Basic features for casual users.
                </Typography>
                <Button variant="contained" color="primary">
                  Get Started
                </Button>
              </PricingCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <PricingCard elevation={3}>
                <Typography variant="h6">Pro</Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                  $9.99/mo
                </Typography>
                <Typography variant="body1" paragraph>
                  Advanced features for serious learners.
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Pro
                </Button>
              </PricingCard>
            </Grid>
          </Grid>
        </Container>
      </PricingSection>
    </React.Fragment>
  );
}
