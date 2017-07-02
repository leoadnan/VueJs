<template>
   <div>
      <button class="btn btn-primary" @click="asyncIncrement({by:100, duration:500})">Increment</button>
      <button class="btn btn-primary" @click="asyncDecrement({by:100, duration:500})">Decrement</button>
   </div>
</template>

<script>
import {mapActions} from 'vuex';
import * as Types from '../../store/types';

export default {
   methods: {
      ...mapActions({
         asyncIncrement: Types.COUNTER_INCREMENT_ASYNC,
         asyncDecrement: Types.COUNTER_DECREMENT_ASYNC
      }),
      // asyncIncrement(by){
      //    this.$store.dispatch('increment',by)
      // }
   }
}
</script>