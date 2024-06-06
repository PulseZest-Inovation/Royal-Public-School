import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box component="footer" sx={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={styles.section}>
              <Typography variant="h6" sx={styles.title}>Information</Typography>
              <Typography variant="body2" sx={styles.text}>
                Admissions<br />
                School Facilities<br />
                Gallery<br />
                Events<br />
                Career<br />
                Contact<br />
                Privacy Policy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={styles.section}>
              <Typography variant="h6" sx={styles.title}>Admissions</Typography>
              <Typography variant="body2" sx={styles.text}>
                Founder’s Vision<br />
                President’s Message<br />
                Vice President’s Message<br />
                Principal’s Message<br />
                Vision and Mission<br />
                Testimonial<br />
                School Profile<br />
                School Facilities <br />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={styles.section}>
              <Typography variant="h6" sx={styles.title}>School Facilities</Typography>
              <Typography variant="body2" sx={styles.text}>
                Affiliation<br />
                Curriculum & Academic Vision<br />
                Faculty<br />
                Pre-Primary Wing<br />
                Primary Wing<br />
                Middle Wing<br />
                Senior Wing<br />
                Virtual Learning<br />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={styles.section}>
              <Typography variant="h6" sx={styles.title}>Gallery</Typography>
              <Typography variant="body2" sx={styles.text}>
                Faridabad-121007, Haryana, India

                +91 1294100781, 4100782

                rps@gmail.com
              </Typography>
              
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={styles.section}>
              <Typography variant="h6" sx={styles.title}>Notice Board</Typography>
              <Typography variant="body2" sx={styles.text}>
                Latest announcements<br/>
                Important notices<br/>
                Upcoming events<br/>
                Exam schedules<br/>
                Holidays<br/>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1E3475', // Transparent background color
    color: '#fff',
    padding: '50px 0', // Increased padding to make the footer taller
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  section: {
    padding: '10px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontFamily: 'Arial Black', // Apply Arial Black font family
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    fontFamily: 'Arial',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  bottomBar: {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: '14px',
    color: '#aaa',
  },
};

export default Footer;
