<template>
   <div class="todo__statistic">
      <div class="todo__statistic__tasks-created">
         Tasks created
         <div class="todo__statistic__tasks-text">
            {{ allTasks.length }}
         </div>
      </div>
      <div class="todo__statistic__tasks-completed">
         Completed
         <div class="todo__statistic__tasks-text">
            {{ completedTasks.length }}  <span v-if="allTasks.length">{{ 'from ' + allTasks.length }}</span>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
   components: {},
   computed: {
      ...mapGetters(['allTasks', 'completedTasks'])
   }
})
export default class TodoStatistic extends Vue {
   // props

   // fields

   // watchers

   // emits

   // hooks

   // computed
   get allTasks () {
      return this.$store.getters.allTasks
   }

   get completedTasks () {
      return this.$store.getters.completedTasks
   }

   // methods

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__statistic
         padding: 6rem 0 2rem
         display: flex
         justify-content: space-between
      &__statistic__tasks-created
         display: flex
         align-items: center
         gap: .5rem
         color: var(--blue)
         font-size: 1rem
         font-weight: bold
         transition: .3s
      &__statistic__tasks-text
         color: var(--gray-200)
         font-size: 0.9rem
         padding: .2rem .6rem
         background: var(--gray-400)
         border-radius: 1.4rem
         line-height: 0.9rem
         min-width: 2rem
         text-align: center
      &__statistic__tasks-completed
         display: flex
         align-items: center
         gap: .5rem
         color: var(--purple)
         font-size: 1rem
         font-weight: bold
         transition: .3s
</style>
