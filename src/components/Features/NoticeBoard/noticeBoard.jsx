import React from 'react';

const NoticeBoard = () => {
  // Dummy data for notices
  const notices = [
    { id: 1, title: "Notice 1", content: "Please be informed that classes will be canceled tomorrow." },
    { id: 2, title: "Notice 2", content: "The school picnic has been rescheduled to next Saturday." },
    { id: 3, title: "Notice 3", content: "Don't forget to submit your assignments by the end of this week." },
    { id: 4, title: "Notice 4", content: "All classes are canceled today. Just kidding ." },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {notices.map((notice, index) => (
          <div 
            className="p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-100 to-blue-200" 
            key={notice.id}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{notice.title}</h3>
            <p className="text-gray-700">{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
