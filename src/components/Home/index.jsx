import { css } from '@emotion/react';
import {
  Box,Button,  Card,  CardContent,Container,Fade,Grid,Slide,Typography,useMediaQuery,useTheme,} from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link, useNavigate } from 'react-router-dom';
import './marqueeComponent.css'; // Import CSS file for styling

// All Features
import Calendar from '../Features/Calendar/calendar';
import FacultyList from '../Features/Faculty/FacultyList';
import NoticeBoard from '../Features/NoticeBoard/noticeBoard';

// All Images
import One from '../../Assets/1.jpeg';
import Four from '../../Assets/11.jpeg';
import Two from '../../Assets/2.jpeg';
import Three from '../../Assets/3.jpeg';
import Six from '../../Assets/33.jpeg';

const ImageSlider = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [showAdmissionForm, setShowAdmissionForm] = useState(false);

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

  const handleAdmissionButtonClick = () => {
    setShowAdmissionForm(true);
    navigate('/admission');
  };

  const buttonContainerStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  };

  const admissionButtonStyles = {
    backgroundColor: '#87a2b7',
    color: 'black', // Set text color to black
    borderRadius: '50%',
    padding: '10px',
    fontSize: '24px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
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
    font-family: 'Arial Black', sans-serif;
  `;

  const planTitleStyles = css`
    color: #ffffff;
    font-size: 2rem;
    margin-top: 1rem;
    font-family: 'Arial Black', sans-serif;
  `;

  const cardBodyStyles = css`
    color: #6c757d;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'Arial Black', sans-serif;
  `;

  const containerVariants = {
    hidden: { opacity: 5, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
    },
  };

  return (
    <div className="relative w-full h-full overflow-hidden mb-20">
     <div className="marquee-container">
      <h1 className="marquee-text">Registration are open!</h1>
    </div>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            borderRadius: 0,
          }
        }}
        
        // Fix navigation button styles
        navButtonsWrapperProps={{
          style: {
            position: 'absolute',
            top: 'calc(50% - 20px)', // Center vertically
            height: '40px',
            zIndex: 1,
          }
        }}
        indicatorIconButtonProps={{
          style: {
            color: 'rgba(255, 255, 255, 0.5)', // Style for inactive indicators
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'white', // Style for active indicator
          }
        }}
        indicatorContainerProps={{
          style: {
            marginTop: '10px', // Adjust space between image and indicators
            textAlign: 'center', // Center indicators
          }
        }}
      >
        {images.map((image, index) => (
          <Fade in={true} timeout={500} key={index}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover max-h-[calc(100%-64px)] shadow-md transition-opacity duration-500"
            />
          </Fade>
        ))}
      </Carousel>

      {/* Admission Button */}
      <Box sx={buttonContainerStyles}>
        <Box borderRadius="50%" bgcolor="white" boxShadow="0 0 10px rgba(0, 0, 0, 0.5)">
          <Button component={Link} to="/admission" variant="contained" sx={admissionButtonStyles}>
            Admission
          </Button>
        </Box>
      </Box>

      <Container>
        <br />
        <Slide direction="left" in timeout={1000}>
          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {images.map((card, index) => (
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={isSmallScreen ? 2 : 4} style={{ backgroundColor: '#f5f5f5', padding: '2rem', paddingBottom: '4rem', marginTop: '2rem' }}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  marginBottom: '2rem',
                  marginTop: '2rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add text shadow
                }}
                component="h2"
                className="font-bold text-center mb-4"
                sx={{
                  fontFamily: 'Arial Black',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#000000',
                }}
              >
                Gallery
              </Typography>
            </Grid>
            {galleryImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
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
        </motion.div>

        <Grid container spacing={2}>
          {/* Notice Board */}
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                variant="h4"
                style={{
                  marginBottom: '2rem',
                  marginTop: '2rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add text shadow
                }}
                component="h2"
                className="font-bold text-center mb-4"
                sx={{
                  fontFamily: 'Arial Black',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#000000',
                }}
              >
                Notice Board
              </Typography>

              {/* Notice Board Component */}
              <NoticeBoard />
              {/* Notice Board Component */}
            </div>
          </Grid>

          {/* Calendar */}
          <Grid item xs={12} md={6}>
            <div style={{ marginTop: '2rem' }}>
              <Typography
                variant="h4"
                style={{
                  marginBottom: '2rem',
                  marginTop: '2rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add text shadow
                }}
                component="h2"
                className="font-bold text-center mb-4"
                sx={{
                  fontFamily: 'Arial Black',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#000000',
                }}
              >
                Upcoming Events
              </Typography>
              <Container>
                {/* Calendar Component */}
                <Calendar />
              </Container>
            </div>
          </Grid>

          <Grid container spacing={isSmallScreen ? 2 : 4} style={{ backgroundColor: '#f5f5f5', padding: '2rem', paddingBottom: '4rem', marginTop: '2rem' }}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  marginBottom: '2rem',
                  marginTop: '2rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add text shadow
                }}
                component="h2"
                className="font-bold text-center mb-4"
                sx={{
                  fontFamily: 'Arial Black',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#000000',
                }}
              >
                Scholars
              </Typography>

              <Grid container spacing={isSmallScreen ? 2 : 4} style={{ backgroundColor: '#f5f5f5', padding: '2rem', paddingBottom: '4rem', marginTop: '2rem' }}>
                <FacultyList /> {/* Use FacultyList component */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageSlider;
