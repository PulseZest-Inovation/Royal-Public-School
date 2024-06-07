import { Avatar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import React from 'react';

const FacultyList = () => {
    const facultyMembers = [
    
    ];

    return (
        <Grid container spacing={4}>
        {/* Team Member 1 */}
        <Slide direction="up" in timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" component="h3">
              Dhruv
              </Typography>
              <Typography variant="body2" color="textSecondary">
            (95% in 12th)
              </Typography>
              <div style={{ textAlign: 'justify' }}>
              
              </div>
            </Paper>
          </Grid>
        </Slide>
              {/* Team Member 2 */}
              <Slide direction="up" in timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" component="h3">
              Nidhi 
              </Typography>
              <Typography variant="body2" color="textSecondary">
              (93% in 12th)
              </Typography>
              <div style={{ textAlign: 'justify' }}>

              </div>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 3 */}
        <Slide direction="up" in timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" component="h3">
                Ridhi 
              </Typography>
              <Typography variant="body2" color="textSecondary">
              (97% in 12th)
              </Typography>
              <div style={{ textAlign: 'justify' }}>
              </div>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 4 */}
        <Slide direction="up" in timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" component="h3">
                Rahul              </Typography>
              <Typography variant="body2" color="textSecondary">
              (92% in 12th)

              </Typography>
              <div style={{ textAlign: 'justify' }}>
                
                  </div>

            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 5 */}
        <Slide direction="up" in timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" component="h3">
                Yashika 
              </Typography>
              <Typography variant="body2" color="textSecondary">
              (99.8% in 12th)
              </Typography>
              <div style={{ textAlign: 'justify' }}>
               </div>
            </Paper>
          </Grid>
        </Slide>
        {/* Team Member 6 */}
        <Slide direction="up" in timeout={3000}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" component="h3">
                Srishti
              </Typography>
              <Typography variant="body2" color="textSecondary">
              (96% in 12th)
              </Typography>
              <div style={{ textAlign: 'justify' }}>
              </div>
            </Paper>
          </Grid>
        </Slide>
      </Grid>
  
    );
};

export default FacultyList;
