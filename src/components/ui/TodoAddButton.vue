<template>
   <button
      type="submit"
      class="todo__add-task-button"
      @click="$emit('click')"
   >
      <div class="todo__add-task-button-text">
         Create
      </div>
   </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TodoAddButton extends Vue {
   // props

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__add-task-button
         border: 1px solid var(--gray-700)
         background: var(--blue-dark)
         border-radius: 8px
         color: var(--gray-100)
         font-size: 14px
         font-weight: bold
         cursor: pointer
         transition: .3s
         &:hover
            background: var(--blue)
            border: 1px solid var(--blue)
      &__add-task-button-text
         position: relative
         padding: 0 1.4rem 0 0
         display: inline-flex
         line-height: 1.1
         &::before
            content: ""
            background-image: url('~@/assets/images/plus.svg')
            width: 16px
            height: 16px
            position: absolute
            right: 0
</style>
