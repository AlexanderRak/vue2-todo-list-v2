<template>
   <form
      @submit.prevent="submitTask"
      class="todo__form"
   >
      <TodoInput
         v-model="newTaskTitle"
      />
      <TodoAddButton
         @click="submitTask"
      />
   </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoInput from '../ui/TodoInput.vue'
import TodoAddButton from '../ui/TodoAddButton.vue'

@Component({
   components: {
      TodoInput,
      TodoAddButton
   }
})
export default class TodoForm extends Vue {
   // props

   // fields
   newTaskTitle = '';

   // watchers

   // emits

   // hooks

   // computed

   // methods
   submitTask () {
      if (this.newTaskTitle.trim()) {
         this.$store.dispatch('addTask', this.newTaskTitle.trim())
         this.newTaskTitle = ''
      }
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__form
         display: grid
         grid-template-columns: 1fr 7rem
         grid-gap: .4rem
         height: 3rem
   @media (max-width: 480px)
      .todo
         &__form
            grid-template-columns: 1fr
            height: auto
         &__input, &__add-task-button
            height: 3rem
</style>
