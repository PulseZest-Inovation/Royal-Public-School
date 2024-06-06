import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const dummyData = [
  { id: 1, name: "John Doe", score: 95 },
  { id: 2, name: "Jane Smith", score: 92 },
  { id: 3, name: "David Brown", score: 90 },
  { id: 4, name: "Emily Johnson", score: 89 },
  { id: 5, name: "Michael Davis", score: 88 },
];

const TopperList = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" gutterBottom color="textPrimary">
        Topper List
      </Typography>
      {dummyData.map((student) => (
        <Box key={student.id} display="flex" alignItems="center" justifyContent="space-between" width="80%" bgcolor="#f0f0f0" borderRadius="10px" padding="10px" marginBottom="10px">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: '#007bff', marginRight: '10px' }}>{student.name.slice(0, 1)}</Avatar>
            <Typography variant="body1" color="textPrimary">{student.name}</Typography>
          </Box>
          <Typography variant="body1" color="textPrimary">{student.score}%</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TopperList;
