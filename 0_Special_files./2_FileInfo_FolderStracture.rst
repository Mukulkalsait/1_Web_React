Project Structure
=================

Default Vite TS Template Structure
----------------------------------

After running ``pnpm create vite`` with the ``react-ts`` template, the default project structure is:

::

    kanban-board/
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── public/
    │   └── vite.svg
    └── src/
        ├── App.css
        ├── App.tsx
        ├── assets/
        │   └── react.svg
        ├── main.tsx
        └── index.css

What We Clean or Remove
------------------------

- ``App.css``: Removed (we use Material UI instead of raw CSS)
- ``assets/react.svg``: Removed
- ``App.tsx``: Reset for new layout
- ``index.css``: Optional; kept for global styles

What We Add
-----------

- ``src/components/``: React UI components like Board, Column, TaskCard
- ``src/types/``: TypeScript interfaces for Task, Board, etc.
- ``src/hooks/``: Custom hooks such as usePersistentState
- ``src/utils/``: Helper functions (e.g., date formatting)
- ``src/styles/`` (optional): Global CSS/MUI theme overrides
- ``.gitignore``: Clean ignore list for pnpm, Node, and IDEs
- ``README.md``: For documenting setup, assumptions, and instructions







components/ → React components like Board, Column, TaskCard
types/ → TypeScript interfaces
hooks/ → Custom React hooks (e.g., usePersistentState)
utils/ → Helper functions like sorting, dates, etc.
