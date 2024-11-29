# **Frontend Assignment: Kanban Board Application** 🗂️

## **Project Description** 🎯

This project is an interactive **Kanban Board Application** built with **React JS**. The application interacts with the provided API to fetch ticket data and allows users to dynamically group and sort tickets based on various criteria such as priority, status, or other parameters.

---

## **API Endpoint** 🌐

The application fetches data from the following API:  
[https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment)

---

## **Setup Instructions** ⚙️

Follow these steps to set up and run the project locally:

```bash
### 1. **Clone the Repository**

git clone https://github.com/sskkyy786/apportassignment.git
cd kanban-board

### 2. **Install Dependencies**

Install all necessary packages required to run the project.
npm install

### 3. **Run the Development Server**

npm start
Start the development server. The application will open in your default web browser at http://localhost:3000.

### 4. **Build for Production (Optional)**

To create a production build of the project:
npm run build

Project Structure 📂
The project follows a well-organized structure as shown below:

├── public/
│   └── index.html         # Main HTML file
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Kanbanboard.js # Main Kanban Board component
│   │   ├── Card.js        # Ticket Card component
│   ├── App.css            # Global styles
│   ├── App.js             # Main App component
│   └── index.js           # Application entry point
├── .gitignore
├── README.md
└── package.json
