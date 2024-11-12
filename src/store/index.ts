import Vue from 'vue'
import Vuex from 'vuex'
import { Task } from '../components/types'

Vue.use(Vuex)

export interface RootState {
   tasks: Task[];
}

export default new Vuex.Store({
   state: {
      tasks: [] as Task[]
   },
   getters: {
      allTasks (state): Task[] {
         return state.tasks
      },
      completedTasks (state): Task[] {
         return state.tasks.filter(task => task.completed)
      },
      inCompleteTasks (state): Task[] {
         return state.tasks.filter(task => !task.completed)
      },
      isTaskListEmpty (state): boolean {
         return state.tasks.length === 0
      }
   },
   mutations: {
      ADD_TASK (state, newTask: Task) {
         state.tasks.push(newTask)
      },
      REMOVE_TASK (state, taskId: number) {
         const task = state.tasks.find(task => task.id === taskId)
         if (task) {
            task.removed = true
            state.tasks = state.tasks.filter(t => t.id !== taskId)
         }
      },
      TOGGLE_TASK_STATUS (state, taskId: number) {
         const task = state.tasks.find(task => task.id === taskId)
         if (task) task.completed = !task.completed
      }
   },
   actions: {
      addTask ({ commit }, title: string) {
         const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
            removed: false
         }
         commit('ADD_TASK', newTask)
      },
      removeTask ({ commit }, taskId: number) {
         commit('REMOVE_TASK', taskId)
      },
      toggleTaskStatus ({ commit }, taskId: number) {
         commit('TOGGLE_TASK_STATUS', taskId)
      }
   },
   modules: {
   }
})
