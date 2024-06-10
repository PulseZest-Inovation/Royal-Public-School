import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'tailwindcss/tailwind.css';
import backgroundImage from '../../Assets/1.jpeg';

const Contact = () => {
  const bareillyCoordinates = [28.367, 79.430];

  const [selectedClass, setSelectedClass] = React.useState('');

  const handleChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <Box className="relative flex justify-center items-center" sx={{ minHeight: '100vh', width: '100vw', overflow: 'hidden', position: 'relative', top: '-6vh', left: 0 }}>
    <Box className="absolute inset-0 z-0 overflow-hidden" style={{ width: '100%', height: '100%', position: 'fixed' }}>
      <img
        src={backgroundImage}
        alt="Background"
        className="w-full h-full object-cover opacity-100 blur-md"
        style={{ margin: 0, padding: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
      <Box className="relative z-10 p-8 max-w-2xl mx-auto" sx={{ paddingTop: 0 }}>
        <Typography
          variant="h4"
          component="h2"
          className="font-bold text-center mb-4"
          sx={{
            fontFamily: 'Arial Black',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#000000',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add text shadow
          }}
        ><br/>
          Contact Details
        </Typography><br/>
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Name"
                type="name"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
               
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                label="Phone"
                type="phone"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: '16px' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedClass}
                  label="Class"
                  onChange={handleChange}
                  required
                >
    <MenuItem value="">NUR-UKG</MenuItem>
    <MenuItem value="lkg">I-III</MenuItem>
    <MenuItem value="ukg">IV-V</MenuItem>
    <MenuItem value="1">VI-VIII</MenuItem>
    <MenuItem value="1">IX-X</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="subject"
                label="Subject"
                type="subject"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                type="message"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              
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
          <Typography
            variant="h4"
            component="h2"
            className="font-bold text-center mb-4"
            sx={{
              fontFamily: 'Arial Black',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#000000',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add text shadow
            }}
          >
            Our Location
            </Typography><br/>
          <Box className="h-64 sm:h-96 w-full rounded-lg overflow-hidden shadow-md">
            <MapContainer center={bareillyCoordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </Box>
          <Box mt={4}>
            <Typography variant="body1">
              <strong>Location:</strong> Royal Public Sr. Sec. School, Bareilly <br/>
              <strong>Email:</strong> royal.wazirpur@gmail.com <br/>
              <strong>Phone:</strong> Reception: 8745957957, Mobile: +91-9811934270, +91-9811934270
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;