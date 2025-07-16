const boardData: BoardData = {
  // IMP: tasks = BoardData.tasks
  tasks: {
    'task-1': {
      id: 'task-1', // Y: Task.id
      title: 'File Taxes', // Y: Task.title
      dueDate: '2025-06-10', // Optional Task.dueDate
      description: 'Prepare and submit tax returns',
      subtasks: [
        // Y: Optional Task.subtasks
        {
          id: 'subtask-1',
          title: 'Collect receipts',
          completed: false, // Y:  Subtask.In-complete.
        },
        {
          id: 'subtask-2',
          title: 'Fill Form 16',
          completed: true,
        },
      ],
    },
    'task-2': {
      id: 'task-2',
      title: 'Design UI for new dashboard',
    },
    'task-3': {
      id: 'task-3',
      title: 'Book flight tickets',
    },
  },

  // IMP: columns = BoardData.columns
  columns: {
    not_started: {
      id: 'not_started', // Y:  Column.id
      title: 'Not Started', // Column.title
      taskIds: ['task-1'], // Matches Task.id
    },
    in_progress: {
      id: 'in_progress',
      title: 'In Progress',
      taskIds: ['task-2'],
    },
    blocked: {
      id: 'blocked',
      title: 'Blocked',
      taskIds: [],
    },
    done: {
      id: 'done',
      title: 'Done',
      taskIds: ['task-3'],
    },
  },
};

/*
 *
 * G:
 * |-------------|---------------|-----------------------------------|------------------------------------------|----------------------------|
 * | Object      | Field         | Type Definition                   | Description                              |                            |
 * |-------------|---------------|-----------------------------------|------------------------------------------|----------------------------|
 * | `Task`      | `id`          | `string`                          | Unique task identifier                   |                            |
 * |             | `title`       | `string`                          | Title shown on card                      |                            |
 * |             | `description` | `string?`                         | (Optional) Longer details                |                            |
 * |             | `dueDate`     | `string?`                         | (Optional) ISO date format               |                            |
 * |             | `subtasks`    | `Subtask[]?`                      | (Optional) List of subtasks              |                            |
 * | `Subtask`   | `id`          | `string`                          | Unique within task                       |                            |
 * |             | `title`       | `string`                          | Subtask text                             |                            |
 * |             | `completed`   | `boolean`                         | Status of subtask                        |                            |
 * | `Column`    | `id`          | \`"not\_started"                  | "in\_progress" ...\`                     | Matches `ColumnType` union |
 * |             | `title`       | `string`                          | Display label for column                 |                            |
 * |             | `taskIds`     | `string[]`                        | Ordered task IDs (must exist in `tasks`) |                            |
 * | `BoardData` | `tasks`       | `{ [key: string]: Task }`         | Dictionary of all tasks                  |                            |
 * |             | `columns`     | `{ [key in ColumnType]: Column }` | Dictionary of all 4 board columns        |                            |
 * |-------------|---------------|-----------------------------------|------------------------------------------|----------------------------|
 * */
