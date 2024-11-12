<template>
   <div class="todo__list-empty">
      <div class="todo__list-empty-img">
         <img src="../../assets/images/Clipboard.svg" alt="">
      </div>
      <div class="todo__list-empty-text">
         You don't have any tasks registered yet Create tasks and organize your to-do items
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
</style>
