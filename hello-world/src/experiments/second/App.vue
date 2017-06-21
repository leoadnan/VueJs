<template>
   <div>
      <component v-bind:is="component"></component>
   </div>
</template>

<script>
import formOne from './formOne';
import formTwo from './formTwo';

export default {
   components: {
      'form-one': formOne,
      'form-two': formTwo,
   },
   data() {
      return {
         component: 'form-two'
      }
   },
   methods: {

   }
}
</script>

<style>

</style>
