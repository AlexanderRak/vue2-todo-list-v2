<template>
   <button
      type="button"
      @click="toggleStatus"
      class="todo__task-radio-button"
      :class="{ completed: task.completed }"
   >
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
      &__task-radio-button
         background: none
         border: none
         cursor: pointer
         width: 1.3rem
         height: 1.3rem
         border-radius: 50%
         border: 2px solid var(--blue)
         transition: .3s
         position: relative
         &:focus
            outline: 0
         &:hover
            border: 2px solid var(--purple-dark)
         &.completed
            background: var(--purple-dark)
            border: 2px solid var(--purple-dark)
            &::before
               content: ""
               background-image: url('~@/assets/images/str.svg')
               background-repeat: no-repeat
               background-size: cover
               position: absolute
               top: 50%
               left: 50%
               transform: translate(-50%, -50%)
               width: .8rem
               height: .5rem
            &:hover
               background: var(--purple)
               border: 2px solid var(--purple)
</style>
