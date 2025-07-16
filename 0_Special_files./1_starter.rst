1.
$ pnpm create vite@latest kanban-board --template
  =============================
$ cd kanban-board
  =============================
$ pnpm install
  ================
    1+
    react ✅
    typescript ✅
    ----------------------------

## Exptected ForderStracture

1_specialFiels
kanban_bpard
├src/  
│ ├──1_components/  
│ │ ├── Board.tsx  
│ │ ├── Column.tsx  
│ │ ├── TaskCard.tsx  
│ │ └── TaskDialog.tsx # For creating/editing tasks (optional)  
│ ├──2_hooks/  
│ │ └── useLocalStorage.ts # To persist data  
│ ├──3_types/  
│ │ └── index.ts # Task and Column types  
│ ├──4_utils/  
│ │ └── helpers.ts # e.g. date formatting  
│ ├── App.tsx  
│ └── main.tsx  
│  
├README.md

---


2.  
$ pnpm add @mui/material @emotion/react @emotion/styled @mui/icons-material
  ===========================================================================
      Packages: +84
      Progress: resolved 84, reused 43, downloaded 41, added 84, done

      dependencies:
      + @emotion/react 11.14.0
      + @emotion/styled 11.14.0
      + @mui/icons-material 7.1.1
      + @mui/material 7.1.1

$ pnpm add @hello-pangea/dnd                                               
  =============================
      Packages: +8
      Progress: resolved 92, reused 84, downloaded 8, added 8, done

      dependencies:
      + @hello-pangea/dnd 18.0.1

$ pnpm install localforage  
  =============================
      Packages: +3
      Progress: resolved 95, reused 92, downloaded 3, added 3, done

      dependencies:
      + localforage 1.10.0

