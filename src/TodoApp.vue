<template>
   <div id="TodoApp">
      <div class="todo__wrapper">
         <Header/>
         <div class="todo__container">
            <TodoForm/>
            <TodoStatistic/>
            <transition-group name="fade" tag="div" class="todo__list-wrap">
               <TodoList
                  v-if="tasks.length"
                  :key="'todo-list'"
               />
               <TodoListEmpty
                  v-else
                  :key="'todo-list-empty'"
               />
            </transition-group>
         </div>
         <Footer/>
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import Header from './components/layout/Header.vue'
import TodoForm from './components/todo/TodoForm.vue'
import TodoStatistic from './components/todo/TodoStatistic.vue'
import TodoList from './components/todo/TodoList.vue'
import TodoListEmpty from './components/todo/TodoListEmpty.vue'
import Footer from './components/layout/Footer.vue'

@Component({
   components: {
      Header,
      TodoForm,
      TodoStatistic,
      TodoList,
      TodoListEmpty,
      Footer
   },
   computed: {
      ...mapGetters(['allTasks'])
   }
})
export default class TodoApp extends Vue {
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
      &__container
         max-width: 46rem
         padding: 0 1rem 2rem 1rem
         margin: -24px auto 5rem auto
         position: relative
         z-index: 3
      &__list-wrap
         position: relative
   .fade-enter-active, .fade-leave-active
      transition: opacity .5s
   .fade-enter, .fade-leave-to
      opacity: 0
</style>
