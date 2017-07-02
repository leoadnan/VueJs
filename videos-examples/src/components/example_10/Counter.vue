<template>
   <div>
      <button class="btn btn-primary" @click="increment(100)">Increment</button>
      <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
   </div>
</template>

<script>
// import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';
import * as Types from '../../store/types';

export default {
   methods: {
      ...mapActions({
         increment: Types.COUNTER_INCREMENT,
         decrement: Types.COUNTER_DECREMENT
      })
   }
   // methods: {
   //    ...mapMutations([
   //       'increment',
   //       'decrement'
   //    ])
   // }
   // methods: {
   //    increment() {
   //       this.$store.state.counter++;
   //    },
   //    decrement() {
   //       this.$store.state.counter--;
   //    }
   // }
}
</script>