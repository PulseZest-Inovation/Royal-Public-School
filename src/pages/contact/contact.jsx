import { Box, Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'tailwindcss/tailwind.css';
import backgroundImage from '../../Assets/1.jpeg';

const Contact = () => {
  const bareillyCoordinates = [28.367, 79.430];

  return (
    <Box className="relative" sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Box className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-100 blur-md"
        />
      </Box>
      <Box className="relative z-10 p-8 max-w-2xl mx-auto">
        <Typography variant="h3" component="h2" className="mb-6 text-center text-indigo-600">Contact Details</Typography>
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputLabel id="class-select-label">Name</InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="class-select-label">Email</InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="class-select-label">Phone</InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="class-select-label">Class</InputLabel>
              <Select
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="">NUR-UKG</MenuItem>
                <MenuItem value="lkg">I-III</MenuItem>
                <MenuItem value="ukg">IV-V</MenuItem>
                <MenuItem value="1">VI-VIII</MenuItem>
                <MenuItem value="1">IX-X</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="class-select-label">Subject</InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="class-select-label">Message</InputLabel>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
       
        <Box mt={8}>
          <Typography variant="h3" component="h2" className="mb-6 text-center text-indigo-600">Our Location</Typography>
          <Box className="h-64 sm:h-96 w-full rounded-lg overflow-hidden shadow-md">
            <MapContainer center={bareillyCoordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </Box>
          <Box mt={4}>
            <Typography variant="h5" component="h3" className="mb-2">Location</Typography>
            <Typography variant="body1">Royal Public Sr. Sec. School, Bareilly</Typography>
            <Typography variant="h5" component="h3" className="mt-4 mb-2">Email</Typography>
            <Typography variant="body1">royal.wazirpur@gmail.com</Typography>
            <Typography variant="h5" component="h3" className="mt-4 mb-2">Phone</Typography>
            <Typography variant="body1">Reception: 8745957957</Typography>
            <Typography variant="body1">Mobile: +91-9811934270, +91-9811934270</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;