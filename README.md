# Static-to_do-list
A simple and responsive to-do list web application built with Node.js, Express.js, and EJS. This app allows users to dynamically add and view tasks through a web interface. All tasks are stored temporarily in memory (not persisted in a database).
📋 Features
📝 Add new tasks instantly using a form

🔁 Dynamically render the updated list without page reloads

❌ Delete functionality can be easily extended

🎨 Basic layout rendered using EJS templates

📦 Organized folder structure with static file support

🛠️ Tech Stack
Layer	Technology
Backend	Node.js, Express.js
Templating	EJS
Middleware	Body-Parser
Static Assets	HTML, CSS (served from public/)

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/dynamic-todo-app.git
cd dynamic-todo-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App
bash
Copy
Edit
node app3.js
4. Open in Browser
arduino
Copy
Edit
http://localhost:8000
🧠 How It Works
The app serves a single page where users can input task names.

On submission, the task is added to an in-memory array (items[]).

The list is re-rendered using EJS with the new task.

Since it's in-memory, the list resets when the server restarts.

📁 Project Structure
php
Copy
Edit
project-root/
├── app3.js              # Main application file
├── views/
│   └── list1.ejs        # Template for the to-do list page
├── public/              # Static files (optional CSS/JS)
└── package.json
🔮 Possible Future Upgrades
💾 Add persistent storage using MongoDB and Mongoose

🧼 Add task deletion and completion marking

🔐 Add user authentication for multiple user lists

🌐 Deploy using Render, Vercel, or Heroku

👤 Author
Dev S
GitHub: voidbridger
