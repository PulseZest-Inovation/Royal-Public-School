import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import React from 'react';
import One from '../../Assets/12.jpg';

export default function Founder() {
  return (
    <>
      {/* Photo at the top of the page covering full width */}
      <Box sx={{ 
        position: 'sticky', 
        width: '100%', 
        height: '250px', // Adjust height as needed
        overflow: 'hidden', 
        mb: 2,
        mt: -5 
      }}>
       <img 
  src={One} 
  alt="Decorative background of the founder page"
  style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    minWidth: '100%', 
    minHeight: '100%', 
    width: 'auto', 
    height: 'auto', 
    zIndex: -1 
  }} 
/>
      </Box>

    {/* Rest of the content */}
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={5}>
          <Slide direction="right" in={true} timeout={3000}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'center', mb: 2 }}>
           
            </Paper>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Slide direction="left" in={true} timeout={3000}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'justify', mb: 2 }}>
            <Typography 
  variant="h4" 
  component="h3" 
  sx={{ fontWeight: 'bold' }} // Adds bold styling
>
  Mrs. Indira Lohia
</Typography>
<hr 
  className="w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 line-shifted"
  style={{ marginLeft: 0, marginRight: 'auto' }} // Adjust margin styles
/>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }} >
                President & Director
              </Typography><br/>
              <Typography variant="body1" paragraph>
                For us, education is an umbrella term which has a wide range of purposeful pursuits and we, at Vidya Mandir, focus on them with great diligence.
              </Typography>
              <Typography variant="body1" paragraph>
                We always wish to groom our students into global citizens and we know that academics solely cannot lead us in the race. The school, therefore, aims at holistic development with a firm belief that every child deserves a vibrant & creative environment to explore his dormant potential.
              </Typography>
              <Typography variant="body1">
                I believe that Vidya Mandir has now become a landmark which delivers world class education embedded with all the facilities that a child needs for his/her grooming.
              </Typography>
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
