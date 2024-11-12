<template>
   <div class="todo__statistic">
      <div class="todo__statistic__tasks-created">
         {{ allTasks.length }}
      </div>
      <div class="todo__statistic__tasks-completed">
         {{ completedTasks.length }}
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

</style>
