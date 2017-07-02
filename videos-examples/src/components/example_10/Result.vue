<template>
   <p>Counter is: {{ counter }}</p>
</template>

<script>
import * as Types from '../../store/types';
import {mapGetters} from 'vuex';
export default {
  computed: {
      ...mapGetters({
         counter: Types.DOUBLE_COUNTER
      })
   },
}
</script>