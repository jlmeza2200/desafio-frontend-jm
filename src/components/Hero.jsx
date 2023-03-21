import React from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import heroImage from '../assets/image1.jpeg';
import {shades} from '../../theme';

const Hero = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box>
    <img
      src={heroImage}
      alt='Hero Image'
      style={{
        width: "100%",
        height: "700px",
        objectFit: "cover",
        backgroundAttachment: "fixed",
      }}
    />
    <Box
      color="white"
      padding="20px"
      borderRadius="1px"
      textAlign="left"
      backgroundColor="rgb(0, 0, 0, 0.4)"
      position="absolute"
      top="46%"
      left={isNonMobile ? "10%" : "0"}
      right={isNonMobile ? undefined : "0"}
      margin={isNonMobile ? undefined : "0 auto"}
      maxWidth={isNonMobile ? undefined : "240px"}
    >
      <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
      <Typography variant="h1">Summer Sale</Typography>
      <Typography
        fontWeight="bold"
        color={shades.secondary[300]}
        sx={{ textDecoration: "underline" }}
      >
        Discover More
      </Typography>
    </Box>
  </Box>
  )
}

export default Hero