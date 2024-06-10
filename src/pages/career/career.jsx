import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React, { useRef, useState } from 'react';
import backgroundImage from '../../Assets/1.jpeg';

const Career = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to upload the selected file
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your upload logic here
    } else {
      console.log('No file selected');
    }
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
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
        >
          Job Application Form
        </Typography><br/>
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Name"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                className="mb-2"
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
                className="mb-2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                label="Phone"
                type="tel"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                className="mb-2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Applied Post</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedClass}
                  label="Applied Post"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="PRT">PRT</MenuItem>
                  <MenuItem value="PGT">PGT</MenuItem>
                  <MenuItem value="TGT">TGT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleFileUploadClick}
                startIcon={<AttachFileIcon />}
                fullWidth
              >
                Upload Resume
              </Button>
              {selectedFile && (
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                  Selected file: {selectedFile.name}
                </Typography>
              )}
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
      </Box>
    </Box>
  );
}

export default Career;