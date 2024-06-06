import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar } from '@mui/material';
import principalImage from './resource/man.png'; // Import images for each faculty member
import vicePrincipalImage from './resource/man2.png';
import teacherImage from './resource/cat.png';

const FacultyList = () => {
    const facultyMembers = [
        { name: 'Principal', image: principalImage },
        { name: 'Vice Principal', image: vicePrincipalImage },
        { name: 'Teacher 1', image: teacherImage },
        { name: 'Teacher 2', image: teacherImage },
        { name: 'Teacher 3', image: teacherImage },
        // Add more faculty members here
    ];

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom color="textPrimary">
               <u>Faculty List</u>
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {facultyMembers.map((faculty, index) => (
                            <TableRow key={index}>
                                <TableCell>{faculty.name}</TableCell>
                                <TableCell>
                                    <Avatar alt={faculty.name} src={faculty.image} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default FacultyList;
