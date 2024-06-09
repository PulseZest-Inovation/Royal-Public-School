import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { motion } from 'framer-motion';
import React from 'react';
import One from '../../Assets/12.jpg';
import Two from '../../Assets/vprin.jpg';

const VicePrincipal = () => {
  const Photo = [{ src: Two }];

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', mb: 3, mt: -5 }}>
        <img src={One} alt="Decorative background of the founder page" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </Box>

      {/* Rest of the content */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={4}>
          <Slide direction="right" in={true} timeout={3000}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'center', mb: 2 }}>
              <div className="App">
                <motion.div className="carousel">
                  <motion.div>
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
                </motion.div>
              </div>
            </Paper>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Slide direction="left" in={true} timeout={3000}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'justify', mb: 2 }}>
              <Typography 
                variant="h4" 
                component="h3" 
                sx={{ fontWeight: 'bold' }}
              >
                Mrs. Sunita Gupta
              </Typography>
              <hr 
                className="w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 line-shifted"
                style={{ marginLeft: 0, marginRight: 'auto' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Vice Principal
              </Typography><br/>
              <Typography variant="body1" paragraph>
              Sunita Gupta, a compassionate educator with a wealth of experience, holds the position of Vice Principal at Royal Public School. Her nurturing approach and commitment to student success contribute to the school's holistic development efforts.              </Typography>
            </Paper>
          </Slide>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            © 2024 Vidya Mandir. All rights reserved.
          </Typography>
        </Paper>
      </Box>
    </>
  );
}

export default VicePrincipal;
