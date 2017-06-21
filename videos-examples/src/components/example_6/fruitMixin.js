export const fruitMixin = {
   data() {
      return {
         fruits: [
            'Apple', 'Banana', 'Melon', 'Pineapple', 'Mango'
         ],
         filterText: ''
      }
   },
   computed: {
      filterFruit() {
         return this
            .fruits
            .filter((e) => {
               return e.match(this.filterText);
            });
      }
   },
   created() {
      console.log('created')
   }
}