<template>
   <div class="todo__list">
      <TodoItem
         v-for="task in tasks"
         :key="task.id"
         :task="task"
      />
   </div>
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

</style>
