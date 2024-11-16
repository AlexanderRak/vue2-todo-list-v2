# vue2-doto-list-v2

Todo List - is a task management app built using Vue 2, TypeScript, and Vuex for centralized state management. The project demonstrates basic approaches to working with Vue components, Vuex, dynamic transitions between UI states, animations, and efficient architecture.

## Features

- **Adding tasks**: Creating new tasks via a form.
- **Deleting tasks**: Ability to delete tasks using the delete button.
- **Toggle task status**: Set the task status to "completed" or "not completed" using a toggle.
- **Empty task list**: Display a placeholder if the task list is empty..
- **Interface animation**: Smooth transitions between interface states (e.g. displaying a task list or a placeholder).


## Component Structure

1. **`TodoApp`**: The main component managing the application layout and state. It integrates all child components and dynamically switches between the task list and empty state views.
   - **`TodoForm`**: A form for inputting new tasks, consisting of:
     - **`TodoInput`**: Input field for entering a new task title.
     - **`TodoAddButton`**: Button to submit the form and add a new task.
   - **`TodoList`**: Displays the list of active tasks, using:
     - **`TodoItem`**: Represents an individual task and includes:
       - **`TodoRadioButton`**: Toggles the task's completion status.
       - **`TodoRemoveButton`**: Deletes a task from the list.
   - **`TodoListEmpty`**: A placeholder displayed when there are no tasks.
   - **`TodoStatistic`**: Displays task statistics, such as the count of completed and pending tasks.
   - **`Header`**: Provides the application header.
   - **`Footer`**: Provides the application footer.

## Key Concepts

- **Props**:  
  Used to pass data from parent to child components. Examples include:  
  - Passing `tasks` from `TodoApp` to `TodoList` and `TodoItem`.  
  - Transmitting task details to components like `TodoRadioButton` and `TodoRemoveButton`.

- **Emit Events**:  
  Child components emit events to notify their parent of user interactions. Examples include:  
  - **`submit-task`**: Triggered by `TodoForm` to add a new task.  
  - **`remove-task`**: Emitted by `TodoRemoveButton` to delete a task.  
  - **`toggle-status`**: Sent from `TodoRadioButton` to toggle a task's completion status.

- **State Management with Vuex**:  
  Centralized management of the application's state.  
  - **Actions**: Handle adding, deleting, and toggling task statuses.  
  - **Mutations**: Update the `tasks` array in the Vuex store.  
  - **Getters**: Retrieve filtered task lists, like `allTasks`, `completedTasks`, and `incompleteTasks`.

- **Conditional Rendering** (`v-if`):  
  Used to control the visibility of components. Examples include:  
  - Showing `TodoListEmpty` when the `tasks` array is empty.  
  - Displaying `TodoList` when there is at least one active task.  

- **Transitions and Animations**:  
  - Smoothly transition between `TodoList` and `TodoListEmpty` using `<transition>` for better visual feedback.  
  - Apply animations for task addition and deletion to enhance the user experience.

## Project Structure

```plaintext
src/
├── components/
│   ├── TodoApp.vue              # Root component managing layout and state
│   ├── todo/
│   │   ├── TodoForm.vue         # Form component with task input and add button
│   │   ├── TodoStatistic.vue    # Component showing task statistics
│   │   ├── TodoList.vue         # List of active tasks
│   │   ├── TodoItem.vue         # Individual task item component
│   │   ├── TodoListEmpty.vue    # Placeholder when no tasks are present
│   └── ui/
│       ├── TodoInput.vue        # Input field for task title
│       ├── TodoAddButton.vue    # Button to add a task
│       ├── TodoRemoveButton.vue # Button to delete a task
│       ├── TodoRadioButton.vue  # Radio button to toggle task status
├── store/
│   ├── index.ts                 # Vuex store setup
│   └── modules/
│       └── tasks.ts             # Vuex module for task management
└── components/
    └── layout/
        ├── Header.vue           # Header layout component
        └── Footer.vue           # Footer layout component
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
