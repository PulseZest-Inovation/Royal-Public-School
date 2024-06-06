import React from 'react';
import './notice.css';
const NoticeBoard = () => {
  // Dummy data for notices
  const notices = [
    { id: 1, title: "Notice 1", content: "Please be informed that classes will be canceled tomorrow." },
    { id: 2, title: "Notice 2", content: "The school picnic has been rescheduled to next Saturday." },
    { id: 3, title: "Notice 3", content: "Don't forget to submit your assignments by the end of this week." },
    { id: 4, title: "Notice 4", content: "All Class Cancel today I'm just joking 😁." },
  ];
  

  return (
    <div className="notice-board">
      <h2>Notice Board</h2>
      <div className="notice-list">
        {notices.map(notice => (
          <div className="notice" key={notice.id}>
            <h3>{notice.title}</h3>
            <p>{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
