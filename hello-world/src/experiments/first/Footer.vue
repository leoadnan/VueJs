<template>
   <footer>
      <p>Copyright 2017 {{ title }}</p>
   </footer>
</template>
<script>
import { bus } from '../../main.js';

export default {
   props: {
      title: {
         type: String,
         required: true
      }
   },
   data() {
      return {
      }
   },
   created() {
      bus.$on('titleChanged', (data) => {
         this.title = data;
      })
   }
}
</script>
<style scoped>
footer {
   background: #222;
   padding: 6px;
}

p {
   color: lightgreen;
   text-align: center;
}
</style>