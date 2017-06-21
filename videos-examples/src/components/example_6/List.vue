<template>
   <div>
      <input v-model="filterText" />
      <ul>
         <li v-for="f in filterFruit">{{f}}</li>
      </ul>
   </div>
</template>

<script>
import {fruitMixin} from './fruitMixin.js'
export default {
   mixins: [fruitMixin],
   created() {
      console.log('Inside List Created Hook!')
   }
}
</script>

<style>

</style>
