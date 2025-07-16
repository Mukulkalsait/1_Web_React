✅ Master Task List (Development Steps)

🛠 Project Setup
Initialize project with Vite + React + TypeScript
Install dependencies (@mui/*, @emotion/*, @hello-pangea/dnd, localforage)
Set up folder structure (components/, types/, hooks/, etc.)
Configure ESLint + Prettier (optional but best practice)

💡 Data & State

Define types: Task, Column, Subtask
Create initial board data (dummy tasks)
Create usePersistentState hook for localforage-based storage
Store and retrieve task data using localforage
Implement task ID generation (uuid or timestamp)

🧱 UI Components

Create Board.tsx component
Create Column.tsx component
Create TaskCard.tsx component
Add basic styling with Material UI
Use Grid/Flexbox to layout columns

🧲 Drag & Drop

Wrap board in <DragDropContext>
Wrap columns in <Droppable>
Wrap cards in <Draggable>
Implement onDragEnd logic to move tasks between columns
Persist drag result in localforage

📝 Task Management Features

Create a TaskDialog.tsx (modal for add/edit task)
Add a "New Task" button to each column
Implement create task
Implement edit task (pre-fill dialog)
Implement delete task
Validate task input (title required)

📅 Due Dates & Subtasks (Bonus Features)

Add optional due date field in task dialog
Add subtasks support (array of checkbox inputs)
Show due date on TaskCard
Show subtasks with progress (like 1/3 done)
Color-code due dates by urgency (red/yellow/green)

💄 Polishing & UX

Add animations during drag/drop
Add hover and click styles using MUI
Make UI mobile responsive
Show snackbar or alert on task creation/edit/deletion (optional)
Add empty state message if no tasks
Add loader while localforage is loading (optional)

📦 Finalization

Test in incognito mode for persistence
Test mobile responsiveness
Add README file
Include instructions & assumptions in README
Add screenshots (optional)
Push to GitHub private repo
Invite @okarin1511 as collaborator
