<template>
   <input
      type="text"
      aria-label="Task"
      class="todo__input"
      placeholder="Add a new task"
      :value="value"
      @input="onInput"
   >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class TodoInput extends Vue {
   // props
   @Prop({ default: '' }) readonly value!: string;

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   onInput (event: Event) {
      const target = event.target as HTMLInputElement | null
      if (target) {
         this.$emit('input', target.value)
      }
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__input
         border: 1px solid var(--gray-700)
         background: var(--gray-500)
         color: var(--gray-300)
         border-radius: 8px
         font-size: 1rem
         padding: 0 1rem
         transition: .3s
         outline: none
         &:hover
            border: 1px solid var(--input-hover)
            &:focus
               border: 1px solid var(--input-focus)
               color: var(--gray-100)
               box-shadow: 0 0 3px 0px var(--input-focus)
</style>
