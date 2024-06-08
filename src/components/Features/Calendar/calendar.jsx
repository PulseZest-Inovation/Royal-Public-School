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
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      background: 'linear-gradient(135deg, #87CEEB, #2196F3, #1E3F5E)',
      color: '#fff',
      padding: '12px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headerRow: {
      background: 'linear-gradient(135deg, #87CEEB, #2196F3, #1E3F5E)',
      color: '#fff',
      padding: '12px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      background: '#f8f8f8',
      padding: '12px',
      textAlign: 'center',
      color: '#333',
    },
    rowAlt: {
      background: '#b0c4de',
      padding: '12px',
      textAlign: 'center',
      color: '#333',
    },
    cell: {
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
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
