
.. R:  Material UI (@mui) ===================================================================================
🧩 Material UI (@mui)

Material UI is a React component library implementing Google’s Material Design system. It provides accessible, responsive, and customizable components out of the box.
📦 Installed Packages

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

Package Use
@mui/material Core UI components (Button, Card, Grid, etc.)
@mui/icons-material Ready-to-use Material Design icons
@emotion/react CSS-in-JS styling engine for theming/styling MUI
@emotion/styled Styled-component-like API for custom MUI components
🎨 Why Use It?

Saves time (pre-built components)
Consistent design (Material guidelines)
Easily customizable themes
Works seamlessly with TypeScript and React Hooks
 
.. R: @hello-pangea/dnd  ===================================================================================
.. G: deprecated now use DND/KIT

🪄 @hello-pangea/dnd

A fork of react-beautiful-dnd after it was deprecated. Provides drag-and-drop functionality between components using native events and beautiful motion.
🛠 Features

Easy to set up drag & drop UI
Built-in accessibility and keyboard support
Animates on drop
Works with complex UIs like lists and cards

🧠 Key Components
Component Role
<DragDropContext> Root wrapper to handle drag
<Droppable> Defines drop area (e.g. column)
<Draggable> Defines draggable item (e.g. task card)
💡 Why It’s Ideal

Perfect for building Trello-like boards with complex reordering and smooth animations, without managing DOM events manually.

.. R: localforage ===================================================================================

💾 localforage
✅ What is it?

A JavaScript storage library that wraps IndexedDB, WebSQL, or localStorage with a simple Promise-based API.
🆚 Compared to localStorage
Feature localStorage localforage
Async ❌ No ✅ Yes
Store objects ❌ No ✅ Yes
Backend fallback ❌ No ✅ Yes
Uses IndexedDB ❌ No ✅ Yes
📦 Why Use It?

More reliable than localStorage
Scalable to store large JSONs
Async API avoids blocking the main thread
Makes your app production-grade even without a backend
import localforage from 'localforage';

// Save
localforage.setItem('myBoard', boardData);

// Load
const data = await localforage.getItem('myBoard');

