import React from 'react';

const Calendar = () => {
  const styles = {
    container: {
      marginTop: '2rem',
      textAlign: 'center',
    },
    title: {
      marginBottom: '1rem',
      fontFamily: 'Arial Black',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem',
    },
    header: {
      background: '#555',
      color: '#ffffff',
      padding: '12px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headerRow: {
      background: '#777',
      color: '#ffffff',
      padding: '12px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      background: '#F8F8F8',
      padding: '12px',
      textAlign: 'center',
      color: '#333', // Dark gray text color
    },
    rowAlt: {
      background: '#D9EAD3',
      padding: '12px',
      textAlign: 'center',
      color: '#333', // Dark gray text color
    },
    cell: {
      border: '1px solid #333',
    },
  };

  return (
    <div style={styles.container}>
  <h2 style={styles.title}>Calendar</h2>
  <table style={styles.table}>
    <thead>
      <tr style={styles.headerRow}>
        <th style={styles.header}>Date</th>
        <th style={styles.header}>Event</th>
      </tr>
    </thead>
    <tbody>
      <tr style={styles.row}>
        <td style={styles.cell}>June 15, 2024</td>
        <td style={styles.cell}>Sports Day</td>
      </tr>
      <tr style={styles.rowAlt}>
        <td style={styles.cell}>July 20, 2024</td>
        <td style={styles.cell}>Science Fair</td>
      </tr>
      <tr style={styles.row}>
        <td style={styles.cell}>August 10, 2024</td>
        <td style={styles.cell}>Art Exhibition</td>
      </tr>
      <tr style={styles.rowAlt}>
        <td style={styles.cell}>September 5, 2024</td>
        <td style={styles.cell}>Maths Olympiad</td>
      </tr>
      <tr style={styles.row}>
        <td style={styles.cell}>October 12, 2024</td>
        <td style={styles.cell}>Music Concert</td>
      </tr>
      <tr style={styles.rowAlt}>
        <td style={styles.cell}>November 18, 2024</td>
        <td style={styles.cell}>Literary Fest</td>
      </tr>
      <tr style={styles.row}>
        <td style={styles.cell}>December 25, 2024</td>
        <td style={styles.cell}>Christmas Celebration</td>
      </tr>
      <tr style={styles.rowAlt}>
        <td style={styles.cell}>January 10, 2025</td>
        <td style={styles.cell}>New Year's Party</td>
      </tr>
      <tr style={styles.row}>
        <td style={styles.cell}>February 14, 2025</td>
        <td style={styles.cell}>Valentine's Day Event</td>
      </tr>
      <tr style={styles.rowAlt}>
        <td style={styles.cell}>March 20, 2025</td>
        <td style={styles.cell}>Spring Festival</td>
      </tr>
      <tr style={styles.row}>
        <td style={styles.cell}>April 7, 2025</td>
        <td style={styles.cell}>Annual Picnic</td>
      </tr>
  

          {/* Add more dates and events as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
