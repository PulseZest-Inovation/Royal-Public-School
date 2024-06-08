import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React from 'react';

const AdmissionForm = () => {
    console.log('AdmissionForm component rendered');

    return (
        <div style={{ backgroundColor: '#f8f8f8', padding: '20px' }}>
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
    textAlign: 'left' // Adjusted textAlign

  }}
>
  Fee Structure
</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#87a2b7' }}>
                            <TableCell style={{ color: '#fff' }}>Fee</TableCell>
                            <TableCell style={{ color: '#fff' }}>NUR-UKG</TableCell>
                            <TableCell style={{ color: '#fff' }}>I - III<br />with Basic AI</TableCell>
                            <TableCell style={{ color: '#fff' }}>IV - V<br />with Basic AI</TableCell>
                            <TableCell style={{ color: '#fff' }}>VI - VIII<br />with Artificial<br />Intelligence</TableCell>
                            <TableCell style={{ color: '#fff' }}>IX - X<br />with Artificial<br />Intelligence</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow style={{ backgroundColor: '#ecf7fc' }}>
                            <TableCell style={{ color: '#000' }}>Registration Fee<br />(Application Form)</TableCell>
                            <TableCell style={{ color: '#000' }}>₹300/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹300/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹300/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹300/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹300/-</TableCell>
                        </TableRow>
                        <TableRow style={{ backgroundColor: '#daeff8' }}>
                            <TableCell style={{ color: '#000' }}>Admission Fee<br />(at the time of admission)</TableCell>
                            <TableCell style={{ color: '#000' }}>₹3000/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹3500/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹4000/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹5000/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹6000/-</TableCell>
                        </TableRow>
                        <TableRow style={{ backgroundColor: '#ecf7fc' }}>
                            <TableCell style={{ color: '#000' }}>Activity / Lab Fee<br />(at the time of admission)</TableCell>
                            <TableCell style={{ color: '#000' }}>₹1500/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹2000/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹2500/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹3000/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹6000/-</TableCell>
                        </TableRow>
                        <TableRow style={{ backgroundColor: '#daeff8' }}>
                            <TableCell style={{ color: '#000' }}>Annual Fee<br />(50% at the time of admission)</TableCell>
                            <TableCell style={{ color: '#000' }}>₹3500/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹4000/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹4500/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹5000/-</TableCell>
                            <TableCell style={{ color: '#000' }}>₹10000/-</TableCell>
                        </TableRow>
                        <TableRow style={{ backgroundColor: '#ecf7fc' }}>
                            <TableCell style={{ color: '#000' }}>Tuition Fee<br />(per month)</TableCell>
                            <TableCell style={{ color: '#000' }}>₹1000/-<br />x 12 months</TableCell>
                            <TableCell style={{ color: '#000' }}>₹1100/-<br />x 12 months</TableCell>
                            <TableCell style={{ color: '#000' }}>₹1300/-<br />x 12 months</TableCell>
                            <TableCell style={{ color: '#000' }}>₹1600/-<br />x 12 months</TableCell>
                            <TableCell style={{ color: '#000' }}>₹2100/-<br />x 12 months</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br></br>
            <Box p={3} bgcolor="#f9f9f9" borderRadius={8} boxShadow={3}>
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
    textAlign: 'left' // Adjusted textAlign

  }}
>
Fee Criteria
</Typography>
                <Typography variant="body1" gutterBottom color="textPrimary">
                    <strong>1. ADMISSION FEE:</strong> At the time of admission, ADMISSION FEE, LAB/ACTIVITY FEE, 50% ANNUAL FEE, and ONE MONTH'S TUITION FEE has to be deposited. The remaining 50% ANNUAL FEE will have to be deposited in the first week of September.
                </Typography>
                <Typography variant="body1" gutterBottom color="textPrimary">
                    <strong>2. TUITION FEE [Monthly]:</strong> TUITION FEE has to be deposited within the first 10 days of each month.
                </Typography>
                <Typography variant="body1" gutterBottom color="textPrimary">
                    <strong>3. Office Timing:</strong> 09:00 AM to 01:00 PM.
                </Typography>
                <Typography variant="body1" gutterBottom color="textPrimary">
                    <strong>4. Late Fees:</strong> In case of non-payment by the due date, late fees of Rs 10/- per day (including holidays) will be charged for the upcoming days until the action for striking-off is initiated as per rules.
                </Typography>
            </Box>
            <br></br>

            {/* Student Admission Form */}
            <Box p={3} bgcolor="#f9f9f9" borderRadius={8} boxShadow={3}>
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
    textAlign: 'left' // Adjusted textAlign

  }}
>
Student Admission Form
</Typography>
                <form>
                    <TextField
                        id="studentName"
                        label="Student Name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        id="parentName"
                        label="Parent/Guardian Name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        id="contactNumber"
                        label="Contact Number"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        id="dateOfBirth"
                        label="Date of Birth"
                        type="date"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="address"
                        label="Address"
                        multiline
                        rows={4}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Box>


        </div>
    );
};

export default AdmissionForm;