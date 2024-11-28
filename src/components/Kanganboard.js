// // import React, { useState, useEffect } from "react";
// // import Card from "./Card";
// // import display from "../images/Display.svg";
// // import down from "../images/down.svg";
// // import threedotmenu from "../images/3 dot menu.svg";
// // import add from "../images/add.svg";
// // import urgentIcon from "../images/SVG - Urgent Priority colour.svg"; 
// // import highIcon from "../images/Img - High Priority.svg";
// // import mediumIcon from "../images/Img - Medium Priority.svg";
// // import lowIcon from "../images/Img - Low Priority.svg";
// // import noPriorityIcon from "../images/No-priority.svg";
// // import todoIcon from "../images/To-do.svg";
// // import inProgressIcon from "../images/in-progress.svg";
// // import cancelledIcon from "../images/Cancelled.svg";
// // import backlogIcon from "../images/Backlog.svg";
// // import doneIcon from "../images/Done.svg";

// // import "../styles/Kanganboard.css";

// // function Kanganboard() {
// //   const [tickets, setTickets] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [grouping, setGrouping] = useState(() => localStorage.getItem("grouping") || "Status");
// //   const [ordering, setOrdering] = useState(() => localStorage.getItem("ordering") || "Priority");
// //   const [dropdownOpen, setDropdownOpen] = useState(false);

// //   useEffect(() => {
// //     fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         setTickets(data.tickets || []);
// //         setUsers(data.users || []);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         setError(error.message);
// //         setLoading(false);
// //       });
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem("grouping", grouping);
// //   }, [grouping]);

// //   useEffect(() => {
// //     localStorage.setItem("ordering", ordering);
// //   }, [ordering]);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   const priorityMapping = {
// //     0: "No Priority",
// //     1: "Low",
// //     2: "Medium",
// //     3: "High",
// //     4: "Urgent",
// //   };

// //   // Mapping group names to icons
// //   const groupIcons = {
// //     "Urgent": urgentIcon,
// //     "High": highIcon,
// //     "Medium": mediumIcon,
// //     "Low": lowIcon,
// //     "No Priority": noPriorityIcon,
// //     "Todo": todoIcon,
// //     "In progress": inProgressIcon,
// //     "Cancelled": cancelledIcon,
// //     "Backlog": backlogIcon,
// //     "Done": doneIcon,
// //   };

// //   const groupTickets = (criteria) => {
// //     switch (criteria) {
// //       case "Status":
// //         return tickets.reduce((acc, ticket) => {
// //           acc[ticket.status] = acc[ticket.status] || [];
// //           acc[ticket.status].push(ticket);
// //           return acc;
// //         }, {});
// //       case "User":
// //         return tickets.reduce((acc, ticket) => {
// //           const assignedUser = users.find((user) => user.id === ticket.userId)?.name || "Unknown";
// //           acc[assignedUser] = acc[assignedUser] || [];
// //           acc[assignedUser].push(ticket);
// //           return acc;
// //         }, {});
// //       case "Priority":
// //         return tickets.reduce((acc, ticket) => {
// //           const priorityName = priorityMapping[ticket.priority] || "No Priority";
// //           acc[priorityName] = acc[priorityName] || [];
// //           acc[priorityName].push(ticket);
// //           return acc;
// //         }, {});
// //       default:
// //         return {};
// //     }
// //   };

// //   const orderTickets = (tickets, criteria) => {
// //     switch (criteria) {
// //       case "Priority":
// //         const priorityOrder = { Urgent: 4, High: 3, Medium: 2, Low: 1, "No Priority": 0 };
// //         return [...tickets].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
// //       case "Title":
// //         return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
// //       default:
// //         return tickets;
// //     }
// //   };

// //   const groupedTickets = groupTickets(grouping);

// //   return (
// //     <div className="kanban">
// //       <div className="dropdown-wrapper">
// //         <button onClick={() => setDropdownOpen(!dropdownOpen)} className="display-btn">
// //           <img src={display} alt="Settings Icon" />
// //           Display
// //           <img src={down} alt="Down Arrow" />
// //         </button>

// //         {dropdownOpen && (
// //           <div className="dropdown-content">
// //             <div className="dropdown-item">
// //               <span>Grouping</span>
// //               <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
// //                 <option value="Status">Status</option>
// //                 <option value="User">User</option>
// //                 <option value="Priority">Priority</option>
// //               </select>
// //             </div>
// //             <div className="dropdown-item">
// //               <span>Ordering</span>
// //               <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
// //                 <option value="Priority">Priority</option>
// //                 <option value="Title">Title</option>
// //               </select>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       <div className="grouped-container">
// //         {Object.entries(groupedTickets).map(([groupName, groupTickets]) => {
// //           const orderedTickets = orderTickets(groupTickets, ordering);
// //           const icon = groupIcons[groupName] || "https://via.placeholder.com/20";

// //           return (
// //             <div key={groupName} className="group-column">
// //               <div className="group-header">
// //                 <div className="group-name">
// //                   <img src={icon} alt={groupName} className="group-icon" />
// //                   <span>{groupName}</span>
// //                   <span className="ticket-count">{orderedTickets.length}</span>
// //                 </div>
// //                 <div className="plus">
// //                   <img src={add} alt="Add" />
// //                   <img src={threedotmenu} alt="Menu" />
// //                 </div>
// //               </div>
// //               {orderedTickets.map((ticket) => {
// //                 const assignedUser = users.find((user) => user.id === ticket.userId);
// //                 const priorityData = priorityMapping[ticket.priority] || {}; // Get priority label and icon
// //                 return (
// //                   <Card
// //                     key={ticket.id}
// //                     id={ticket.id}
// //                     title={ticket.title}
// //                     status={ticket.status}
// //                     priority={priorityMapping[ticket.priority]}
// //                     priorityIcon={priorityData.icon || noPriorityIcon} // Pass the icon
// //                     userName={assignedUser ? assignedUser.name : "Unknown"}
// //                     tags={ticket.tag || []} // Ensure tags is passed as an array
// //                   />
// //                 );
// //               })}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Kanganboard;


// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import display from "../images/Display.svg";
// import down from "../images/down.svg";
// import threedotmenu from "../images/3 dot menu.svg";
// import add from "../images/add.svg";
// import urgentIcon from "../images/SVG - Urgent Priority colour.svg"; 
// import highIcon from "../images/Img - High Priority.svg";
// import mediumIcon from "../images/Img - Medium Priority.svg";
// import lowIcon from "../images/Img - Low Priority.svg";
// import noPriorityIcon from "../images/No-priority.svg";
// import todoIcon from "../images/To-do.svg";
// import inProgressIcon from "../images/in-progress.svg";
// import cancelledIcon from "../images/Cancelled.svg";
// import backlogIcon from "../images/Backlog.svg";
// import doneIcon from "../images/Done.svg";

// import "../styles/Kanganboard.css";

// function Kanganboard() {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [grouping, setGrouping] = useState(() => localStorage.getItem("grouping") || "Status");
//   const [ordering, setOrdering] = useState(() => localStorage.getItem("ordering") || "Priority");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setTickets(data.tickets || []);
//         setUsers(data.users || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("grouping", grouping);
//   }, [grouping]);

//   useEffect(() => {
//     localStorage.setItem("ordering", ordering);
//   }, [ordering]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   const priorityMapping = {
//     0: "No Priority",
//     1: "Low",
//     2: "Medium",
//     3: "High",
//     4: "Urgent",
//   };

//   // Mapping group names to icons
//   const groupIcons = {
//     "Urgent": urgentIcon,
//     "High": highIcon,
//     "Medium": mediumIcon,
//     "Low": lowIcon,
//     "No Priority": noPriorityIcon,
//     "Todo": todoIcon,
//     "In progress": inProgressIcon,
//     "Cancelled": cancelledIcon,
//     "Backlog": backlogIcon,
//     "Done": doneIcon,
//   };

//   const groupTickets = (criteria) => {
//     let grouped = {};

//     switch (criteria) {
//       case "Status":
//         grouped = tickets.reduce((acc, ticket) => {
//           acc[ticket.status] = acc[ticket.status] || [];
//           acc[ticket.status].push(ticket);
//           return acc;
//         }, {});
//         break;
//       case "User":
//         grouped = tickets.reduce((acc, ticket) => {
//           const assignedUser = users.find((user) => user.id === ticket.userId)?.name || "Unknown";
//           acc[assignedUser] = acc[assignedUser] || [];
//           acc[assignedUser].push(ticket);
//           return acc;
//         }, {});
//         break;
//       case "Priority":
//         grouped = tickets.reduce((acc, ticket) => {
//           const priorityName = priorityMapping[ticket.priority] || "No Priority";
//           acc[priorityName] = acc[priorityName] || [];
//           acc[priorityName].push(ticket);
//           return acc;
//         }, {});
//         break;
//       default:
//         return {};
//     }

//     // Ensure "Done" and "Cancelled" columns are included even if empty
//     if (!grouped["Done"]) grouped["Done"] = [];
//     if (!grouped["Cancelled"]) grouped["Cancelled"] = [];

//     return grouped;
//   };

//   const orderTickets = (tickets, criteria) => {
//     switch (criteria) {
//       case "Priority":
//         const priorityOrder = { Urgent: 4, High: 3, Medium: 2, Low: 1, "No Priority": 0 };
//         return [...tickets].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
//       case "Title":
//         return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
//       default:
//         return tickets;
//     }
//   };

//   const groupedTickets = groupTickets(grouping);

//   return (
//     <div className="kanban">
//       <div className="dropdown-wrapper">
//         <button onClick={() => setDropdownOpen(!dropdownOpen)} className="display-btn">
//           <img src={display} alt="Settings Icon" />
//           Display
//           <img src={down} alt="Down Arrow" />
//         </button>

//         {dropdownOpen && (
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//               <span>Grouping</span>
//               <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
//                 <option value="Status">Status</option>
//                 <option value="User">User</option>
//                 <option value="Priority">Priority</option>
//               </select>
//             </div>
//             <div className="dropdown-item">
//               <span>Ordering</span>
//               <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
//                 <option value="Priority">Priority</option>
//                 <option value="Title">Title</option>
//               </select>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="grouped-container">
//         {Object.entries(groupedTickets).map(([groupName, groupTickets]) => {
//           const orderedTickets = orderTickets(groupTickets, ordering);
//           const icon = groupIcons[groupName] || "https://via.placeholder.com/20";

//           return (
//             <div key={groupName} className="group-column">
//               <div className="group-header">
//                 <div className="group-name">
//                   <img src={icon} alt={groupName} className="group-icon" />
//                   <span>{groupName}</span>
//                   <span className="ticket-count">{orderedTickets.length}</span>
//                 </div>
//                 <div className="plus">
//                   <img src={add} alt="Add" />
//                   <img src={threedotmenu} alt="Menu" />
//                 </div>
//               </div>
//               {orderedTickets.map((ticket) => {
//                 const assignedUser = users.find((user) => user.id === ticket.userId);
//                 const priorityData = priorityMapping[ticket.priority] || {}; // Get priority label and icon
//                 return (
//                   <Card
//                     key={ticket.id}
//                     id={ticket.id}
//                     title={ticket.title}
//                     status={ticket.status}
//                     priority={priorityMapping[ticket.priority]}
//                     priorityIcon={priorityData.icon || noPriorityIcon} // Pass the icon
//                     userName={assignedUser ? assignedUser.name : "Unknown"}
//                     tags={ticket.tag || []} // Ensure tags is passed as an array
//                   />
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Kanganboard;


import React, { useState, useEffect } from "react";
import Card from "./Card";
import display from "../images/Display.svg";
import down from "../images/down.svg";
import threedotmenu from "../images/3 dot menu.svg";
import add from "../images/add.svg";
import urgentIcon from "../images/SVG - Urgent Priority colour.svg"; 
import highIcon from "../images/Img - High Priority.svg";
import mediumIcon from "../images/Img - Medium Priority.svg";
import lowIcon from "../images/Img - Low Priority.svg";
import noPriorityIcon from "../images/No-priority.svg";
import todoIcon from "../images/To-do.svg";
import inProgressIcon from "../images/in-progress.svg";
import cancelledIcon from "../images/Cancelled.svg";
import backlogIcon from "../images/Backlog.svg";
import doneIcon from "../images/Done.svg";

import "../styles/Kanganboard.css";

function Kanganboard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grouping, setGrouping] = useState(() => localStorage.getItem("grouping") || "Status");
  const [ordering, setOrdering] = useState(() => localStorage.getItem("ordering") || "Priority");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTickets(data.tickets || []);
        setUsers(data.users || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("ordering", ordering);
  }, [ordering]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const priorityMapping = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };

  // Mapping group names to icons
  const groupIcons = {
    "Urgent": urgentIcon,
    "High": highIcon,
    "Medium": mediumIcon,
    "Low": lowIcon,
    "No Priority": noPriorityIcon,
    "Todo": todoIcon,
    "In progress": inProgressIcon,
    "Cancelled": cancelledIcon,
    "Backlog": backlogIcon,
    "Done": doneIcon,
  };

  const groupTickets = (criteria) => {
    let grouped = {};

    switch (criteria) {
      case "Status":
        grouped = tickets.reduce((acc, ticket) => {
          acc[ticket.status] = acc[ticket.status] || [];
          acc[ticket.status].push(ticket);
          return acc;
        }, {});
        
        // Ensure "Done" and "Cancelled" columns are included even if empty when grouping by "Status"
        if (!grouped["Done"]) grouped["Done"] = [];
        if (!grouped["Cancelled"]) grouped["Cancelled"] = [];
        break;

      case "User":
        grouped = tickets.reduce((acc, ticket) => {
          const assignedUser = users.find((user) => user.id === ticket.userId)?.name || "Unknown";
          acc[assignedUser] = acc[assignedUser] || [];
          acc[assignedUser].push(ticket);
          return acc;
        }, {});
        break;

      case "Priority":
        grouped = tickets.reduce((acc, ticket) => {
          const priorityName = priorityMapping[ticket.priority] || "No Priority";
          acc[priorityName] = acc[priorityName] || [];
          acc[priorityName].push(ticket);
          return acc;
        }, {});
        break;

      default:
        return {};
    }

    return grouped;
  };

  const orderTickets = (tickets, criteria) => {
    switch (criteria) {
      case "Priority":
        const priorityOrder = { Urgent: 4, High: 3, Medium: 2, Low: 1, "No Priority": 0 };
        return [...tickets].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
      case "Title":
        return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return tickets;
    }
  };

  const groupedTickets = groupTickets(grouping);

  return (
    <div className="kanban">
      <div className="dropdown-wrapper">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="display-btn">
          <img src={display} alt="Settings Icon" />
          Display
          <img src={down} alt="Down Arrow" />
        </button>

        {dropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <span>Grouping</span>
              <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <span>Ordering</span>
              <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="grouped-container">
        {Object.entries(groupedTickets).map(([groupName, groupTickets]) => {
          const orderedTickets = orderTickets(groupTickets, ordering);
          const icon = groupIcons[groupName] || "https://via.placeholder.com/20";

          return (
            <div key={groupName} className="group-column">
              <div className="group-header">
                <div className="group-name">
                  <img src={icon} alt={groupName} className="group-icon" />
                  <span>{groupName}</span>
                  <span className="ticket-count">{orderedTickets.length}</span>
                </div>
                <div className="plus">
                  <img src={add} alt="Add" />
                  <img src={threedotmenu} alt="Menu" />
                </div>
              </div>
              {orderedTickets.map((ticket) => {
                const assignedUser = users.find((user) => user.id === ticket.userId);
                const priorityData = priorityMapping[ticket.priority] || {}; // Get priority label and icon
                return (
                  <Card
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    status={ticket.status}
                    priority={priorityMapping[ticket.priority]}
                    priorityIcon={priorityData.icon || noPriorityIcon} // Pass the icon
                    userName={assignedUser ? assignedUser.name : "Unknown"}
                    tags={ticket.tag || []} // Ensure tags is passed as an array
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Kanganboard;
