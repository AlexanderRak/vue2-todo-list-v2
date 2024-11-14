<template>
   <div class="todo__list-item">
      <TodoRadioButton
         :task="task"
         @toggle-task-status="toggleTaskStatus"
      />
      <div
         class="todo__list-item__text"
         :class="{ completed: task.completed }"
      >
         {{ task.title }}
      </div>
      <TodoRemoveButton
         :task="task"
         @remove-task="removeTask"
      />
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Task } from '../types'
import TodoRadioButton from '../ui/TodoRadioButton.vue'
import TodoRemoveButton from '../ui/TodoRemoveButton.vue'

@Component({
   components: {
      TodoRadioButton,
      TodoRemoveButton
   }
})
export default class TodoForm extends Vue {
   // props
   @Prop({ required: true }) readonly task!: Task

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   toggleTaskStatus (taskId: number) {
      this.$store.dispatch('toggleTaskStatus', taskId)
   }

   removeTask (taskId: number) {
      this.$store.dispatch('removeTask', taskId)
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__list-item
         background: var(--gray-500)
         padding: 1rem
         border-radius: 0.5rem
         display: grid
         grid-template-columns: 1.5rem 1fr 1.5rem
         grid-gap: 12px
         color: #000
      &__list-item__text
         font-size: 1rem
         color: var(--gray-100)
         transition: .3s
         &.completed
            text-decoration: line-through
            color: var(--gray-300)
</style>
