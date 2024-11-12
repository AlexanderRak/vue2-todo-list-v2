<template>
   <button @click="toggleStatus" class="todo__radio-button">
      {{ task.completed ? '✔️' : '⬜️' }}
   </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Task } from '../types'

@Component({})
export default class TodoRadioButton extends Vue {
   // props
   @Prop({ required: true }) readonly task!: Task;

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   toggleStatus () {
      this.$emit('toggle-task-status', this.task.id)
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__radio-button
         background: none
         border: none
         cursor: pointer
         font-size: 1.2em
</style>
