import React from 'react';
import '../styles/Card.css';
import profilepic from '../images/profile.png';

// function Card({ id, title, status, priority, userName, tags }) {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <span className="card-id">{id}</span>
//         <h3 className="card-title">{title}</h3>
//         <div className="user-avatar">
//           <img src={profilepic} alt="User Avatar" />
//         </div>
//       </div>
//       <div className="card-body">
//         <p>Status: {status}</p>
//         <p>Priority: {priority}</p>
//       </div>
//       <div className="card-footer">
//         <div className="feature-label">
//           {tags.map((tag, index) => (
//             <span key={index} className="tag">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;



// function Card({ id, title, status, priority, priorityIcon, userName, tags = [] }) {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <span className="card-id">{id}</span>
//         <h3 className="card-title">{title}</h3>
//         <div className="user-avatar">
//           <img src={profilepic} alt="User Avatar" />
//         </div>
//       </div>
//       <div className="card-body">
//         <p>Status: {status}</p>
//         <p>Priority: {priority}</p>
//       </div>
//       <div className="card-footer">
//         <div className="feature-label">
//         <div className="priority-icon">
//           <img src={priorityIcon} alt={priority} className="priority-icon-image" />
//         </div>
//           {tags.length > 0 ? (
//             tags.map((tag, index) => (
//               <span key={index} className="tag">
//                 {tag}
//               </span>
//             ))
//           ) : (
//             <span>No Tags</span> 
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import doneIcon from "../images/Done.svg";
import inProgressIcon from "../images/in-progress.svg";
import cancelledIcon from "../images/Cancelled.svg";
import todoIcon from "../images/To-do.svg";
import backlogIcon from "../images/Backlog.svg";
import lowIcon from "../images/Img - Low Priority.svg";
import mediumIcon from "../images/Img - Medium Priority.svg";
import highIcon from "../images/Img - High Priority.svg";
import urgentIcon from "../images/SVG - Urgent Priority colour.svg";
import noPriorityIcon from "../images/No-priority.svg";


function Card({ id, title, status, priority, priorityIcon, userName, tags = [], grouping }) {
  // Map for status icons (for status grouping)
  const statusIcons = {
    "Done": doneIcon,
    "In progress": inProgressIcon,
    "Cancelled": cancelledIcon,
    "Todo": todoIcon,
    "Backlog": backlogIcon,
  };

  // Map for priority icons (for priority grouping)
  const priorityIcons = {
    "Low": lowIcon,
    "Medium": mediumIcon,
    "High": highIcon,
    "Urgent": urgentIcon,
    "No Priority": noPriorityIcon,
  };

  return (
    <div className="card">
      <div className="card-header">
        {/* Conditionally display the status icon if grouping is not "Status" */}
        {/* {grouping !== "Status" && statusIcons[status] && (
          <div className="status-icon">
            <img src={statusIcons[status]} alt={status} />
          </div>
        )} */}
        <span className="card-id">{id}</span>
        <div className='card-status-title'>
        {grouping !== "Status" && statusIcons[status] && (
          <div className="status-icon">
            <img src={statusIcons[status]} alt={status} />
          </div>
        )}
        <h3 className="card-title">{title}</h3>
        </div>
        <div className="user-avatar">
          <img src={profilepic} alt="User Avatar" />
        </div>
      </div>
      <div className="card-body">
        <p>Status: {status}</p>
        <p>Priority: {priority}</p>
      </div>
      <div className="card-footer">
        <div className="feature-label">
          {/* Conditionally display the priority icon if grouping is not "Priority" */}
          <div>
          {grouping !== "Priority" && priorityIcons[priority] && (
            <div className="priority-icon">
              <img src={priorityIcons[priority]} alt={priority} className="priority-icon-image" />
            </div>
          )}
          </div>
          
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))
          ) : (
            <span>No Tags</span> 
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
