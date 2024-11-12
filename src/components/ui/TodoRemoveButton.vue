<template>
   <button @click="removeTask" class="todo__remove-button">
      ❌
   </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Task } from '../types'

@Component({})
export default class TodoRemoveButton extends Vue {
   // props
   @Prop({ required: true }) readonly task!: Task;

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   removeTask () {
      this.$emit('remove-task', this.task.id)
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__remove-button
         background: none
         border: none
         cursor: pointer
         font-size: 1.2em
</style>
