import { css } from '@emotion/react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Card, CardContent, Container, Fade, Grid, Slide, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

import One from '../../Assets/1.jpeg';
import Four from '../../Assets/11.jpeg';
import Two from '../../Assets/2.jpeg';
import Three from '../../Assets/3.jpeg';
import Six from '../../Assets/33.jpeg';

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const images = [
    { src: One, title: "Sports Day", description: "Join us for a fun-filled day of sports activities!", date: "June 15, 2024", link: "/events/sports-day" },
    { src: Two, title: "Science Fair", description: "Explore the wonders of science at our annual science fair!", date: "July 20, 2024", link: "/events/science-fair" },
    { src: Three, title: "Art Exhibition", description: "Discover creativity and talent at our art exhibition!", date: "August 10, 2024", link: "/events/art-exhibition" },
  ];

  const galleryImages = [
    { src: Four, title: "Gallery Image 1" },
    { src: Six, title: "Gallery Image 3" },
    { src: Four, title: "Gallery Image 4" },
    { src: Six, title: "Gallery Image 5" },
    { src: Four, title: "Gallery Image 6" },
    { src: Six, title: "Gallery Image 7" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setFadeKey((prevKey) => prevKey + 1);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setFadeKey((prevKey) => prevKey + 1);
  };

  const cardStyles = css`
    min-height: 300px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 2rem;
  `;

  const cardContentStyles = css`
    text-align: center;
    font-family: Arial Black, sans-serif;
  `;

  const planTitleStyles = css`
    color: #ffffff;
    font-size: 2rem;
    margin-top: 1rem;
    font-family: Arial Black, sans-serif;
  `;

  const cardBodyStyles = css`
    color: #6c757d;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: Arial Black, sans-serif;
  `;

  const sectionTitleStyles = css`
    font-family: Arial Black, sans-serif;
  `;

  const cardDetails = [
    {
      title: "Student’s Council",
      description: "Description for Student’s Council."
    },
    {
      title: "Admission Information",
      description: "Description for Admission Information."
    },
    {
      title: "Online Registration",
      description: "Description for Online Registration."
    },
  ];

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const buttonStyles = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 10;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  `;

  return (
    <div className="relative w-full h-full overflow-hidden mb-20">
      <Fade in={true} timeout={100} key={fadeKey}>
        <img 
          src={images[currentImageIndex].src} 
          alt={`Slide ${currentImageIndex + 1}`} 
          className="w-full h-auto object-cover max-h-[calc(100%-64px)] shadow-md transition-opacity duration-500" 
        />
      </Fade>

      <button
        onClick={prevSlide}
        css={css`
          ${buttonStyles};
          left: 1rem;
        `}
      >
        <ArrowBackIos />
      </button>

      <button
        onClick={nextSlide}
        css={css`
          ${buttonStyles};
          right: 1rem;
        `}
      >
        <ArrowForwardIos />
      </button>
      
      <Container>
        <br />
        <Slide direction="left" in timeout={1000}>
          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {cardDetails.slice(0, 3).map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card css={cardStyles}>
                    <CardContent css={cardContentStyles}>
                      <Typography variant="h5" css={planTitleStyles}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" css={cardBodyStyles}>
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Slide>
        <br />
        <Slide direction="right" in timeout={1000}>
          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {cardDetails.slice(3).map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card css={cardStyles}>
                    <CardContent css={cardContentStyles}>
                      <Typography variant="h5" css={planTitleStyles}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" css={cardBodyStyles}>
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Slide>
        <Slide direction="right" in timeout={1000}>
        <Grid container spacing={isSmallScreen  ? 2 : 4} style={{ backgroundColor: '#f5f5f5', padding: '2rem', paddingBottom: '4rem', marginTop: '2rem' }}>
          <Grid item xs={12} md={6} style={{ marginTop: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card css={cardStyles}>
                <CardContent css={cardContentStyles}>
                  <Typography variant="h5" css={planTitleStyles}>
                    ABOUT OUR SCHOOL
                  </Typography>
                  <Typography variant="body2" css={cardBodyStyles}>
                    RPS functions under the aegis of D.A.V. College Managing Committee which was enunciated in 1886 by the efforts of venerable RPS schools are run by the Dayanand Anglo Vedic Society on the principles of ‘Dispelling Ignorance and Promoting Knowledge.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card css={cardStyles}>
                <CardContent css={cardContentStyles}>
                  <Typography variant="h5" css={planTitleStyles}>
                    PRINCIPAL’S MESSAGE
                  </Typography>
                  <Typography variant="body2" css={cardBodyStyles}>
                    "Life always begins with one step outside of our comfort zone." - Shannon L. Alder.
                    Life is a perennial journey of excellence, infused with learning experiences. Every experience empowers the learner to be even more enriched with confidence. To thrive in the modern world.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
        </Slide>
        <Grid container spacing={isSmallScreen ? 2 : 4} style={{ backgroundColor: '#f5f5f5', padding: '2rem', paddingBottom: '4rem', marginTop: '2rem' }}>
          <Grid item xs={12}>
            <Typography
            variant="h4"
            style={{ marginBottom: '2rem', marginTop: '2rem' }}
            component="h2"
            className="font-bold text-center mb-4"
            sx={{
              fontFamily: "Arial Black",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
      Gallery
          </Typography>
          </Grid>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card css={cardStyles}>
                  <img src={image.src} alt={image.title} style={{ width: '100%', height: 'auto', borderRadius: '12px 12px 0 0' }} />
                  <CardContent css={cardContentStyles}>
                    <Typography variant="body2" css={cardBodyStyles}>
                      {image.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ImageSlider;

