<template>
   <transition-group name="slide-fade" tag="div" class="todo__list">
      <TodoItem
         v-for="task in tasks"
         :key="task.id"
         :task="task"
      />
   </transition-group>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from '../todo/TodoItem.vue'
import { mapGetters } from 'vuex'

@Component({
   components: {
      TodoItem
   },
   computed: {
      ...mapGetters(['allTasks'])
   }
})
export default class TodoList extends Vue {
   // props

   // fields

   // watchers

   // emits

   // hooks

   // computed
   get tasks () {
      return this.$store.getters.allTasks
   }

   // methods

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__list
         display: flex
         flex-direction: column
         gap: 1rem
         position: relative
         z-index: 2
   .slide-fade-enter-active, .slide-fade-leave-active
      transition: all .3s ease
   .slide-fade-enter
      transform: translateX(10px)
      opacity: 0
   .slide-fade-leave-to
      transform: translateX(-10px)
      opacity: 0
</style>
