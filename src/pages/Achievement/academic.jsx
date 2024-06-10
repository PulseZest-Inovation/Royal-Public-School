import { Avatar, Box, Grid, Paper, Slide, Typography } from '@mui/material';
import React from 'react';
import One from '../../Assets/12.jpg';
import A from '../../Assets/a.jpg';
import B from '../../Assets/b.png';
import C from '../../Assets/c.png';
import D from '../../Assets/d.png';
import E from '../../Assets/e.jpg';
import F from '../../Assets/f.png';

const Academic = () => {
  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', mb: 3, mt: -5 }}>
        <img
          src={One}
          alt="Decorative background of the founder page"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </Box>
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
      <Grid container spacing={4}>
        {/* Team Member 1 */}
        <Slide direction="up" in={true} timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
                      alt="B"
                      src= {B}
                      sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
                    />
              <Typography variant="h6" component="h3">
                Dhruv
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (95% in 12th)
              </Typography>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 2 */}
        <Slide direction="up" in={true} timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
                      alt="A"
                      src= {A}
                      sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
                    />              
                    <Typography variant="h6" component="h3">
                Nidhi
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (93% in 12th)
              </Typography>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 3 */}
        <Slide direction="up" in={true} timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
                      alt="C"
                      src= {C}
                      sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
                    />              
                    <Typography variant="h6" component="h3">
                Ridhi
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (97% in 12th)
              </Typography>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 4 */}
        <Slide direction="up" in={true} timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
                      alt="E"
                      src= {E}
                      sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
                    />              
                    <Typography variant="h6" component="h3">
                Rahul
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (92% in 12th)
              </Typography>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 5 */}
        <Slide direction="up" in={true} timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
                      alt="D"
                      src= {D}
                      sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
                    />              
                    <Typography variant="h6" component="h3">
                Yashika
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (99.8% in 12th)
              </Typography>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 6 */}
        <Slide direction="up" in={true} timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
                      alt="F"
                      src= {F}
                      sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
                    />             
                     <Typography variant="h6" component="h3">
                Shubham
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (96% in 12th)
              </Typography>
            </Paper>
          </Grid>
        </Slide>
      </Grid>

      {/* Spacer Box */}
      <Box sx={{ height: '50px' }} />
    </>
  );
}

export default Academic;
