import { Box, Grid, Paper, Slide, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import One from '../../Assets/12.jpg';
import Two from '../../Assets/founder.jpg';

const Founder = () => {
  const Photo = [{ src: Two }];

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', mb: 3, mt: -5 }}>
        <img src={One} alt="Decorative background of the founder page" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={4}>
          <Slide direction="right" in={true} timeout={3000}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'center', mb: 2 }}>
              <motion.div className="carousel">
                {Photo.map((photo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 2 }}
                  >
                    <img src={photo.src} alt={`carousel ${index}`} />
                  </motion.div>
                ))}
              </motion.div>
            </Paper>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Slide direction="left" in={true} timeout={3000}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'justify', mb: 2 }}>
              <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold' }}>Mrs. Kamala Devi</Typography>
              <hr className="w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 line-shifted" style={{ marginLeft: 0, marginRight: 'auto' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Founder</Typography>
              <Typography variant="body1" paragraph>
              Kamala Devi, a visionary educator deeply rooted in Indian traditions, established Royal Public School with a mission to blend modern education with cultural values, fostering holistic development.              </Typography>
           
            </Paper>
          </Slide>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">© 2024 Vidya Mandir. All rights reserved.</Typography>
        </Paper>
      </Box>
    </>
  );
}

export default Founder;
