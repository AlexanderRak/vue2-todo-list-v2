<template>
   <div class="todo__list-empty">
      <div class="todo__list-empty-img">
         <img src="../../assets/images/Clipboard.svg" alt="">
      </div>
      <div class="todo__list-empty-text">
         You don't have any tasks registered yet.<br>Create tasks and organize your to-do items
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TodoListEmpty extends Vue {
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
      &__list-empty
         padding: 64px 24px
         display: flex
         flex-direction: column
         align-items: center
         box-shadow: inset 0px 3px 0px -1px #333333
         border-radius: 14px
         position: absolute
         top: 0
         left: 0
         width: 100%
         z-index: 1
      &__list-empty-text
         text-align: center
         color: var(--gray-300)
         font-size: 1.2rem
         padding-top: 1.6rem
         font-weight: bold
   @media (max-width: 480px)
         .todo
            &__list-empty-text
               font-size: .9rem
</style>
