<template>
   <div style="color: #fff;">
      {{ task.title }}
      <TodoRadioButton
         :task="task"
         @toggle-task-status="toggleTaskStatus"
      />
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

</style>
