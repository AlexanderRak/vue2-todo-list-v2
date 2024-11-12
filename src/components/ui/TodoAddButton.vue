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
         border: 0
         background: var(--blue-dark)
         border-radius: 8px
         padding: 0 16px
         color: var(--gray-100)
         font-size: 14px
         font-weight: bold
         cursor: pointer
         transition: .3s
         &:hover
            background: var(--blue)
            box-shadow: 0 0 3px 0px var(--blue)
      &__add-task-button-text
         position: relative
         padding-right: 22px
         &::before
            content: ""
            background-image: url('~@/assets/images/plus.svg')
            width: 16px
            height: 16px
            position: absolute
            right: 0
</style>
