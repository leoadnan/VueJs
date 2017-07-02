<template>
   <div>
      <p>Counter is: {{ doubleCounter }}</p>
      <p>Number of clicks: {{ stringCounter }}</p>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as Types from '../../store/types';

export default {
   computed: {
      ...mapGetters({
         doubleCounter: Types.DOUBLE_COUNTER,
         stringCounter: Types.CLICK_COUNTER
      })
   },
   myOwnMethod() {

   }
}
</script>