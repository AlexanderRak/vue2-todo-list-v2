<template>
   <div class="todo__header">
      <img src="../../assets/images/rocket.svg" alt="">
      <img src="../../assets/images/todo.svg" alt="">
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
   components: {}
})
export default class Header extends Vue {
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
      &__header
         background: #0D0D0D
         height: 200px
         display: flex
         align-items: center
         justify-content: center
</style>
