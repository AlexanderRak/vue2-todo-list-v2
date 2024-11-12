<template>
   <div id="TodoApp">
      <div class="todo__wrapper">
         <Header/>
         <div class="todo__container">
            <TodoForm/>
            <TodoStatistic/>
            <TodoList
               v-if="tasks.length"
            />
            <TodoListEmpty
               v-else
            />
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
         max-width: 766px
         padding: 0 15px
         margin: -27px auto 0 auto
</style>
